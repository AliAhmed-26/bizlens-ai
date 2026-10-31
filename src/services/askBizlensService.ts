export const fetchchatWithAi = async (message:string) => {

    const request_chat_with_ai = await fetch("http://localhost:5000/api/ask_bizlens/chat",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            message: message
        })
    })
    const response_chat_with_ai = await request_chat_with_ai.json()
    return response_chat_with_ai
}
