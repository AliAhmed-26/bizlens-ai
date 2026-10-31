import {
  Plus,
  PanelLeftClose,
  MessageSquare,
  MoreHorizontal,
} from "lucide-react";

const recentChats = [
  {
    id: 1,
    title: "Revenue decline analysis",
    active: true
  },
  {
    id: 2,
    title: "Top performing products",
    active: false
  },
  {
    id: 3,
    title: "Monthly sales comparison",
    active: false
  },
  {
    id: 4,
    title: "Customer purchase trends",
    active: false
  },
  {
    id: 5,
    title: "Category performance",
    active: false
  },
];

export default function RecentChats() {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-slate-200 bg-white">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-5">
        <h2 className="text-sm font-semibold text-slate-900">
          Recent Chats
        </h2>

        <button
          type="button"
          title="Hide chats"
          aria-label="Hide chats"
          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
        >
          <PanelLeftClose size={19} />
        </button>
      </div>

      {/* New Chat Button */}
      <div className="px-3 pb-5">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
        >
          <Plus size={18} />
          New Chat
        </button>
      </div>

      {/* Chat History */}
      <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-5">

        {/* Today */}
        <div className="mb-6">
          <p className="mb-2 px-3 text-xs font-semibold text-slate-400">
            Today
          </p>

          <div className="space-y-1">
            {recentChats.slice(0,
              3).map((chat) => (
                <div
                  key={chat.id}
                  className={`group flex items-center rounded-lg transition ${chat.active
                    ? "bg-indigo-50"
                    : "hover:bg-slate-50"

                    }`}
                >
                  <button
                    type="button"
                    className={`min-w-0 flex-1 truncate px-3 py-3 text-left text-sm ${chat.active
                      ? "font-medium text-indigo-600"
                      : "text-slate-700"

                      }`}
                  >
                    {chat.title}
                  </button>

                  <button
                    type="button"
                    aria-label={`Options for ${chat.title}`}
                    className="mr-2 rounded-md p-1.5 text-slate-400 opacity-0 transition hover:bg-slate-200 hover:text-slate-700 group-hover:opacity-100 focus-visible:opacity-100"
                  >
                    <MoreHorizontal size={17} />
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* Previous Chats */}
        <div>
          <p className="mb-2 px-3 text-xs font-semibold text-slate-400">
            Previous
          </p>

          <div className="space-y-1">
            {recentChats.slice(3).map((chat) => (
              <div
                key={chat.id}
                className="group flex items-center rounded-lg transition hover:bg-slate-50"
              >
                <button
                  type="button"
                  className="min-w-0 flex-1 truncate px-3 py-3 text-left text-sm text-slate-700"
                >
                  {chat.title}
                </button>

                <button
                  type="button"
                  aria-label={`Options for ${chat.title}`}
                  className="mr-2 rounded-md p-1.5 text-slate-400 opacity-0 transition hover:bg-slate-200 hover:text-slate-700 group-hover:opacity-100 focus-visible:opacity-100"
                >
                  <MoreHorizontal size={17} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-100 px-4 py-4">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <MessageSquare size={15} />
          Your conversations
        </div>
      </div>

    </aside>
  );
}