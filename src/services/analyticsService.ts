export const fetchAnalyticsOrders = async (range: string) => {

    const request_analytics_order = await fetch(`http://localhost:5000/api/analytics/orders_aov?range=${encodeURIComponent(range)}`)
    const response_analytics_order = await request_analytics_order.json()
    return response_analytics_order
}
