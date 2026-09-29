"use client"

import { fetchTopProducts } from "@/services/dashboardService"
import { useEffect, useState } from "react"
import { AreaChart, Area, ResponsiveContainer } from "recharts"

const products = [
    {
        name: "Air Max Pro Sneakers",
        revenue: "$62,340",
        units: 842,
        trend: [540, 610, 680, 720, 780, 820, 842],
    },
    {
        name: "Leather Crossbody Bag",
        revenue: "$46,890",
        units: 521,
        trend: [380, 400, 440, 460, 490, 510, 521],
    },
    {
        name: "Slim Fit Oxford Shirt",
        revenue: "$28,530",
        units: 634,
        trend: [710, 690, 680, 660, 650, 640, 634],
    },
    {
        name: "Classic Canvas Backpack",
        revenue: "$31,280",
        units: 391,
        trend: [290, 310, 340, 355, 370, 380, 391],
    },
]

type topProductType = {
    product_name: string,
    total_quantity: number,
    total_revenue: number
}

const TopProducts = () => {

    const [dashboardTopProducts, setDashboardTopProducts] = useState<topProductType[]>([])

    useEffect(() => {
      const showTopProducts = async()=>{
        const response = await fetchTopProducts()
        console.log(response)
        setDashboardTopProducts(response)
      }
      showTopProducts()
    }, [])
    
    return (
        <section className="rounded-xl border border-border bg-white p-5">

            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
                <h2 className="font-semibold text-body">
                    Top Products
                </h2>

                <button className="text-small text-purple">
                    View all →
                </button>
            </div>

            {/* Products */}
            <div>
                {dashboardTopProducts.map((product, index) => (
                    <div
                        key={product.product_name}
                        className="flex items-center gap-3 border-t border-border py-3 first:border-t-0"
                    >
                        {/* Rank */}
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-md bg-gray-100 text-small text-gray-500">
                            {index + 1}
                        </span>

                        {/* Product info */}
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-[14px] font-bold ">
                                {product.product_name}
                            </p>

                            <p className="font-mono text-small text-gray">
                                {product.total_quantity} units
                            </p>
                        </div>

                        {/* Sparkline */}
                        {/* <div className="h-8 w-16 shrink-0">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart
                                    data={product.trend.map((value) => ({ value }))}
                                >
                                    <Area
                                        type="linear"
                                        dataKey="value"
                                        stroke="#4f46e5"
                                        strokeWidth={1.5}
                                        fill="none"
                                        dot={false}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div> */}

                        {/* Revenue */}
                        <div className="w-20 shrink-0 text-right">
                            <p className="text-body font-bold">
                                {`$${product.total_revenue.toLocaleString("en-US", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}`}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default TopProducts