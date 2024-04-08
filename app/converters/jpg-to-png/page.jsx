// "use client";
// import React, { useState } from "react";

// const page = () => {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [selectedFormat, setSelectedFormat] = useState("JPEG");
//   const [downloadLinks, setDownloadLinks] = useState([]);

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     setSelectedFiles(files);
//   };

//   const handleDelete = (file) => {
//     const updatedFiles = selectedFiles.filter((f) => f !== file);
//     setSelectedFiles(updatedFiles);
//   };

//   const convertImages = async () => {
//     const convertedFiles = await Promise.all(
//       selectedFiles.map(async (file) => {
//         const buffer = await sharp(file)
//           .toFormat(selectedFormat.toLowerCase())
//           .toBuffer();

//         return new File(
//           [buffer],
//           `${file.name}.${selectedFormat.toLowerCase()}`,
//           {
//             type: `image/${selectedFormat.toLowerCase()}`,
//           }
//         );
//       })
//     );

//     // Create download links for converted files
//     const links = convertedFiles.map((file) => {
//       const url = URL.createObjectURL(file);
//       return { url, name: file.name };
//     });
//     setDownloadLinks(links);
//   };

//   const handleDownload = (url, name) => {
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = name;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div>
//       <h1>Image Converter</h1>
//       <input type="file" onChange={handleFileChange} multiple />
//       <select
//         value={selectedFormat}
//         onChange={(e) => setSelectedFormat(e.target.value)}
//       >
//         {/* Add options for different image formats */}
//         <option value="JPEG">JPEG</option>
//         <option value="PNG">PNG</option>
//         <option value="GIF">GIF</option>
//         {/* Add more options for other image formats */}
//       </select>
//       <button onClick={convertImages}>Convert</button>
//       <div>
//         {selectedFiles.map((file, index) => (
//           <div key={index}>
//             <img
//               src={URL.createObjectURL(file)}
//               alt={`Uploaded ${file.name}`}
//             />
//             <button onClick={() => handleDelete(file)}>Delete</button>
//           </div>
//         ))}
//       </div>
//       <div>
//         {downloadLinks.map((link, index) => (
//           <div key={index}>
//             <a
//               href={link.url}
//               download={link.name}
//               onClick={() => handleDownload(link.url, link.name)}
//             >
//               Download {link.name}
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default page;

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
