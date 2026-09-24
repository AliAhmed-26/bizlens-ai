import DashboardHeader from '@/components/DashboardHeader'
import KPICards from '@/components/KPICards'
import RecentOrders from '@/components/RecentOrders'
import RevenueSection from '@/components/RevenueSection'
import TopProducts from '@/components/TopProducts'
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
      <KPICards />
      <RevenueSection />

      <section className="grid grid-cols-2 gap-6">
        <TopProducts />
        <RecentOrders/>
      </section>
    </main>
  )
}

