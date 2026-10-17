import DashboardHeader from '@/components/dashboard/DashboardHeader'
import KPICardsDashboard from '@/components/dashboard/KPICardsDashboard'

import RecentOrders from '@/components/dashboard/RecentOrders'
import RevenueSection from '@/components/dashboard/RevenueSection'
import TopProducts from '@/components/dashboard/TopProducts'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Dashboard | BizLens AI",
  description: "Business intelligence dashboard for your business.",
}
export default function Dashboard() {
  return (
    <main className='flex flex-col gap-6'>
      <DashboardHeader />
      <KPICardsDashboard/>
      <RevenueSection />

      <section className="grid grid-cols-2 gap-6">
        <TopProducts />
        <RecentOrders/>
      </section>
    </main>
  )
}

