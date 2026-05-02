import { Check } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import metadataContent from "@/app/_assets/seo-meta-data.json";

export const metadata: Metadata = metadataContent.ownersRepresentative;

export default function OwnersRepresentative() {
  return (
    <div className="playbook flex justify-center flex-col items-center">
      <section className="w-full max-w-6xl px-5 lg:px-10 mt-16">
        <div className="problem-header reveal">
          <div className=" w-full flex items-start justify-between flex-col lg:flex-row gap-10">
            <div className="w-full  max-w-xl">
              <div className="section-label">The Representative Services</div>
              <h2 className="section-title text-dark-ash-900">
                Owner's Representative Services
              </h2>
              <div className=" space-y-5">
                <p className="section-sub">
                  Independent oversight of EPC, GC, and major vendor delivery on
                  capital projects. We sit on your side of the table.
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
                  $15-30K / month
                </h4>
                <p className=" text-xs"> 6–18 month engagements </p>
              </div>
              <div className="w-full border-t border-gray-200 pt-5 space-y-2">
                <div className=" w-full flex justify-between gap-1.5">
                  <span>Kickoff</span>
                  <span className=" font-bold">Three-week kickoff</span>
                </div>
                <div className=" w-full flex justify-between gap-1.5">
                  <span>Duration</span>
                  <span className=" font-bold">6–18 months</span>
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
              "Utility, midstream, and renewable owners on capital projects $5M and above",
              "Owners without internal owner's rep capacity but needing one",
              "Industrial and infrastructure clients coordinating multiple vendors",
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
              "Senior owner's rep on-site or remote depending on project needs",
              "EPC and GC performance management",
              "Independent cost and schedule oversight",
              "Risk register and change order management",
              "Vendor coordination across mechanical, electrical, civil, and instrumentation",
              "Monthly executive briefings and quarterly board summaries",
              "Commissioning and handover support",
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
                  title: "Independent Oversight",
                  description:
                    "Independent oversight that protects owner interests",
                },
                {
                  id: 2,
                  title: "improved Vendor",
                  description: "Improved vendor accountability and performance",
                },
                {
                  id: 3,
                  title: "Reduced Risk",
                  description:
                    "Reduced risk of cost overruns and schedule delays",
                },
                {
                  id: 4,
                  title: "Clear Reporting",
                  description: "Clear reporting for executives and boards",
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
