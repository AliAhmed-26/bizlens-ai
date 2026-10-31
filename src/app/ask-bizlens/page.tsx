import ChatPanel from "@/components/ask-bizlens/ChatPanel";
import RecentChats from "@/components/ask-bizlens/RecentChats";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ask BizLens | BizLens AI",
  description: "Analyze your business performance, sales trends, customers, and products.",
};

export default function AskBizLensPage() {
  return (
    // <RecentChats/>
    <div className="h-[calc(100dvh-108px)] overflow-hidden">
      <ChatPanel />
    </div>
  )
}