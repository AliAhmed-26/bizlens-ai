import { CloudUpload } from 'lucide-react'
import React from 'react'

const DocumentsUpload = () => {
    return (
        <div className="w-full rounded-xl border-2 border-dashed border-gray-200 bg-white px-6 py-12 text-center transition hover:border-indigo-300">

            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <CloudUpload size={26} />
            </div>

            <h3 className="text-sm font-semibold text-gray-800">
                Drag and drop files here, or{" "}
                <span className="cursor-pointer text-indigo-600">
                    browse
                </span>
            </h3>
            <p className="mt-2 text-xs text-gray-400">
                Supports CSV, XLSX and XLS files
            </p>

            <p className="mt-1 text-xs text-gray-400">
                Maximum 50 MB per file
            </p>

        </div>
    )
}

export default DocumentsUpload
