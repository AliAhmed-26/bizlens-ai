"use client"
import { fetchDashboardChartRevenue } from "@/services/dashboardService"
import { useEffect, useState } from "react"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts"


type chartRevenueType = {
    date: string,
    revenue_per_day: number
}


const RevenueChart = () => {
    const [dashboardChartRevenue, setDashboardChartRevenue] = useState<chartRevenueType[]>([])


    useEffect(() => {
        const showChartRevenue = async () => {
            const response = await fetchDashboardChartRevenue()
            setDashboardChartRevenue(response)
            console.log("Response: ", response)

        }
        showChartRevenue()
    }, [])


    const chartRevenueData = Array.isArray(dashboardChartRevenue) ? dashboardChartRevenue.map((item) => ({

        date: new Date(item.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric"
        }),
        revenue: Number(item.revenue_per_day)
    })) : []

    return (
        <ResponsiveContainer width="100%" height="100%">

            <AreaChart width={700} height={250} data={chartRevenueData}>
                <CartesianGrid vertical={false} stroke="#e5e7eb" />
                <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tickMargin={10}
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                />
                <YAxis
                    axisLine={false}
                    tickLine={false}

                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip
                    formatter={(value) => [`$${Number(value).toLocaleString()}`, "Revenue"]}
                />
                <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4f46e5" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="#4f46e5" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <Area
                    type="linear"
                    dataKey="revenue"
                    stroke="#4f46e5"
                    fill="url(#revenueGradient)"
                    dot={{
                        r: 4,
                        fill: "#4f46e5",
                        stroke: "#ffffff",
                        strokeWidth: 2,
                    }}
                    activeDot={{
                        r: 6,
                    }}
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default RevenueChart