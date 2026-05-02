import { Check } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import metadataContent from "@/app/_assets/seo-meta-data.json";

export const metadata: Metadata = metadataContent.projectStaffing;

export default function ProjectStaffing() {
  return (
    <div className="playbook flex justify-center flex-col items-center">
      <section className="w-full max-w-6xl px-5 lg:px-10 mt-16">
        <div className="problem-header reveal">
          <div className=" w-full flex items-start justify-between flex-col lg:flex-row gap-10">
            <div className="w-full  max-w-xl">
              <div className="section-label">The Staffing</div>
              <h2 className="section-title text-dark-ash-900">
                Project Staffing (C2C)
              </h2>
              <div className=" space-y-5">
                <p className="section-sub">
                  Vetted contract project managers, schedulers, and project
                  controls analysts placed on your team in two weeks. Eliron is
                  the vendor of record.
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
                  $90-180 / hour
                </h4>
                <p className=" text-xs">
                  Contract, contract-to-hire, or direct
                </p>
              </div>
              <div className="w-full border-t border-gray-200 pt-5 space-y-2">
                <div className=" w-full flex justify-between gap-1.5">
                  <span>Kickoff</span>
                  <span className=" font-bold">Two-week placement</span>
                </div>
                <div className=" w-full flex justify-between gap-1.5">
                  <span>Duration</span>
                  <span className=" font-bold">Contract</span>
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
              "Companies with capacity gaps in PM, scheduling, or project controls",
              "Owners needing to staff a project quickly without a long hiring cycle",
              " Mid-market and enterprise firms preferring one accountable vendor over multiple staffing agencies",
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
              "Vetted candidate slate within seven business days",
              " Eliron compliance, payroll, and insurance backing (one invoice, one accountable partner)",
              "Mid-engagement performance check-ins",
              "Convert to full-time at month six with no placement fee",
              "Roles supported: Project Manager, Senior Project Manager, Program Manager, Scheduler, Project Controls Analyst, Cost Controller, Document Control, Construction Manager",
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
                  title: "Fast",
                  description: "Rapid staffing of critical project roles",
                },
                {
                  id: 2,
                  title: "Reduced",
                  description:
                    "Reduced administrative burden with Eliron as vendor of record",
                },
                {
                  id: 3,
                  title: "Continuity",
                  description: "Improved project continuity and delivery speed",
                },
                {
                  id: 4,
                  title: "Flexibility",
                  description:
                    "Flexibility to convert contractors to full-time hires",
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
