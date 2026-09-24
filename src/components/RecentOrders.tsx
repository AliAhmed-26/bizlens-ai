const recentOrders = [
    {
        id: "#ORD-9812",
        customer: "Sarah Mitchell",
        amount: "$248.00",
        status: "Delivered",
        date: "Sep 19",
    },
    {
        id: "#ORD-9811",
        customer: "James Okafor",
        amount: "$89.90",
        status: "Processing",
        date: "Sep 19",
    },
    {
        id: "#ORD-9810",
        customer: "Lena Müller",
        amount: "$412.50",
        status: "Shipped",
        date: "Sep 18",
    },
    {
        id: "#ORD-9809",
        customer: "David Park",
        amount: "$67.00",
        status: "Delivered",
        date: "Sep 18",
    },
    {
        id: "#ORD-9808",
        customer: "Amara Singh",
        amount: "$195.00",
        status: "Cancelled",
        date: "Sep 17",
    },
]

const statusStyles = {
    Delivered: "bg-emerald-50 text-emerald-700",
    Shipped: "bg-blue-50 text-blue-700",
    Processing: "bg-amber-50 text-amber-700",
    Cancelled: "bg-red-50 text-red-700",
}


const arr = [
    "Order",
    "Customer",
    "Amount",
    "Status",
    "Date"
]
const RecentOrders = () => {
    return (
        <section className="rounded-xl border border-border bg-white p-5">

            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-body font-semibold ">
                    Recent Orders
                </h2>

                <button className="text-small text-purple">
                    View all →
                </button>
            </div>

            {/* Table */}
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b border-border">
                        {
                            arr.map(item => {
                                return (

                                    <th className="pb-2 text-left text-[12px] uppercase text-gray">
                                        {item}
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>

                <tbody>
                    {recentOrders.map((order) => (
                        <tr
                            key={order.id}
                            className="border-b border-border last:border-0"
                        >
                            <td className="py-3 text-small text-purple font-bold">
                                {order.id}
                            </td>

                            <td className="py-3 text-small ">
                                {order.customer}
                            </td>

                            <td className="py-3 font-mono text-small font-semibold ">
                                {order.amount}
                            </td>

                            <td className="py-3">
                                <span
                                    className={`rounded px-2 py-1 text-xs font-semibold ${statusStyles[order.status as keyof typeof statusStyles]}`}
                                >
                                    {order.status}
                                </span>
                            </td>

                            <td className="py-3 text-right text-small text-gray">
                                {order.date}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </section>
    )
}

export default RecentOrders