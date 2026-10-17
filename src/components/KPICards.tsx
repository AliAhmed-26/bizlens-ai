import React from 'react'

type KPIType = {
    title: string,
    value: string,
    change: string
}

type KPICardsType = {
    kpis: KPIType[]
}
const KPICards = ({ kpis} : KPICardsType) => {
    return (
        <div>
            <section className="grid grid-cols-4 gap-4">

                {kpis.map((stat) => (
                    <div
                        key={stat.title}
                        className="rounded-xl border border-border bg-white p-4  "
                    >
                        <p className="text-sm text-gray">
                            {stat.title}
                        </p>

                        <h2 className="mt-2 text-2xl font-semibold text-black">
                            {stat.value}
                        </h2>

                        <p className="mt-1 text-xs text-green">
                            ↑ {stat.change}
                        </p>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default KPICards