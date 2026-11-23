import {
    FileSpreadsheet,
    FileText,
    Search,
    Eye,
    Trash2,
} from "lucide-react";

const documents = [
    {
        name: "Sales_Data.xlsx",
        type: "Excel",
        size: "2.4 MB",
        status: "Processed",
        date: "Nov 23, 2026",
    },
    {
        name: "Customers.csv",
        type: "CSV",
        size: "450 KB",
        status: "Uploaded",
        date: "Nov 22, 2026",
    },
    {
        name: "Products.xlsx",
        type: "Excel",
        size: "1.2 MB",
        status: "Processing",
        date: "Nov 21, 2026",
    },
    {
        name: "Orders.csv",
        type: "CSV",
        size: "780 KB",
        status: "Failed",
        date: "Nov 20, 2026",
    },
];

const DocumentsTable = () => {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

            {/* Header */}
            <div className="border-b border-gray-100 p-5">
                <h2 className="text-lg font-semibold text-gray-800">
                    Uploaded Files
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Manage and monitor your uploaded business data.
                </p>
            </div>

            {/* Search */}
            <div className="flex flex-col gap-4 border-b border-gray-100 p-5">

                <div className="relative">
                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search documents..."
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none focus:border-indigo-400"
                    />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2">
                    {["All", "Uploaded", "Processing", "Processed", "Failed"].map(
                        (filter, index) => (
                            <button
                                key={filter}
                                className={`rounded-lg border px-4 py-2 text-xs font-medium ${
                                    index === 0
                                        ? "border-indigo-200 bg-indigo-50 text-indigo-600"
                                        : "border-gray-200 text-gray-500 hover:bg-gray-50"
                                }`}
                            >
                                {filter}
                            </button>
                        )
                    )}
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full min-w-[750px] text-left">

                    <thead className="bg-gray-50">
                        <tr className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                            <th className="px-5 py-4">Document</th>
                            <th className="px-5 py-4">Type</th>
                            <th className="px-5 py-4">Size</th>
                            <th className="px-5 py-4">Status</th>
                            <th className="px-5 py-4">Uploaded Date</th>
                            <th className="px-5 py-4">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {documents.map((document) => (
                            <tr
                                key={document.name}
                                className="transition hover:bg-gray-50"
                            >
                                {/* Document */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
                                            {document.type === "CSV" ? (
                                                <FileSpreadsheet size={20} />
                                            ) : (
                                                <FileText size={20} />
                                            )}
                                        </div>

                                        <span className="text-sm font-semibold text-gray-800">
                                            {document.name}
                                        </span>
                                    </div>
                                </td>

                                <td className="px-5 py-4 text-sm text-gray-600">
                                    {document.type}
                                </td>

                                <td className="px-5 py-4 text-sm text-gray-600">
                                    {document.size}
                                </td>

                                {/* Status */}
                                <td className="px-5 py-4">
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                            document.status === "Processed"
                                                ? "bg-green-50 text-green-600"
                                                : document.status === "Processing"
                                                ? "bg-yellow-50 text-yellow-600"
                                                : document.status === "Failed"
                                                ? "bg-red-50 text-red-600"
                                                : "bg-blue-50 text-blue-600"
                                        }`}
                                    >
                                        {document.status}
                                    </span>
                                </td>

                                <td className="px-5 py-4 text-sm text-gray-500">
                                    {document.date}
                                </td>

                                {/* Actions */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="rounded-lg border border-gray-200 p-2 text-gray-500 hover:bg-indigo-50 hover:text-indigo-600">
                                            <Eye size={16} />
                                        </button>

                                        <button className="rounded-lg border border-gray-200 p-2 text-gray-500 hover:bg-red-50 hover:text-red-500">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 px-5 py-4">
                <p className="text-xs text-gray-400">
                    Showing {documents.length} documents
                </p>
            </div>

        </div>
    );
};

export default DocumentsTable;