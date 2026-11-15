import { Response, Request } from "express";
export const getChatWithAi = async (req: Request, res: Response) => {
    const { message } = req.body

    if (!message || typeof message !== "string" || !message.trim()) {
        return res.status(400).json({
            message: "Message is required"
        })
    }
    try {
        // const response = await ai.models.generateContent({
        //     model: "gemini-2.5-flash",
        //     contents: message,
        // });

        const request = await fetch("http://127.0.0.1:8000/chat", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                message: message
            })
        })

        if (!request.ok) {
            throw new Error("AI service request failed");
        }

        const response = await request.json()


        return res.status(200).json({
            message: response.message
        })

    } catch (error) {
        return res.status(500).json({
            message: error instanceof Error
                ? error.message
                : "Something went wrong"
        })
    }
}

