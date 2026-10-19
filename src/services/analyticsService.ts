export const fetchAnalyticsOrders = async (range: string) => {

    const request_analytics_order = await fetch(`http://localhost:5000/api/analytics/orders_aov?range=${encodeURIComponent(range)}`)
    const response_analytics_order = await request_analytics_order.json()
    return response_analytics_order
}

export const fetchAnalyticsRevenueCategory = async () => {

    const request_analytics_revenue_category = await fetch("http://localhost:5000/api/analytics/analytics_revenue_category")

    const response_analytics_revenue_category = await request_analytics_revenue_category.json()
    return response_analytics_revenue_category
}

export const fetchAnalyticsTopMarketsRevenue = async () => {

    const request_analytics_top_markets_revenue = await fetch("http://localhost:5000/api/analytics/analytics_top_markets_revenue")

    const response_analytics_top_markets_revenue = await request_analytics_top_markets_revenue.json()
    return response_analytics_top_markets_revenue
}
