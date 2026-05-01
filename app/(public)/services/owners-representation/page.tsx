export default function OwnersRepresentative() {
  return (
    <div className="playbook flex justify-center" id="playbook">
      <div className="w-full max-w-6xl px-5 lg:px-10">
        <section
          className="playbook flex flex-col justify-center"
          id="playbook"
        >
          <div className="w-full max-w-6xl px-5 lg:px-10">
            <div className="problem-header reveal">
              <div className="section-label">The Representative Services</div>
              <h2 className="section-title">
                {" "}
                Owner's Representative Services
              </h2>
              <div className=" space-y-5">
                <p className="section-sub">
                  Independent oversight of EPC, GC, and major vendor delivery on
                  capital projects. We sit on your side of the table.
                </p>
                <p className="section-sub">
                  $15-30K / month | 6–18 month engagements | Three-week kickoff
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
                  "Utility, midstream, and renewable owners on capital projects $5M and above",
                  "Owners without internal owner's rep capacity but needing one",
                  "Industrial and infrastructure clients coordinating multiple vendors",
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
                  "Senior owner's rep on-site or remote depending on project needs",
                  "EPC and GC performance management",
                  "Independent cost and schedule oversight",
                  "Risk register and change order management",
                  "Vendor coordination across mechanical, electrical, civil, and instrumentation",
                  "Monthly executive briefings and quarterly board summaries",
                  "Commissioning and handover support",
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
                  "Independent oversight that protects owner interests",
                  "Improved vendor accountability and performance",
                  "Reduced risk of cost overruns and schedule delays",
                  "Clear reporting for executives and boards",
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
