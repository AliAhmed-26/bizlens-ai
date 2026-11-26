export const uploadDocument = async (formData: FormData) => {
    const request_upload = await fetch("http://localhost:5000/api/document/upload", {
        method: "POST",
        body: formData
    })
    const response_upload = await request_upload.json()
    // if (!response_upload.ok) {
    //     throw new Error(response_upload.error ?? "Upload failed")
    // }
    return response_upload
}

export const fetchMetaData = async () => {
    const request_metadata = await fetch("http://localhost:5000/api/document/get_metadata")
    const response_metadata = await request_metadata.json()
    return response_metadata
}

export const fetchActualData = async (fileId: number) => {
    const request_actualdata = await fetch(`http://localhost:5000/api/document/${fileId}/data`)
    const response_actualData = await request_actualdata.json()
    return response_actualData
}

export const fetchDeleteData = async (fileId: number) => {
    const request_deleteData = await fetch(`http://localhost:5000/api/document/delete/${fileId}`,{
        method: "DELETE"
    })

    const response = request_deleteData.json()
    
    return response
}