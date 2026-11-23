import React from 'react'
import KPICards from '../KPICards'

const KPICardsDocuments = () => {
    const kpis = [
        {
            title: "Total Documents",
            // value: `$${Number(dashboardStats.total_revenue).toLocaleString()}`,
            value: "8", 
            change: "",
        },
        {
            title: "Processed",
            // value: Number(dashboardStats.total_orders).toLocaleString(),
            value: "5",
            change: "",
        },
        {
            title: "Total Size",
            // value: `$${Number(dashboardStats.average_order_value).toLocaleString()}`,
            value: "13.4 MB",
            change: "",
        },
        {
            title: "Storage Used",
            value: "8.2 / 20 GB",
            change: ""
        },
    ]
    return (
        <div>
            <KPICards kpis={kpis} />
        </div>
    )
}

export default KPICardsDocuments
