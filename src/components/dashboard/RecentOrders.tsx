"use client"
import { fetchRecentOrders } from "@/services/dashboardService"
import { useEffect, useState } from "react"

const recentOrders = [
    {
        id: "#ORD-9812",
        name: "Sarah Mitchell",
        total_amount: "$248.00",
        status: "Delivered",
        order_date: "Sep 19",
    },
    {
        id: "#ORD-9811",
        name: "James Okafor",
        total_amount: "$89.90",
        status: "Processing",
        order_date: "Sep 19",
    },
    {
        id: "#ORD-9810",
        name: "Lena Müller",
        total_amount: "$412.50",
        status: "Shipped",
        order_date: "Sep 18",
    },
    {
        id: "#ORD-9809",
        name: "David Park",
        total_amount: "$67.00",
        status: "Delivered",
        order_date: "Sep 18",
    },
    {
        id: "#ORD-9808",
        name: "Amara Singh",
        total_amount: "$195.00",
        status: "Cancelled",
        order_date: "Sep 17",
    },
]

const statusStyles = {
    Delivered: "bg-emerald-50 text-emerald-700",
    Shipped: "bg-blue-50 text-blue-700",
    Processing: "bg-amber-50 text-amber-700",
    Cancelled: "bg-red-50 text-red-700",
}


const arr = [
    "Order",
    "Customer",
    "Amount",
    "Status",
    "Date"
]
type recentOrdersType = {
    id : number,
    name : string,
    total_amount : number,
    status: string,
    order_date: Date
}

const RecentOrders = () => {
    const [dashboardRecentOrders, setDashboardRecentOrders] = useState<recentOrdersType[]>([])

    useEffect(() => {
      const showRecentOrders = async()=>{
        const response = await fetchRecentOrders()
        console.log(response)
        setDashboardRecentOrders(response)
      }

      showRecentOrders()
    }, [])
    
    return (
        <section className="rounded-xl border border-border bg-white p-5">

            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-body font-semibold ">
                    Recent Orders
                </h2>

                <button className="text-small text-purple">
                    View all →
                </button>
            </div>

            {/* Table */}
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b border-border">
                        {
                            arr.map(item => {
                                return (

                                    <th key={item} className="pb-2 text-left text-[12px] uppercase text-gray">
                                        {item}
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>

                <tbody>
                    {dashboardRecentOrders.map((order) => (
                        <tr
                            key={order.id}
                            className="border-b border-border last:border-0"
                        >
                            <td className="py-3 text-small text-purple font-bold ">
                                {`#ORD-${order.id.toString().padStart(4, "0")}`}
                            </td>

                            <td className="py-3 text-small ">
                                {order.name}
                            </td>

                            <td className="py-3 font-mono text-small font-semibold ">
                                {`$${order.total_amount.toLocaleString("en-US", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}`}
                            </td>

                            <td className="py-3 ">
                                <span
                                    className={`rounded px-1 py-1 text-xs font-semibold ${statusStyles[order.status as keyof typeof statusStyles]}`}
                                >
                                    {order.status}
                                </span>
                            </td>

                            <td className="py-3 text-small text-gray">
                                {new Date(order.order_date).toLocaleDateString("en-US",{
                                    month: "short",
                                    day: "numeric"
                                })}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </section>
    )
}

export default RecentOrders