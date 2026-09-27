"use client"

import { fetchSalesByCategory } from "@/services/dashboardService"
import { useEffect, useState } from "react"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Sector,
} from "recharts"



const SalesByCategory = () => {

  type salesCategoryType = {
    category_name: string,
    total_sales: number,
    sales_percentage: number
  }

  const [salesByCategoryUseState, setSalesByCategoryUseState] = useState<salesCategoryType[]>([])



  useEffect(() => {
    const showSalesByCategory = async () => {
      const response = await fetchSalesByCategory()

      console.log("Sales by Category:", response)
      setSalesByCategoryUseState(response)
    }

    showSalesByCategory()
  }, [])

  const categoryData = [
    { name: "Footwear", value: 38 },
    { name: "Apparel", value: 29 },
    { name: "Accessories", value: 21 },
    { name: "Outerwear", value: 12 },
  ]

  const colors = [
    "#4f46e5",
    "#818cf8",
    "#a5b4fc",
    "#c7d2fe",
  ]

  return (
    <div className="mt-4 flex flex-col items-center gap-2">

      {/* Donut */}
      <div className="relative h-44 w-44 shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={salesByCategoryUseState}
              dataKey="total_sales"
              nameKey="category_name"
              innerRadius={45}
              outerRadius={62}
              paddingAngle={3}
              stroke="none"
              shape={(props: any) => (
                <Sector {...props} fill={colors[props.index]} />
              )}
            >

            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl text-body font-bold">
            100%
          </span>

          <span className="text-small text-gray">
            Total Sales
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-1">
        {salesByCategoryUseState.map((category, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-6"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: colors[index] }}
              />

              <span className="text-small">
                {category.category_name}
              </span>
            </div>

            <span className="text-small">
              {category.sales_percentage}%
            </span>
          </div>
        ))}
      </div>

    </div>
  )

  //   return (
  //     <div className="mt-5 flex flex-col items-center gap-4">

  //       {/* Donut */}
  //       <div className="relative h-44 w-44 shrink-0">
  //         <ResponsiveContainer width="100%" height="100%">
  //           <PieChart>
  //             <Pie
  //               data={salesByCategoryUseState}
  //               dataKey="value"
  //               nameKey="name"
  //               innerRadius={45}
  //               outerRadius={62}
  //               paddingAngle={3}
  //               stroke="none"
  //             >
  //               {categoryData.map((category, index) => (
  //                 <Cell
  //                   key={category.name}
  //                   fill={colors[index]}
  //                 />
  //               ))}
  //             </Pie>
  //           </PieChart>
  //         </ResponsiveContainer>

  //         {/* Center text */}
  //         <div className="absolute inset-0 flex flex-col items-center justify-center">
  //           <span className="text-2xl font-bold text-body">
  //             100%
  //           </span>

  //           <span className="text-small text-gray">
  //             Total Sales
  //           </span>
  //         </div>
  //       </div>

  //       {/* Legend */}
  //       <div className="w-full space-y-2">
  //         {categoryData.map((category, index) => (
  //           <div
  //             key={category.name}
  //             className="flex items-center justify-between"
  //           >
  //             <div className="flex items-center gap-2">
  //               <span
  //                 className="h-2.5 w-2.5 rounded-full"
  //                 style={{ backgroundColor: colors[index] }}
  //               />

  //               <span className="text-small">
  //                 {category.name}
  //               </span>
  //             </div>

  //             <span className="text-small font-medium">
  //               {category.value}%
  //             </span>
  //           </div>
  //         ))}
  //       </div>

  //     </div>
  //   )
}
export default SalesByCategory