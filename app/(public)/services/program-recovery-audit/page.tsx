import { Check } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import metadataContent from "@/app/_assets/seo-meta-data.json";

export const metadata: Metadata = metadataContent.programRecoveryAudit;

export default function ProgramRecoveryAudit() {
  return (
    <div className="playbook flex justify-center flex-col items-center">
      <section className="w-full max-w-6xl px-5 lg:px-10 mt-16">
        <div className="problem-header reveal">
          <div className=" w-full flex items-start justify-between flex-col lg:flex-row gap-10">
            <div className="w-full  max-w-xl">
              <div className="section-label">The Recovery Audit</div>
              <h2 className="section-title text-dark-ash-900">
                Program Recovery Audit
              </h2>
              <div className=" space-y-5">
                <p className="section-sub">
                  When a program is slipping and nobody can agree on why. Four
                  to six weeks. Fixed fee. Written diagnostic and recovery plan.
                </p>
                <div className="hero-ctas">
                  <Link
                    href="/contact-us"
                    className="btn btn-primary btn-arrow"
                  >
                    Talk to us
                  </Link>
                  <Link
                    href="/contact-us"
                    className="btn border border-gray-300 text-navy"
                  >
                    Book a call
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full lg:max-w-xs p-5 rounded-2xl border border-gray-200 space-y-3 text-gray-700">
              <div>
                <div className="section-label">INVESTMENTS</div>
                <h4 className=" text-2xl font-bold italic text-navy">
                  $30-60K fixed
                </h4>
                <p className=" text-xs">4–6 week engagement</p>
              </div>
              <div className="w-full border-t border-gray-200 pt-5 space-y-2">
                <div className=" w-full flex justify-between gap-1.5">
                  <span>Kickoff</span>
                  <span className=" font-bold">Two-week kickoff</span>
                </div>
                <div className=" w-full flex justify-between gap-1.5">
                  <span>Duration</span>
                  <span className=" font-bold">4–6 week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="w-full max-w-6xl px-5 lg:px-10 border-t border-gray-200 py-16 flex flex-col lg:flex-row">
        <div className="w-full lg:max-w-sm">
          <div className="section-label">AUDIENCE</div>
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
            Who this is for
          </h2>
        </div>
        <div className=" w-full mt-6 lg:mt-0">
          <ul className="space-y-4 text-gray-600">
            {[
              "Capital project owners with programs over budget, behind schedule, or losing confidence",
              "Sponsors needing an outside diagnostic before making structural changes",
              "Companies suspecting trouble but unable to surface root causes internally",
            ].map((item, indx) => (
              <li key={item} className="flex items-start gap-3  font-bold">
                <span className=" text-orange italic">{indx + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What you get */}
      <section className="w-full max-w-6xl px-5 lg:px-10 border-t border-gray-200 py-16 flex flex-col lg:flex-row">
        <div className="w-full max-w-sm">
          <div className="section-label">DELIVERABLES</div>
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
            What you get
          </h2>
        </div>
        <div className=" w-full mt-6 lg:mt-0">
          <ul className=" text-gray-600 flex flex-wrap gap-2">
            {[
              "Stakeholder interviews (8–15 individuals across the program)",
              "Program documentation review and gap analysis",
              "Root cause analysis with written findings",
              "Sequenced recovery plan with milestones, owners, and dependencies",
              "Owner and accountability map for the next phase",
              "Executive briefing and board-ready summary",
              "Optional follow-on implementation engagement at discounted rate",
            ].map((item, indx) => (
              <li
                key={item}
                className="flex items-start gap-3  font-bold border border-gray-200 rounded-2xl p-4"
              >
                <span className=" text-orange italic">
                  <Check className=" w-4 h-4" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className=" bg-navy w-full flex justify-center ">
        <section className="w-full max-w-6xl px-5 lg:px-10 border-t border-gray-200 py-16 flex flex-col lg:flex-row">
          <div className="w-full max-w-6xl px-5 lg:px-10">
            <div className="problem-header text-left reveal">
              <div className="section-label">OUTCOMES YOU CAN EXPECT</div>
              <h2 className="section-title text-white">
                What changes after the engagement
              </h2>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  id: 1,
                  title: "Clear",
                  description: "Clear diagnostic of program issues",
                },
                {
                  id: 2,
                  title: "Actionable",
                  description: "Actionable recovery plan with milestones",
                },
                {
                  id: 3,
                  title: "Restored",
                  description: "Restored executive confidence in delivery",
                },
                {
                  id: 4,
                  title: "Accountability",
                  description: "Independent accountability map for next phase",
                },
              ].map((it) => (
                <div
                  key={it.id}
                  className=" reveal border-t border-orange pt-8 space-y-4"
                >
                  <h3 className=" font-bold text-3xl text-orange">
                    {it.title}
                  </h3>
                  <p className=" text-gray-400">{it.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
