"use client"
import React from 'react'

type AnalyticsHeaderPropsType = {
    title: string,
    desc: string,
    arguments: string[],
    activeMetricAnalytics: string,
    onMetricChange: (metric: string) => void
}

const AnalyticsHeader = (prop: AnalyticsHeaderPropsType) => {
    return (
        <div className='flex items-center justify-between '>

            <div className=''>
                <h1 className='text-heading font-bold'>
                    {/* Analytics */}
                    {prop.title}
                </h1>
                <p className='text-gray text-small'>
                    {/* Deep-dive into your revenue, orders, and product performance */}
                    {prop.desc}
                </p>
            </div>

            <div>
                <div
                    className='text-gray text-body grid w-full border border-gray-200 rounded-lg bg-white'
                    style={{ gridTemplateColumns: `repeat(${prop.arguments.length}, minmax(0, 1fr))` }}
                >
                    {
                        prop.arguments.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => prop.onMetricChange(item)}
                                    className={`px-2 py-2 rounded-md transition-colors ${prop.activeMetricAnalytics === item
                                        ? "bg-indigo-100 text-indigo-700 font-medium"
                                        : "text-gray-500 hover:bg-gray-100"
                                        }`}
                                >
                                    {item}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AnalyticsHeader