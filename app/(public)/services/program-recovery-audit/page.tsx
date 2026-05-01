export default function ProgramRecoveryAudit() {
  return (
    <div className="playbook flex justify-center" id="playbook">
      <div className="w-full max-w-6xl px-5 lg:px-10">
        <section
          className="playbook flex flex-col justify-center"
          id="playbook"
        >
          <div className="w-full max-w-6xl px-5 lg:px-10">
            <div className="problem-header reveal">
              <div className="section-label">The Recovery Audit</div>
              <h2 className="section-title">Program Recovery Audit</h2>
              <div className=" space-y-5">
                <p className="section-sub">
                  When a program is slipping and nobody can agree on why. Four
                  to six weeks. Fixed fee. Written diagnostic and recovery plan.
                </p>
                <p className="section-sub">
                  $30-60K fixed | 4–6 week engagement | Two-week kickoff
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
                  "Capital project owners with programs over budget, behind schedule, or losing confidence",
                  "Sponsors needing an outside diagnostic before making structural changes",
                  "Companies suspecting trouble but unable to surface root causes internally",
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
                  "Stakeholder interviews (8–15 individuals across the program)",
                  "Program documentation review and gap analysis",
                  "Root cause analysis with written findings",
                  "Sequenced recovery plan with milestones, owners, and dependencies",
                  "Owner and accountability map for the next phase",
                  "Executive briefing and board-ready summary",
                  "Optional follow-on implementation engagement at discounted rate",
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
                  "Clear diagnostic of program issues",
                  "Actionable recovery plan with milestones",
                  "Restored executive confidence in delivery",
                  "Independent accountability map for next phase",
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
