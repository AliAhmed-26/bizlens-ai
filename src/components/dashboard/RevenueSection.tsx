// import React from 'react'
// import RevenueChart from './RevenueChart'
// import SalesByCategory from './SalesByCategory'

// const RevenueSection = () => {
//   return (
//     <section className="grid grid-cols-[2fr_1fr] gap-4">

//       {/* Revenue */}
//       <div className="rounded-xl border border-border bg-white p-4">
//         <div>
//           <h2 className="text-body font-semibold">
//             Revenue - September 2026
//           </h2>

//           {/* <p className="mt-1 text-2xl font-semibold text-heading">
//             $187,420
//           </p>

//           <p className="mt-1 text-small text-body">
//             Sep 1 – Sep 30, 2026
//           </p> */}
//         </div>

//         {/* Revenue Graph */}

//         <div className='h-64 my-5'>
//           <RevenueChart />
//         </div>
//       </div>

//       {/* Sales by Category */}
//       <div className="rounded-xl border border-border bg-white p-4">
//         <h2 className="text-heading font-semibold">
//           Sales by Category
//         </h2>
//         <div className='h-64 my-5'>
//           <SalesByCategory/>
//         </div>
//       </div>

//     </section>
//   )
// }

// export default RevenueSection




import RevenueChart from './RevenueChart'
import SalesByCategory from './SalesByCategory'

const RevenueSection = () => {
    return (
        <section className="grid grid-cols-[2fr_1fr] gap-6">

            {/* Revenue */}
            <div className="rounded-xl border border-border bg-white p-5">
                <h2 className=" font-semibold text-body">
                    Revenue - September 2026
                </h2>

                <div className="mt-5 h-64">
                    <RevenueChart />
                </div>
            </div>

            {/* Sales by Category */}
            <div className="rounded-xl border border-border bg-white p-5">
                <h2 className="font-semibold text-body">
                    Sales by Category
                </h2>

                <SalesByCategory />
            </div>

        </section>
    )
}

export default RevenueSection