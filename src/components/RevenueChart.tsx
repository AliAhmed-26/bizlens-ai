"use client"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts"

const RevenueChart = () => {
    const revenueData = [
        { date: "Sep 1", revenue: 4200 },
        { date: "Sep 5", revenue: 6100 },
        { date: "Sep 10", revenue: 5200 },
        { date: "Sep 15", revenue: 7800 },
        { date: "Sep 20", revenue: 6900 },
        { date: "Sep 25", revenue: 9200 },
        { date: "Sep 30", revenue: 10800 },
    ]
    return (
        <ResponsiveContainer width="100%" height="100%">

            <AreaChart width={700} height={250} data={revenueData}>
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