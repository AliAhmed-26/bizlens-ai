"use client"
import DocumentsHeader from '@/components/documents/DocumentsHeader'
import DocumentsTable from '@/components/documents/DocumentsTable'
import DocumentsUpload from '@/components/documents/DocumentsUpload'
import KPICardsDocuments from '@/components/documents/KPICardsDocuments'
import { fetchMetaData } from '@/services/documentService'
import { documentMetaDataType } from '@/types/documentMetaDataType'
import { useEffect, useState } from 'react'

const page = () => {

  


  const [documentMetaData, setDocumentMetaData] = useState<documentMetaDataType[]>([])


  const showDocumentMetaData = async () => {
    const res = await fetchMetaData()
    setDocumentMetaData(res.metaData)
  }

  useEffect(() => {
    showDocumentMetaData()
  }, [])

  return (
    <div className="flex flex-col gap-6">
      <DocumentsHeader />
      <KPICardsDocuments />
      <DocumentsUpload onUploadSuccess={showDocumentMetaData} />
      <DocumentsTable documentMetaData={documentMetaData} />
    </div>
  )
}

export default page
