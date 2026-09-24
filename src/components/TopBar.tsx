import React from "react";
import {
    Search,
    Bell,
    ChevronDown,
} from "lucide-react";

const TopBar = () => {
    return (
        <header className="h-[72px] bg-white border-b border-[#ececf3] px-7 flex items-center justify-between fixed left-64 right-0 top-0 z-50">

            {/* Workspace */}
            <div className="flex items-center gap-2">
                <span className="text-[18px] font-bold text-black">
                    Rashid Menswear
                </span>

                <ChevronDown
                    size={17}
                    strokeWidth={2}
                    className="text-[#8a8ba3]"
                />
            </div>


            {/* Right Side */}
            <div className="flex items-center gap-4">

                {/* Search */}
                <div className="w-[260px] h-[38px] bg-[#fafafb] border border-[#ececf3] rounded-[9px] px-3 flex items-center gap-2">

                    <Search
                        size={17}
                        strokeWidth={2}
                        className="text-gray"
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="flex-1 bg-transparent outline-none text-[13px] text-black placeholder:text-[#8a8ba3]"
                    />

                    <kbd className="text-[11px] text-gray border border-[#dfdfe7] rounded-[5px] px-1.5 py-0.5">
                        ⌘K
                    </kbd>

                </div>


                {/* Notification */}
                <button className="relative w-[38px] h-[38px] rounded-full border border-[#ececf3] flex items-center justify-center">

                    <Bell
                        size={18}
                        strokeWidth={2}
                        className="text-[#5f6075]"
                    />

                    <span className="absolute top-[7px] right-[7px] w-[6px] h-[6px] bg-red-500 rounded-full border border-white"></span>

                </button>


                {/* Profile */}
                <div className="flex items-center gap-2 cursor-pointer">

                    <div className="w-[34px] h-[34px] rounded-full bg-[#6d5ef8] flex items-center justify-center text-white text-[13px] font-semibold">
                        A
                    </div>

                    <span className="text-[14px] font-medium text-black">
                        Ahmed
                    </span>

                    <ChevronDown
                        size={16}
                        strokeWidth={2}
                        className="text-[#8a8ba3]"
                    />

                </div>

            </div>

        </header>
    );
};

export default TopBar;