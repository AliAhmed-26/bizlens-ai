export const fetchDashboardStat = async () => {
    
    const request_stat = await fetch("http://localhost:5000/api/dashboard/stats")
    const response_stat = await request_stat.json()
    return response_stat
}

export const fetchDashboardChartRevenue = async () => {
    
    const request_chart_revenue = await fetch("http://localhost:5000/api/dashboard/chart_revenue")
    const response_chart_revenue = await request_chart_revenue.json()
    return response_chart_revenue
}

export const fetchSalesByCategory = async () => {
    
    const request_sales_by_category = await fetch("http://localhost:5000/api/dashboard/sales_by_category")
    const response_sales_by_category = await request_sales_by_category.json()
    return response_sales_by_category
}

export const fetchTopProducts = async () => {
    
    const request_top_products = await fetch("http://localhost:5000/api/dashboard/top_products")
    const response_top_products = await request_top_products.json()
    return response_top_products
}

export const fetchRecentOrders = async () => {
    
    const request_recent_orders = await fetch("http://localhost:5000/api/dashboard/recent_orders")
    const response_recent_orders = await request_recent_orders.json()
    return response_recent_orders
}