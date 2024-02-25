import React from "react";

const compressors = [
  {
    id: 10,
    tool: "JPEG to 10kb",
    url: "/compressors/compress-jpeg-to-10kb",
  },
  {
    id: 20,
    tool: "JPEG to 20kb",
    url: "/compressors/compress-jpeg-to-20kb",
  },
  {
    id: 25,
    tool: "JPEG to 25kb",
    url: "/compressors/compress-jpeg-to-25kb",
  },
  {
    id: 50,
    tool: "JPEG to 50kb",
    url: "/compressors/compress-jpeg-to-50kb",
  },
  {
    id: 100,
    tool: "JPEG to 100kb",
    url: "/compressors/compress-jpeg-to-100kb",
  },
  {
    id: 200,
    tool: "JPEG to 200kb",
    url: "/compressors/compress-jpeg-to-200kb",
  },
  {
    id: 300,
    tool: "JPEG to 300kb",
    url: "/compressors/compress-jpeg-to-300kb",
  },
  {
    id: 400,
    tool: "JPEG to 500kb",
    url: "/compressors/compress-jpeg-to-500kb",
  },
  {
    id: 100,
    tool: "PNG to 100kb",
    url: "/compressors/compress-png-to-100kb",
  },
  {
    id: 200,
    tool: "PNG to 200kb",
    url: "/compressors/compress-png-to-200kb",
  },
  {
    id: 300,
    tool: "PNG to 300kb",
    url: "/compressors/compress-png-to-300kb",
  },
  {
    id: 400,
    tool: "PNG to 500kb",
    url: "/compressors/compress-png-to-500kb",
  },
];

const converters = [
  {
    id: 10,
    tool: "kB to MB",
    url: "/converters/kb-to-mb-converter",
  },
  {
    id: 20,
    tool: "MB to KB",
    url: "/converters/mb-to-kb-converter",
  },
];

const others = [
  {
    id: 1,
    tool: "Shotune",
    url: "/",
  },
  {
    id: 2,
    tool: "Barcode Generator",
    url: "/barcode-generator",
  },
  {
    id: 3,
    tool: "Qr Code Generator",
    url: "/qr-code-generator",
  },
];

const InterLink = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col justify-center items-center gap-5 pb-7">
        <h3>Compressors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:w-[80%]">
          {compressors.map((each) => {
            return (
              <div
                id={each.id}
                className="px-1 h-10 flex items-center justify-center rounded border text-center cursor-pointer hover:bg-primary hover:border-none transition-all"
              >
                <a href={each.url}>{each.tool}</a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 pb-7">
        <h3>Converters</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:w-[80%]">
          {converters.map((each) => {
            return (
              <div
                id={each.id}
                className="px-1 h-10 flex items-center justify-center rounded border text-center cursor-pointer hover:bg-primary hover:border-none transition-all"
              >
                <a href={each.url}>{each.tool}</a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 pb-7">
        <h3>Others</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:w-[80%]">
          {others.map((each) => {
            return (
              <div
                id={each.id}
                className="px-1 h-10 flex items-center justify-center rounded border text-center cursor-pointer hover:bg-primary hover:border-none transition-all"
              >
                <a href={each.url}>{each.tool}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InterLink;
