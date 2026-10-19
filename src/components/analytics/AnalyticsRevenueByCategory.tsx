"use client";

import { fetchAnalyticsRevenueCategory } from "@/services/analyticsService";
import { useEffect, useState } from "react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    LabelList,
} from "recharts";

const categories = [
    { name: "Footwear", revenue: 520 },
    { name: "Apparel", revenue: 340 },
    { name: "Accessories", revenue: 410 },
    { name: "Outerwear", revenue: 230 },
];

type revenueCategroyType = {
    id: number,
    name: string,
    revenue_by_category: number
}

export default function AnalyticsRevenueByCategory() {
    const [revenueCategoryState, setRevenueCategoryState] = useState<revenueCategroyType[]>([])

    useEffect(() => {
        const showAnalyticsRevenuCategory = async () => {
            const response = await fetchAnalyticsRevenueCategory()
            console.log(response)
            setRevenueCategoryState(response)
        }
        showAnalyticsRevenuCategory()
    }, [])

    return (
        <div className="rounded-[14px] border border-border bg-white  p-5">
            <h3 className="text-base font-semibold text-[var(--tx)]">
                Revenue by Category
            </h3>

            <p className="mb-4 mt-1 text-[13px] text-gray">
                Top category highlighted · 1 year
            </p>

            <div className="h-[260px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={revenueCategoryState}
                        margin={{ top: 18, right: 2, left: -9, bottom: 0 }}
                    >
                        <XAxis
                            dataKey="name"
                            tick={{ fill: "var(--mu)", fontSize: 11 }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis hide domain={[0,"auto"]} />

                        <Bar
                            dataKey="revenue_by_category"
                            radius={[6, 6, 0, 0]}
                            barSize={42}
                            shape={(props) => {
                                const { x, y, width, height, index } = props;

                                return (
                                    <rect
                                        x={x}
                                        y={y}
                                        width={width}
                                        height={height}
                                        rx={6}
                                        ry={6}
                                        fill={index === 0 ? "var(--ac)" : "var(--neu)"}
                                    />
                                );
                            }}
                        >
                            <LabelList
                                dataKey="revenue_by_category"
                                position="top"
                                formatter={(value) =>
                                    typeof value === "number" ? `$${value / 1000}k` : ""}
                                fill="var(--tx)"
                                fontSize={12}
                                fontWeight={600}
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}