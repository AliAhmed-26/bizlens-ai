import { Upload } from 'lucide-react'
import React from 'react'

const DocumentsHeader = () => {
    return (
        <div>
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Documents
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Upload and manage your business data files.
                    </p>
                </div>
                <button className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
                    <Upload size={18} />
                    Upload Files
                </button>


            </div>

        </div >
    )
}

export default DocumentsHeader
