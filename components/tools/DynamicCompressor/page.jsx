"use client";
import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import JSZip from "jszip";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const DynamicCompressor = ({ size, format }) => {
  const [inputImages, setInputImages] = useState([]);
  const [compressedImages, setCompressedImages] = useState([]);
  const [zipFile, setZipFile] = useState(null);
  const [compressionOptions, setCompressionOptions] = useState({
    quality: 0.8,
    maxSizeMB: size,
    maxWidthOrHeight: 4096,
  });
  const [dropText, setDropText] = useState(
    "Drag and drop images here, or click to select multiple images."
  );

  const compressImages = async () => {
    const compressedImagePromises = inputImages.map(async (image) => {
      const options = {
        quality: compressionOptions.quality,
        maxSizeMB: compressionOptions.maxSizeMB, // Adjust the maximum size as needed
        maxWidthOrHeight: compressionOptions.maxWidthOrHeight, // Adjust the maximum width or height as needed
      };

      try {
        const compressedFile = await imageCompression(image, options);
        return { file: compressedFile, name: image.name };
      } catch (error) {
        console.error("Error compressing image", error);
        return null;
      }
    });

    const compressedResults = await Promise.all(compressedImagePromises);
    setCompressedImages(compressedResults.filter((result) => result !== null));
  };

  const downloadSingleCompressedImage = (name, file) => {
    const a = document.createElement("a");
    const url = URL.createObjectURL(file);
    a.href = url;
    a.download = `${name}_compressed.${file.type.split("/")[1]}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadAllCompressedImages = () => {
    const zip = new JSZip();

    compressedImages.forEach(({ name, file }) => {
      zip.file(`${name}_compressed.${file.type.split("/")[1]}`, file);
    });

    zip.generateAsync({ type: "blob" }).then((blob) => {
      setZipFile(blob);
    });
  };

  const handleInputChange = (event) => {
    const files = event.target.files;
    setInputImages([...inputImages, ...files]);
    setDropText(`You've added ${inputImages.length + files.length} image(s).`);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    setInputImages([...inputImages, ...files]);
    setDropText(`You've added ${inputImages.length + files.length} image(s).`);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleQualityChange = (event) => {
    setCompressionOptions({
      ...compressionOptions,
      quality: parseFloat(event.target.value),
    });
  };

  const handleMaxSizeChange = (event) => {
    setCompressionOptions({
      ...compressionOptions,
      maxSizeMB: parseFloat(event.target.value),
    });
  };

  const handlemaxWidthOrHeightChange = (event) => {
    setCompressionOptions({
      ...compressionOptions,
      maxWidthOrHeight: parseFloat(event.target.value),
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-4 items-center justify-center py-10 md:py-20">
        <h1 className="text-center">Compress JPEG To {format}</h1>
        <p className="text-center">Select multiple images to compress:</p>
        <label
          htmlFor="fileInput"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="w-[80vw] h-[40vh] border-dashed border-2 rounded-md flex items-center justify-center cursor-pointer"
        >
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleInputChange}
            multiple
          />
          <p className="text-center">{dropText}</p>
        </label>
        {inputImages.length > 0 && (
          <div className="flex flex-col items-center mt-4">
            <label htmlFor="quality">Quality:</label>
            <input
              type="range"
              id="quality"
              min="0"
              max="1"
              step="0.01"
              value={compressionOptions.quality}
              onChange={handleQualityChange}
            />
            <span>{compressionOptions.quality}</span>

            <label htmlFor="maxSize">Max Size (MB):</label>
            <input
              type="range"
              id="maxSize"
              min="0"
              max="10"
              step="0.1"
              value={compressionOptions.maxSizeMB}
              onChange={handleMaxSizeChange}
            />
            <span>{compressionOptions.maxSizeMB} MB</span>

            <label htmlFor="maxWidthOrHeight">Max Width Or Height:</label>
            <input
              type="range"
              id="maxWidthOrHeight"
              min="100"
              max="10000"
              step="10"
              value={compressionOptions.maxWidthOrHeight}
              onChange={handlemaxWidthOrHeightChange}
            />
            <span>{compressionOptions.maxWidthOrHeight} px</span>
          </div>
        )}
        <Button onClick={compressImages}>Compress Image(s)</Button>
        <div>
          <ScrollArea className="md:h-[60vh] h-[40vh] w-[80vw] rounded-md border p-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {compressedImages.map(({ file, name }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Compressed Image for ${name}`}
                  />
                  <Button
                    className="mt-2 text-black"
                    variant="outline"
                    onClick={() => downloadSingleCompressedImage(name, file)}
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
          {compressedImages.length > 0 && (
            <div>
              <Button onClick={downloadAllCompressedImages}>
                Download All as Zip
              </Button>
            </div>
          )}
        </div>
        <div>
          {zipFile && (
            <a
              href={URL.createObjectURL(zipFile)}
              download="compressed_images.zip"
            >
              <Button>Download Zip file</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicCompressor;
