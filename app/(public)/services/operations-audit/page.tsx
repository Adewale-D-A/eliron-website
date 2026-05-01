export default function AIOperationsAudit() {
  return (
    <div className="playbook flex justify-center" id="playbook">
      <div className="w-full max-w-6xl px-5 lg:px-10">
        <section
          className="playbook flex flex-col justify-center"
          id="playbook"
        >
          <div className="w-full max-w-6xl px-5 lg:px-10">
            <div className="problem-header reveal">
              <div className="section-label">The Audit</div>
              <h2 className="section-title">AI Operations Audit</h2>
              <div className=" space-y-5">
                <p className="section-sub">
                  The AI Operations Audit is a short, entry-level engagement
                  designed to quickly identify inefficiencies in a company’s
                  operations. Over a two‑week period, Eliron reviews workflows,
                  reporting, and communication processes to highlight where
                  time, revenue, or conversion is being lost. The outcome is a
                  written diagnostic report and a prioritized action list that
                  shows exactly where AI‑augmented solutions can deliver the
                  most impact.
                </p>
                <p className="section-sub">
                  It’s a low‑commitment way for SMBs and growth‑stage companies
                  to gain clarity before investing in larger implementations,
                  giving them a roadmap for improvement without long-term
                  contracts.
                </p>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Who this is for */}
            <div className="serve-card reveal">
              {" "}
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
            <div className="serve-card reveal">
              {" "}
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
            <div className="serve-card reveal">
              {" "}
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
          </div>
        </section>
      </div>
    </div>
  );
}
