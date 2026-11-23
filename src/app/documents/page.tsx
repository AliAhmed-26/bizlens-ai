// "use client";

// import { useMemo, useRef, useState } from "react";
// import {
//   Upload,
//   FileText,
//   FileSpreadsheet,
//   Search,
//   Trash2,
//   Eye,
//   Files,
//   CheckCircle2,
//   HardDrive,
//   CloudUpload,
//   X,
// } from "lucide-react";

// type DocumentStatus = "Uploaded" | "Processing" | "Processed" | "Failed";

// type DocumentItem = {
//   id: number;
//   name: string;
//   type: string;
//   size: number;
//   uploadedAt: string;
//   status: DocumentStatus;
//   file: File;
// };

// const filters = ["All", "Uploaded", "Processing", "Processed", "Failed"];

// const formatSize = (bytes: number) => {
//   if (bytes < 1024 * 1024) {
//     return `${(bytes / 1024).toFixed(1)} KB`;
//   }

//   return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
// };

// export default function page() {
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const [documents, setDocuments] = useState<DocumentItem[]>([]);
//   const [search, setSearch] = useState("");
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [isDragging, setIsDragging] = useState(false);
//   const [selectedDocument, setSelectedDocument] =
//     useState<DocumentItem | null>(null);

//   const handleFiles = (files: FileList | null) => {
//     if (!files) return;

//     const validFiles = Array.from(files).filter((file) => {
//       const extension = file.name.split(".").pop()?.toLowerCase();

//       return ["csv", "xlsx", "xls"].includes(extension || "");
//     });

//     const newDocuments: DocumentItem[] = validFiles.map((file) => ({
//       id: Date.now() + Math.random(),
//       name: file.name,
//       type: file.name.split(".").pop()?.toUpperCase() || "",
//       size: file.size,
//       uploadedAt: new Date().toLocaleDateString("en-US", {
//         month: "short",
//         day: "numeric",
//         year: "numeric",
//       }),
//       status: "Uploaded",
//       file,
//     }));

//     setDocuments((previous) => [...newDocuments, ...previous]);
//   };

//   const handleDelete = (id: number) => {
//     setDocuments((previous) =>
//       previous.filter((document) => document.id !== id)
//     );
//   };

//   const filteredDocuments = useMemo(() => {
//     return documents.filter((document) => {
//       const matchesSearch = document.name
//         .toLowerCase()
//         .includes(search.toLowerCase());

//       const matchesFilter =
//         activeFilter === "All" || document.status === activeFilter;

//       return matchesSearch && matchesFilter;
//     });
//   }, [documents, search, activeFilter]);

//   const totalSize = documents.reduce(
//     (total, document) => total + document.size,
//     0
//   );

//   const processedCount = documents.filter(
//     (document) => document.status === "Processed"
//   ).length;

//   return (
//     <div className="min-h-screen bg-[#f8f9fc]">

//       {/* Header */}
//       <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900">
//             Documents
//           </h1>

//           <p className="mt-1 text-sm text-gray-500">
//             Upload and manage your business data files.
//           </p>
//         </div>

//         <button
//           onClick={() => fileInputRef.current?.click()}
//           className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
//         >
//           <Upload size={18} />
//           Upload Files
//         </button>

//         <input
//           ref={fileInputRef}
//           type="file"
//           accept=".csv,.xlsx,.xls"
//           multiple
//           hidden
//           onChange={(e) => {
//             handleFiles(e.target.files);
//             e.target.value = "";
//           }}
//         />
//       </div>

//       {/* Main Layout */}
//       <div className="flex flex-col gap-6">

//         {/* Vertical Summary Cards */}
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

//           {/* Total Documents */}
//           <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
//                   Total Documents
//                 </p>

//                 <h2 className="mt-3 text-3xl font-bold text-gray-900">
//                   {documents.length}
//                 </h2>
//               </div>

//               <div className="rounded-lg bg-indigo-50 p-3 text-indigo-600">
//                 <Files size={22} />
//               </div>
//             </div>
//           </div>

//           {/* Processed */}
//           <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
//                   Processed
//                 </p>

