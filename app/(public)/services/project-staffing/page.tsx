export default function ProjectStaffing() {
  return (
    <div className="playbook flex justify-center" id="playbook">
      <div className="w-full max-w-6xl px-5 lg:px-10">
        <section
          className="playbook flex flex-col justify-center"
          id="playbook"
        >
          <div className="w-full max-w-6xl px-5 lg:px-10">
            <div className="problem-header reveal">
              <div className="section-label">The Staffing</div>
              <h2 className="section-title"> Project Staffing (C2C)</h2>
              <div className=" space-y-5">
                <p className="section-sub">
                  Vetted contract project managers, schedulers, and project
                  controls analysts placed on your team in two weeks. Eliron is
                  the vendor of record.
                </p>
                <p className="section-sub">
                  $90-180 / hour | Contract, contract-to-hire, or direct |
                  Two-week placement
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
                  "Companies with capacity gaps in PM, scheduling, or project controls",
                  "Owners needing to staff a project quickly without a long hiring cycle",
                  " Mid-market and enterprise firms preferring one accountable vendor over multiple staffing agencies",
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
                  "Vetted candidate slate within seven business days",
                  " Eliron compliance, payroll, and insurance backing (one invoice, one accountable partner)",
                  "Mid-engagement performance check-ins",
                  "Convert to full-time at month six with no placement fee",
                  "Roles supported: Project Manager, Senior Project Manager, Program Manager, Scheduler, Project Controls Analyst, Cost Controller, Document Control, Construction Manager",
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
                  "Rapid staffing of critical project roles",
                  "Reduced administrative burden with Eliron as vendor of record",
                  "Improved project continuity and delivery speed",
                  "Flexibility to convert contractors to full-time hires",
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
