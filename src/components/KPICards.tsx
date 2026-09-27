"use client"
import { fetchDashboardStat } from '@/services/dashboardService'
import React from 'react'
import { useState, useEffect } from 'react'
const KPICards = () => {


    const [dashboardStats, setDashboardStats] = useState({
        total_revenue: 0,
        total_orders: 0,
        average_order_value: 0,
    })

    useEffect(() => {
        const showDashboardStat = async () => {
            const response = await fetchDashboardStat()
            setDashboardStats(response)
            
        }
        showDashboardStat()
    }, [])



    const kpis = [
        {
            title: "Total Revenue",
            value: `$${Number(dashboardStats.total_revenue).toLocaleString()}`,
            change: "+14.2%",
        },
        {
            title: "Total Orders",
            value: Number(dashboardStats.total_orders).toLocaleString(),
            change: "+9.8%",
        },
        {
            title: "Avg. Order Value",
            value: `$${Number(dashboardStats.average_order_value).toLocaleString()}`,
            change: "+3.9%",
        },
        {

            title: "Sales Growth",
            value: "NaN",
            change: "No previous period",
        },
    ]

    return (
        <section className="grid grid-cols-4 gap-4">
            {kpis.map((stat) => (
                <div
                    key={stat.title}
                    className="rounded-xl border border-border bg-white p-4"
                >
                    <p className="text-sm text-gray">
                        {stat.title}
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold text-black">
                        {stat.value}
                    </h2>

                    <p className="mt-1 text-xs text-green">
                        ↑ {stat.change}
                    </p>
                </div>
            ))}
        </section>
    )
}

export default KPICards





// import React from 'react'

// const KPICards = () => {
//     const kpis = [
//         {
//             title: "Total Revenue",
//             value: "$187,420",
//             change: "+14.2%",
//         },
//         {
//             title: "Total Orders",
//             value: "1,432",
//             change: "+9.8%",
//         },
//         {
//             title: "Avg. Order Value",
//             value: "$130.90",
//             change: "+3.9%",
//         },
//         {
//             title: "Sales Growth",
//             value: "+18.3%",
//             change: "+4.1pp",
//         },
//     ]

//     return (
//         <section className="grid grid-cols-4 gap-8">
//             {kpis.map((kpi) => (
//                 <div key={kpi.title}>

//                     <p className="text-small text-gray">
//                         {kpi.title}
//                     </p>

//                     <h2 className="mt-1 text-2xl font-semibold text-black">
//                         {kpi.value}
//                     </h2>

//                     <p className="mt-1 text-small text-green">
//                         ↑ {kpi.change}
//                     </p>

//                 </div>
//             ))}
//         </section>
//     )
// }

// export default KPICards