//                 <h2 className="mt-3 text-3xl font-bold text-gray-900">
//                   {processedCount}
//                 </h2>
//               </div>

//               <div className="rounded-lg bg-green-50 p-3 text-green-600">
//                 <CheckCircle2 size={22} />
//               </div>
//             </div>
//           </div>

//           {/* Total Size */}
//           <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
//                   Total Size
//                 </p>

//                 <h2 className="mt-3 text-3xl font-bold text-gray-900">
//                   {formatSize(totalSize)}
//                 </h2>
//               </div>

//               <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
//                 <HardDrive size={22} />
//               </div>
//             </div>
//           </div>

//           {/* Storage Used */}
//           <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
//                   Storage Used
//                 </p>

//                 <h2 className="mt-3 text-3xl font-bold text-gray-900">
//                   {formatSize(totalSize)}
//                 </h2>
//               </div>

//               <div className="rounded-lg bg-purple-50 p-3 text-purple-600">
//                 <HardDrive size={22} />
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* Right Content */}
//         <div className="flex flex-col gap-6">

//           {/* Upload Area */}
//           <div
//             onDragOver={(e) => {
//               e.preventDefault();
//               setIsDragging(true);
//             }}
//             onDragLeave={() => setIsDragging(false)}
//             onDrop={(e) => {
//               e.preventDefault();
//               setIsDragging(false);
//               handleFiles(e.dataTransfer.files);
//             }}
//             onClick={() => fileInputRef.current?.click()}
//             className={`flex min-h-[190px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed bg-white px-5 py-8 text-center transition ${
//               isDragging
//                 ? "border-indigo-500 bg-indigo-50"
//                 : "border-gray-200 hover:border-indigo-400"
//             }`}
//           >
//             <div className="mb-4 rounded-xl bg-indigo-50 p-3 text-indigo-600">
//               <CloudUpload size={28} />
//             </div>

//             <h3 className="text-sm font-semibold text-gray-800">
//               Drag and drop files here, or{" "}
//               <span className="text-indigo-600">browse</span>
//             </h3>

//             <p className="mt-2 text-xs text-gray-400">
//               Supports CSV, XLSX and XLS files
//             </p>

//             <p className="mt-1 text-xs text-gray-400">
//               Maximum 50 MB per file
//             </p>
//           </div>

//           {/* Documents Table */}
//           <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

//             {/* Search and Filters */}
//             <div className="flex flex-col gap-4 border-b border-gray-100 p-5">

//               <div className="relative">
//                 <Search
//                   size={18}
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                 />

//                 <input
//                   type="text"
//                   placeholder="Search documents..."
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:bg-white"
//                 />
//               </div>

//               <div className="flex flex-wrap gap-2">
//                 {filters.map((filter) => (
//                   <button
//                     key={filter}
//                     onClick={() => setActiveFilter(filter)}
//                     className={`rounded-lg border px-4 py-2 text-xs font-medium transition ${
//                       activeFilter === filter
//                         ? "border-indigo-200 bg-indigo-50 text-indigo-600"
//                         : "border-gray-200 text-gray-500 hover:bg-gray-50"
//                     }`}
//                   >
//                     {filter}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Table */}
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[700px] text-left">

//                 <thead className="bg-gray-50">
//                   <tr className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
//                     <th className="px-5 py-4">Document</th>
//                     <th className="px-5 py-4">Type</th>
//                     <th className="px-5 py-4">Size</th>
//                     <th className="px-5 py-4">Status</th>
//                     <th className="px-5 py-4">Uploaded</th>
//                     <th className="px-5 py-4">Actions</th>
//                   </tr>
//                 </thead>

//                 <tbody className="divide-y divide-gray-100">

//                   {filteredDocuments.map((document) => (
//                     <tr
//                       key={document.id}
//                       className="transition hover:bg-gray-50"
//                     >
//                       <td className="px-5 py-4">
//                         <div className="flex items-center gap-3">
//                           <div
//                             className={`rounded-lg p-2 ${
//                               document.type === "CSV"
//                                 ? "bg-green-50 text-green-600"
//                                 : "bg-blue-50 text-blue-600"
//                             }`}
//                           >
//                             {document.type === "CSV" ? (
//                               <FileSpreadsheet size={20} />
//                             ) : (
//                               <FileText size={20} />
//                             )}
//                           </div>

//                           <span className="max-w-[220px] truncate text-sm font-semibold text-gray-800">
//                             {document.name}
//                           </span>
//                         </div>
//                       </td>

//                       <td className="px-5 py-4 text-sm font-medium text-gray-600">
//                         {document.type}
//                       </td>

//                       <td className="px-5 py-4 text-sm text-gray-500">
//                         {formatSize(document.size)}
//                       </td>

//                       <td className="px-5 py-4">
//                         <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
//                           {document.status}
//                         </span>
//                       </td>

//                       <td className="px-5 py-4 text-sm text-gray-500">
//                         {document.uploadedAt}
//                       </td>

//                       <td className="px-5 py-4">
//                         <div className="flex items-center gap-2">
//                           <button
//                             onClick={() => setSelectedDocument(document)}
//                             className="rounded-lg border border-indigo-200 px-3 py-2 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-50"
//                           >
//                             <Eye size={15} />
//                           </button>

//                           <button
//                             onClick={() => handleDelete(document.id)}
//                             className="rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-500 transition hover:bg-red-50"
//                           >
//                             <Trash2 size={15} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}

//                   {filteredDocuments.length === 0 && (
//                     <tr>
//                       <td colSpan={6} className="px-5 py-16 text-center">
//                         <FileText
//                           size={35}
//                           className="mx-auto mb-3 text-gray-300"
//                         />

//                         <p className="text-sm font-semibold text-gray-600">
//                           No documents found
//                         </p>

//                         <p className="mt-1 text-xs text-gray-400">
//                           Upload a CSV or Excel file to get started.
//                         </p>
//                       </td>
//                     </tr>
//                   )}

//                 </tbody>
//               </table>
//             </div>

//             {/* Footer */}
//             <div className="border-t border-gray-100 px-5 py-4">
//               <p className="text-xs text-gray-400">
//                 Showing {filteredDocuments.length} of {documents.length} documents
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* Document Details Modal */}
//       {selectedDocument && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

//             <div className="mb-5 flex items-center justify-between">
//               <h2 className="text-lg font-bold text-gray-900">
//                 Document Details
//               </h2>

//               <button
//                 onClick={() => setSelectedDocument(null)}
//                 className="rounded-lg p-2 text-gray-400 hover:bg-gray-100"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <p className="text-xs text-gray-400">File Name</p>
//                 <p className="mt-1 break-all text-sm font-semibold text-gray-800">
//                   {selectedDocument.name}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-xs text-gray-400">File Type</p>
//                 <p className="mt-1 text-sm font-semibold text-gray-800">
//                   {selectedDocument.type}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-xs text-gray-400">File Size</p>
//                 <p className="mt-1 text-sm font-semibold text-gray-800">
//                   {formatSize(selectedDocument.size)}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-xs text-gray-400">Upload Date</p>
//                 <p className="mt-1 text-sm font-semibold text-gray-800">
//                   {selectedDocument.uploadedAt}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-xs text-gray-400">Status</p>
//                 <p className="mt-1 text-sm font-semibold text-blue-600">
//                   {selectedDocument.status}
//                 </p>
//               </div>
//             </div>

//             <button
//               onClick={() => setSelectedDocument(null)}
//               className="mt-6 w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
//             >
//               Close
//             </button>

//           </div>
//         </div>
//       )}

//     </div>
//   );
// }


import DocumentsHeader from '@/components/documents/DocumentsHeader'
import DocumentsTable from '@/components/documents/DocumentsTable'
import DocumentsUpload from '@/components/documents/DocumentsUpload'
import KPICardsDocuments from '@/components/documents/KPICardsDocuments'

const page = () => {
  
  return (
    <div className="flex flex-col gap-6">
      <DocumentsHeader/>
      <KPICardsDocuments/>
      <DocumentsUpload/>
      <DocumentsTable/>
    </div>
  )
}

export default page
