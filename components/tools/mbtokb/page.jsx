"use client";
import { useState } from "react";
import { IoMdCopy } from "react-icons/io";
import { Button } from "@components/ui/button";

export default function MBToKBConverter() {
  const [kb, setKb] = useState("");
  const [mb, setMb] = useState("");
  const [copied, setCopied] = useState(false);

  const handleConversion = () => {
    const mbValue = parseFloat(mb);
    if (!isNaN(mbValue)) {
      const kbValue = mbValue * 1024;
      setKb(kbValue.toFixed(4)); // Limiting to 4 decimal places
    } else {
      setKb("");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${mb} MB is equal to ${kb} KB`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
  };

  return (
    <div className="w-full flex items-center justify-center flex-col h-auto gap-10 py-20">
      <h1>MB to KB Converter</h1>
      <p>Enter the Megabyte (MB) value and convert it into Kilobyte (KB)</p>
      <div className="flex gap-3">
        <input
          type="number"
          className="text-black border border-gray-300 rounded-md px-3 py-2"
          placeholder="Enter MB"
          value={mb}
          onChange={(e) => setMb(e.target.value)}
        />
        <Button className="" onClick={handleConversion}>
          Convert
        </Button>
      </div>
      {kb && (
        <div className="flex flex-col gap-4 items-center">
          <div className="rounded-md border py-5 px-10">
            <p className="text-3xl">{`${mb} MB is equal to ${kb} KB`}</p>
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
