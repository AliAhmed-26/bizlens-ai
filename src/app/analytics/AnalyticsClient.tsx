"use client"
import AnalyticsHeader from '@/components/analytics/AnalyticsHeader'
import KPICardsAnalytics from '@/components/analytics/KPICardsAnalytics'
import PerformanceTrend from '@/components/analytics/PerformanceTrend'
import React from 'react'
import { useState } from 'react'


const AnalyticsClient = () => {
    const [activeTimeLine, setActiveTimeLine] = useState("7 Days")
    return (
        <main className="flex flex-col gap-6">
            <AnalyticsHeader
                title="Analytics"
                desc="Deep-dive into your revenue, orders, and product performance"
                arguments={['7 Days', '30 Days', '3 Months', '1 Year']}
                activeMetricAnalytics={activeTimeLine}
                onMetricChange={setActiveTimeLine}
            />
            <KPICardsAnalytics />
            <PerformanceTrend  activeTimeLine={activeTimeLine}/>
        </main>
    )
}

export default AnalyticsClient