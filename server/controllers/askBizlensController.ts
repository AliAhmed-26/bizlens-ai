import { Response, Request } from "express";
import ai from "../config/gemini.js";

export const getChatWithAi = async (req: Request, res: Response) => {
    const { message } = req.body

    if (!message || typeof message !== "string" || !message.trim()) {
        return res.status(400).json({
            message: "Message is required"
        })
    }
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: message,
        });


        console.log(response.text)

        return res.status(200).json({
            message: response.text
        })

    } catch (error) {
        return res.status(500).json({
            message: error instanceof Error
                ? error.message
                : "Something went wrong"
        })
    }
}

