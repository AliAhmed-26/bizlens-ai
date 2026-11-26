"use client";

import { documentMetaDataType } from "@/types/documentMetaDataType";
import { X, FileSpreadsheet, Rows3, Columns3 } from "lucide-react";

type DocumentPreviewModalProps = {
    onClose: () => void;
};

const DocumentActualDataView = ({ onClose }: DocumentPreviewModalProps) => {

    const columns = ["Product", "Category", "Quantity", "Price", "Revenue"];

    const rows = [
        ["Laptop", "Electronics", 12, 85000, 1020000],
        ["Mouse", "Accessories", 45, 1200, 54000],
        ["Keyboard", "Accessories", 30, 2500, 75000],
        ["Monitor", "Electronics", 18, 32000, 576000],
        ["Headphones", "Accessories", 25, 4500, 112500],
        ["Mobile", "Electronics", 15, 65000, 975000],
        ["Printer", "Electronics", 8, 28000, 224000],
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

            <div className="flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">

                    <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-green-100 p-3">
                            <FileSpreadsheet className="h-6 w-6 text-green-600" />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">
                                Sales_Report.xlsx
                            </h2>

                            <p className="text-sm text-gray-500">
                                Document Preview
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
                    >
                        <X size={22} />
                    </button>

                </div>

                {/* Statistics */}
                <div className="flex gap-4 border-b border-gray-200 bg-gray-50 px-6 py-4">

                    <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3">
                        <Rows3 className="text-blue-600" size={20} />

                        <div>
                            <p className="text-xs text-gray-500">Total Rows</p>
                            <p className="font-semibold text-gray-800">{rows.length}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3">
                        <Columns3 className="text-purple-600" size={20} />

                        <div>
                            <p className="text-xs text-gray-500">Total Columns</p>
                            <p className="font-semibold text-gray-800">{columns.length}</p>
                        </div>
                    </div>

                </div>

                {/* Table */}
                <div className="flex-1 overflow-auto px-6">

                    <table className="w-full min-w-max border-collapse text-left">

                        <thead className="sticky top-0 bg-gray-100">
                            <tr>
                                {columns.map((column, index) => (
                                    <th
                                        key={index}
                                        className="border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700"
                                    >
                                        {column}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {rows.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="transition hover:bg-blue-50"
                                >
                                    {row.map((cell, cellIndex) => (
                                        <td
                                            key={cellIndex}
                                            className="border border-gray-200 px-5 py-3 text-sm text-gray-600"
                                        >
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-6 py-4">

                    <p className="text-sm text-gray-500">
                        Showing {rows.length} records
                    </p>

                    <button
                        onClick={onClose}
                        className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                    >
                        Close Preview
                    </button>

                </div>

            </div>

        </div>
    );
};

export default DocumentActualDataView