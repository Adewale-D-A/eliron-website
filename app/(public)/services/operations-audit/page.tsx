import React from "react";

export default function AIOperationsAudit() {
  return (
    <div className="w-full flex flex-col items-center  pt-28 ">
      <h2 className="text-5xl mb-10 lg:text-7xl text-center font-bold text-transparent bg-linear-45 from-secondary via-primary to-secondary dark:from-primary dark:via-[#eda6a9] dark:to-primary bg-clip-text">
        AI Operations Audit
      </h2>

      <div className=" w-full flex justify-center px-5 lg:px-10">
        <section className="grid gap-8 md:grid-cols-3 py-16 max-w-6xl">
          {/* Who this is for */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-gray-900 tracking-tight">
              Who this is for
            </h2>

            <ul className="mt-6 space-y-4 text-gray-600">
              {[
                "SMBs and growth-stage companies wanting to scope inefficiencies before committing to implementation",
                "Leaders needing a quick diagnostic of operational bottlenecks",
                "Teams exploring AI augmentation but unsure where to start",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What you get */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-gray-900 tracking-tight">
              What you get
            </h2>

            <ul className="mt-6 space-y-4 text-gray-600">
              {[
                "Two-week diagnostic engagement",
                "Written findings report highlighting inefficiencies",
                "Prioritized action list for improvements",
                "No long-term commitment required",
                "Recommendations tailored to AI-augmented solutions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-gray-900 tracking-tight">
              Outcomes you can expect
            </h2>

            <ul className="mt-6 space-y-4 text-gray-600">
              {[
                "Clear visibility into operational inefficiencies",
                "Actionable roadmap for improvement",
                "Confidence in where AI can deliver ROI",
                "Low-cost entry point to Eliron’s services",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-violet-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
