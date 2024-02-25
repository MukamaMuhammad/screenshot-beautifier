"use client";
import React from "react";
import { useState } from "react";
import JsBarcode from "jsbarcode";
import JSZip from "jszip";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const Barcode = () => {
  const [inputText, setInputText] = useState("");
  const [barcodes, setBarcodes] = useState([]);
  const [zipFile, setZipFile] = useState(null);

  const generateBarcodes = () => {
    const lines = inputText.split("\n");
    const generatedBarcodes = [];

    for (const line of lines) {
      const canvas = document.createElement("canvas");
      JsBarcode(canvas, line, { format: "CODE128" });
      generatedBarcodes.push({ canvas, name: line });
    }

    setBarcodes(generatedBarcodes);
  };

  const downloadSingleBarcode = (name, canvas) => {
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = `${name}_barcode.png`;
    a.click();
  };

  const downloadAllBarcodes = () => {
    const zip = new JSZip();

    barcodes.forEach(({ name, canvas }) => {
      zip.file(
        `${name}_barcode.png`,
        canvas.toDataURL("image/png").split(",")[1],
        { base64: true }
      );
    });

    zip.generateAsync({ type: "blob" }).then((blob) => {
      setZipFile(blob);
    });
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-4 items-center justify-center py-10 md:py-20">
        <h1 className="text-center">Bulk Barcode Generator</h1>
        <p className="text-center">Enter each barcode data on a new line:</p>
        <Textarea
          value={inputText}
          onChange={handleInputChange}
          className="md:w-[60%] w-[90%] text-black"
          placeholder="Type your barcode data, one code per line"
        />
        <Button onClick={generateBarcodes}>Generate Barcodes</Button>
        <div>
          <ScrollArea className="md:h-[60vh] h-[40vh] w-[80vw] rounded-md border p-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {barcodes.map(({ canvas, name }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <img
                    src={canvas.toDataURL("image/png")}
                    alt={`Barcode for ${name}`}
                  />
                  <Button
                    className="mt-2 text-black"
                    variant="outline"
                    onClick={() => downloadSingleBarcode(name, canvas)}
                  >
                    Download
                  </Button>
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
        <div>
          {barcodes.length > 0 && (
            <div>
              <Button onClick={downloadAllBarcodes}>Download All as Zip</Button>
            </div>
          )}
        </div>
        <div>
          {zipFile && (
            <a href={URL.createObjectURL(zipFile)} download="barcodes.zip">
              <Button>Download Zip file</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Barcode;
