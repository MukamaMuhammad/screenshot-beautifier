"use client";
import { useState } from "react";
import { IoMdCopy } from "react-icons/io";
import { Button } from "@components/ui/button";

export default function KBToMBConverter() {
  const [kb, setKb] = useState("");
  const [mb, setMb] = useState("");
  const [copied, setCopied] = useState(false);

  const handleConversion = () => {
    const kbValue = parseFloat(kb);
    if (!isNaN(kbValue)) {
      const mbValue = kbValue / 1024;
      setMb(mbValue.toFixed(4)); // Limiting to 4 decimal places
    } else {
      setMb("");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${kb} KB is equal to ${mb} MB`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
  };

  return (
    <div className="w-full flex items-center justify-center flex-col h-auto gap-10 py-20">
      <h1>KB to MB Converter</h1>
      <p>Enter the Kilobyte (KB) value and convert it into Megabyte (MB)</p>
      <div className="flex gap-3">
        <input
          type="number"
          className="text-black border border-gray-300 rounded-md px-3 py-2"
          placeholder="Enter KB"
          value={kb}
          onChange={(e) => setKb(e.target.value)}
        />
        <Button className="" onClick={handleConversion}>
          Convert
        </Button>
      </div>
      {mb && (
        <div className="flex flex-col gap-4 items-center">
          <div className="rounded-md border py-5 px-10">
            <p className="text-3xl">{`${kb} KB is equal to ${mb} MB`}</p>
          </div>
          <button
            className={`flex items-center justify-center bg-gray-200 text-black px-4 py-2 rounded-md ${
              copied && "bg-green-500"
            }`}
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy"}
            <IoMdCopy className="text-xl ml-2" />
          </button>
        </div>
      )}
    </div>
  );
}
