import React from 'react'
import {
    LayoutDashboard,
    TrendingUp,
    CircleAlert,
    FileText,
    MessageSquare,
    Lightbulb,
    ChartNoAxesColumn,
    CreditCard,
    Settings,
    Clock3,
    type LucideIcon
} from "lucide-react";
import Link from 'next/link';
const Sidebar = () => {

    type NavItem = {
        label: string;
        href: string
        icon: LucideIcon;
    }

    const mainNavItems: NavItem[] = [
        {
            label: "Dashboard",
            href: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            label: "Analytics",
            href: "/analytics",
            icon: TrendingUp,
        },
        {
            label: "Ask BizLens",
            href: "/",
            icon: CircleAlert,
        },
        {
            label: "Documents",
            href: "/",
            icon: FileText,
        },
        {
            label: "Doc Q&A",
            href: "/",
            icon: MessageSquare,
        },
        {
            label: "Insights",
            href: "/",
            icon: Lightbulb,
        },
        {
            label: "Reports",
            href: "/",
            icon: ChartNoAxesColumn,
        },
    ];

    const mainFooterItems: NavItem[] = [
        {
            label: "Billing",
            href: "/",
            icon: CreditCard,
        },
        {
            label: "Settings",
            href: "/",
            icon: Settings,
        },
        {
            label: "Admin Panel",
            href: "/",
            icon: Clock3,
        },

    ];
    return (


        <aside className='w-64 h-screen bg-white border-r border-[#ececf3] px-[14px] py-5 fixed left-0 top-0 z-50'>
            {/* Brand */}
            <div className="flex items-center gap-2 px-2 mb-4 ">
                <div className="w-8 h-8 rounded-[9px] bg-[#6d5ef8] flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-[3px]">
                        <span className="w-[5px] h-[5px] bg-white rounded-[1px]"></span>
                        <span className="w-[5px] h-[5px] bg-white rounded-[1px]"></span>
                        <span className="w-[5px] h-[5px] bg-white rounded-[1px]"></span>
                        <span className="w-[5px] h-[5px] bg-white rounded-[1px]"></span>
                    </div>
                </div>

                <span className="text-[16px] font-bold text-[#1a1a2e]">
                    BizLens AI
                </span>
            </div>

            <div className='w-full h-px border border-black opacity-15 mb-2'></div>

            {/* Main */}
            <div className='px-2 mb-2'>
                <p className='text-[11px] font-semibold text-[#8a8ba3]'>
                    Main
                </p>
            </div>

            <nav className='space-y-1'>
                {
                    mainNavItems.map(item => {
                        return (
                            <Link href={item.href} key={item.label} className='flex items-center 
                            gap-3 px-3 py-[9px] rounded-[9px] text-[#8a8ba3] text-small font-medium'>

                                <item.icon size={18} strokeWidth={2} />
                                <span>{item.label}</span>

                            </Link>
                        )
                    })
                }
            </nav>

            <div className='w-full h-px border border-b-black opacity-15 mb-1'></div>

            {
                mainFooterItems.map(item => {
                    return (
                        <Link href={item.href} key={item.label} className='flex items-center gap-3 px-3 py-[9px] rounded-[9px] text-[#8a8ba3] text-[14px] font-medium'>

                            <item.icon size={18} strokeWidth={2} />
                            <span>{item.label}</span>

                        </Link>
                    )
                })
            }
        </aside>


    )
}

export default Sidebar








