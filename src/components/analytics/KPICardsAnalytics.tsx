import React from 'react'
import KPICards from '../KPICards'

const KPICardsAnalytics = () => {

  const kpis = [
        {
            title: "Total customers",
            // value: `$${Number(dashboardStats.total_revenue).toLocaleString()}`,
            value: `$${Number(23).toLocaleString()}`,
            change: "+14.2%",
          },
          {
            title: "New customers",
            // value: Number(dashboardStats.total_orders).toLocaleString(),
            value: `$${Number(23).toLocaleString()}`,
            change: "+9.8%",
          },
          {
            title: "Returning rate",
            // value: `$${Number(dashboardStats.average_order_value).toLocaleString()}`,
            value: `$${Number(23).toLocaleString()}`,
            change: "+3.9%",
        },
        {
            title: "Avg. CLV",
            value: "NaN",
            change: "No previous period",
        },
    ]
  return (
    <div>
      <KPICards kpis={kpis}/>
    </div>
  )
}

export default KPICardsAnalytics