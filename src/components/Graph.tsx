"use client"
import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts"

type graphType = {
    date: string,
    revenue_per_day: number,
    order_per_day?: number,
    aov?: number,
}
type graphArrayType = {
    analyticsOrders: graphType[],
    activeMetricAnalytics?: string
}

const metricConfig = {
    "Revenue": {
        dataKey: "revenue_per_day",
        label: "Revenue",
        prefix: "$",
    },
    "Orders": {
        dataKey: "order_per_day",
        label: "Orders",
        prefix: "",
    },
    "Avg Order Values": {
        dataKey: "aov",
        label: "Avg Order Value",
        prefix: "$",
    },
}

const Graph = ({ analyticsOrders, activeMetricAnalytics }: graphArrayType) => {
    const selectedMetric =
        metricConfig[
        (activeMetricAnalytics ?? "Revenue") as keyof typeof metricConfig
        ]
    return (
        < div className='h-64 w-full' >
            <ResponsiveContainer width="100%" height="100%">

                <AreaChart width={700} height={250} data={analyticsOrders}>
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
                        tickFormatter={(value) => selectedMetric.prefix === "$" ? `$${value / 1000}k` : value}
                    />
                    <Tooltip
                        formatter={(value) => [
                            selectedMetric.prefix === "$"
                                ? `$${Number(value).toLocaleString()}`
                                : Number(value).toLocaleString(),
                            selectedMetric.label
                        ]}
                    />
                    <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4f46e5" stopOpacity={0.35} />
                            <stop offset="100%" stopColor="#4f46e5" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Area
                        type="linear"
                        dataKey={selectedMetric.dataKey}
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
        </div >
    )
}

export default Graph