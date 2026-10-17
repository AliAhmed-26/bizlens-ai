"use client"
import React, { useEffect, useState } from 'react'
import Graph from '../Graph'
import { fetchAnalyticsOrders } from '@/services/analyticsService'
import AnalyticsHeader from './AnalyticsHeader'

type performanceTrendProp = {
    activeTimeLine: string
}

const PerformanceTrend = ({ activeTimeLine }:performanceTrendProp) => {

    type analyticsOrdersType = {
        date: string,
        revenue_per_day: number,
        order_per_day: number,
        aov: number
    }

    const [activeMetricAnalytics, setActiveMetricAnalytics] = useState("Orders")
    const [analyticsOrders, setAnalyticsOrders] = useState<analyticsOrdersType[]>([])

    useEffect(() => {
        const showAnalyticsOrders = async () => {
            const response = await fetchAnalyticsOrders(activeTimeLine)
            console.log(response)
            setAnalyticsOrders(response)
        }
        showAnalyticsOrders()
    }, [activeTimeLine])

    const analyticsOrdersArray = Array.isArray(analyticsOrders) ? analyticsOrders.map((item) => ({

        date: new Date(item.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric"
        }),
        revenue_per_day: Number(item.revenue_per_day),
        order_per_day: Number(item.order_per_day),
        aov: Number(item.aov)
    })) : []

    return (
        <div>
            <div className="rounded-xl border border-border bg-white p-5">
                {/* <h2 className=" font-semibold text-heading">
                    Performance Trend
                </h2>
                <p className='text-small text-gray'>
                    Oct 2025 – Sep 2026
                </p> */}

                <AnalyticsHeader
                    title="Performance Trend"
                    desc='Oct 2025 – Sep 2026'
                    arguments={['Orders', 'Avg Order Values']}
                    activeMetricAnalytics={activeMetricAnalytics}
                    onMetricChange={setActiveMetricAnalytics}
                />
                <div className="mt-5 h-64">
                    <Graph analyticsOrders={analyticsOrdersArray}
                        activeMetricAnalytics={activeMetricAnalytics} />
                </div>
            </div>
        </div>
    )
}

export default PerformanceTrend
