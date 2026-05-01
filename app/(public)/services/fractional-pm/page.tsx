export default function FractionalPmo() {
  return (
    <div className="playbook flex justify-center" id="playbook">
      <div className="w-full max-w-6xl px-5 lg:px-10">
        <section
          className="playbook flex flex-col justify-center"
          id="playbook"
        >
          <div className="w-full max-w-6xl px-5 lg:px-10">
            <div className="problem-header reveal">
              <div className="section-label">The PMO Leadership</div>
              <h2 className="section-title">Fractional PMO Leadership</h2>
              <div className=" space-y-5">
                <p className="section-sub">
                  Senior PM embedded in your operations two to three days a
                  week. The grown-up version of having someone own execution
                  without a full-time hire.
                </p>
                <p className="section-sub">
                  $15-25K / month | 3-12 month engagements | Two-week kickoff
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
                  "Growth-stage companies that closed a round in the last 6–18 months",
                  "Mid-market companies with too many active projects and too few senior PMs",
                  "Founders or COOs personally running PMO and want to stop",
                  "Companies considering hiring a full-time COO or PMO Director but not ready to commit",
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
                  "Senior US-based project and program manager assigned to your account",
                  "Project intake and prioritization framework, customized to your portfolio",
                  "Weekly status cadence across your leadership team",
                  "Single dashboard for executive and board reporting",
                  "Risk and dependency tracking",
                  "Coaching for your in-house PMs and operations leaders",
                  "AI-augmented documentation and reporting (compresses status work by 70%+)",
                  "Quarterly executive review with maturity benchmarking",
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
                  "Clear prioritization of projects",
                  "Reduced executive workload",
                  "Improved reporting speed",
                  "Higher project success rate",
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
