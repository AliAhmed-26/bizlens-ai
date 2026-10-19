"use client"

import { fetchAnalyticsTopMarketsRevenue } from "@/services/analyticsService";
import { useEffect, useState } from "react";

const markets = [
  { name: "United Arab Emirates", percentage: 38 },
  { name: "Saudi Arabia", percentage: 24 },
  { name: "United Kingdom", percentage: 16 },
  { name: "Egypt", percentage: 12 },
  { name: "Other", percentage: 10 },
];

type TopMarketCategoryType = {
  country_name: string,
  revenue_percentage: number
}

export default function AnalyticsTopMarkets() {
  const [topMarketState, setTopMarketState] = useState<TopMarketCategoryType[]>([])

  useEffect(() => {
    const showAnalyticsTopMarketRevenue = async () => {
      const response = await fetchAnalyticsTopMarketsRevenue()
      console.log(response)
      setTopMarketState(response)
    }
    showAnalyticsTopMarketRevenue()
  }, [])

  return (
    <div className="rounded-[14px] border border-border bg-white p-5">
      <h3 className="text-base font-semibold ">
        Top Markets by Revenue
      </h3>

      <p className="mb-5 mt-1 text-small ">
        Geographic distribution
      </p>

      <div className="space-y-5">
        {topMarketState.map((market, index) => (
          <div key={market.country_name}>
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="">{market.country_name}</span>
              <span className="font-semibold text-[var(--tx)]">
                {market.revenue_percentage}%
              </span>
            </div>

            <div className="h-[6px] w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-blue-300 transition-all duration-300"
                style={{
                  width: `${market.revenue_percentage}%`,
                  opacity: index === 0 ? 1 : 0.65,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}