import { Info } from 'lucide-react'

const DashboardHeader = () => {
    return (
        <section className="flex items-center justify-between">

            {/* Greeting */}
            <div>
                <h1 className="text-heading font-semibold text-black">
                    Good Morning Ali
                </h1>

                <p className="text-small text-gray">
                    Sep 19, 2026 · Rashid Menswear is performing above last month's average.
                </p>
            </div>

            {/* Ask BizLens */}
            <button className="flex items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-2 text-small text-purple">
                <Info className="h-4 w-4" />
                Ask BizLens
            </button>

        </section>
    )
}

export default DashboardHeader