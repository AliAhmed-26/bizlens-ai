"use client"
import { fetchchatWithAi } from "@/services/askBizlensService";
import { ArrowUp, ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const suggestedQuestions = [
    "Why did my revenue decrease last month?",
    "Which products are performing poorly?",
    "Compare this month with last month",
    "What should I focus on to improve sales?",
];

type messagesType = {
    role: "user" | "assistant",
    message: string
}

export default function ChatPanel() {
    const [messages, setMessages] = useState<messagesType[]>([])

    const [inputMessage, setInputMessage] = useState<string>("")


    const showChatWithAi = async (message:string) => {
        setInputMessage("")
        const response = await fetchchatWithAi(message)
        const aiMessage: messagesType = {
            role: "assistant",
            message: response.message
        }
        console.log("ai response " + response)
        setMessages((prev) => [...prev, aiMessage])
    }


    const handleSubmit = async() => {

        if (!inputMessage.trim()) {
            return
        }

        const userMessages: messagesType = {
            role: "user",
            message: inputMessage
        }

        setMessages((prev) => [...prev, userMessages])
        await showChatWithAi(inputMessage)
    }




    return (
        <div className="flex flex-1 h-full min-h-0 flex-col bg-white border-black">

            {/* Header */}
            <div className="flex items-center justify-between border border-purple-900 px-8 py-5">
                <div>
                    <h1 className="text-l font-semibold text-slate-900">
                        Ask BizLens
                    </h1>
                </div>

                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500">
                    AI Assistant
                </span>
            </div>


            {messages.length === 0 ?
                (
                    < div className="flex flex-1 flex-col overflow-y-auto px-3">
                        {/* Main Content */}

                        {/* Welcome Screen */}
                        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center py-5 text-center">

                            {/* AI Icon */}
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                                <Sparkles size={27} />
                            </div>

                            {/* Heading */}
                            <h2 className="text-2xl font-semibold text-slate-900 ">
                                What would you like to know?
                            </h2>

                            {/* Description */}
                            <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">
                                Ask questions about your business performance, explore sales
                                trends, and discover opportunities with BizLens AI.
                            </p>

                            {/* Suggested Questions */}
                            <div className="mt-9 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
                                {suggestedQuestions.map((question, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className="group flex min-h-20 items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 text-left "
                                    >
                                        <span className="text-sm font-medium leading-6 text-slate-700">
                                            {question}
                                        </span>

                                        <ArrowUpRight
                                            size={17}
                                            className="shrink-0 text-slate-400 transition group-hover:text-indigo-600"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
                        {/* <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 border-e-blue-800"> */}


                        {messages.map((message, index) => (
                            message.role === "user" ? (


                                <div key={index} className="flex justify-end">

                                    <div className="max-w-[80%] rounded-2xl bg-slate-100 px-4 py-3 text-sm leading-6 text-slate-800">
                                        {message.message}
                                    </div>
                                </div>

                            )
                                :
                                (

                                    <div key={index} className="flex justify-start">
                                        <div className="flex max-w-[85%] items-start gap-3">

                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                                                <Sparkles size={17} />
                                            </div>

                                            <div className="text-sm leading-7 text-slate-700">
                                                {message.message}
                                            </div>

                                        </div>
                                    </div>


                                    // {/* </div> */}
                                )
                        ))}
                    </div>

                )
            }

            {/* Chat Input */}
            <div className="shrink-0 px-5 pb-5 pt-3 ">
                <div className="mx-auto max-w-3xl">

                    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                        <input
                            type="text"
                            placeholder="Ask anything about your business..."
                            className="min-w-0 flex-1 bg-transparent py-1 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                            value={inputMessage}
                            onChange={e => { setInputMessage(e.target.value) }}
                        />

                        <button
                            type="button"
                            aria-label="Send message"
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white transition hover:bg-indigo-700"
                            onClick={handleSubmit}
                        >
                            <ArrowUp size={19} />
                        </button>
                    </div>

                    <p className="mt-3 text-center text-xs text-slate-400">
                        BizLens AI can make mistakes. Verify important business decisions.
                    </p>
                </div>
            </div>
        </div >
    );
}