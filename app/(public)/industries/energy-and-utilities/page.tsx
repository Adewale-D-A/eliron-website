import { cn } from "@/app/_utils/cn";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import metadataContent from "@/app/_assets/seo-meta-data.json";

export const metadata: Metadata = metadataContent.energyUtilities;

export default function EnergyAndUtilities() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <section className="hero w-full justify-center" id="hero">
        <div className="hero-grid-bg"></div>
        <div className="hero-gradient hero-gradient-1"></div>
        <div className="hero-gradient hero-gradient-2"></div>
        <div className="w-full max-w-6xl px-5 lg:px-10 hero-content">
          <p className="hero-badge">
            For Energy & Utility Capital Project Leaders
          </p>
          <h1 className=" text-4xl lg:text-7xl font-bold">
            Capital project discipline,
            <br />
            <span className="text-orange">delivered locally.</span>
          </h1>
          <p className="hero-sub">
            Houston-based program management, owner's rep, and project controls
            for utilities, midstream operators, renewable developers, and tier-2
            data centers. Senior leadership at a fraction of Big 4 cost.
          </p>
          <div className="hero-ctas">
            <Link href="/contact-us" className="btn btn-primary btn-arrow">
              Talk to us
            </Link>
            <Link href="/contact-us" className="btn btn-secondary">
              Book a call
            </Link>
          </div>
        </div>
      </section>

      {/* The pattern we see */}
      <section className="w-full max-w-6xl px-5 lg:px-10 border-t border-gray-200 py-16 flex flex-col lg:flex-row">
        <div className="w-full max-w-sm">
          <div className="section-label">The Pattern We See</div>
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
            Where the executions breaks.
          </h2>
        </div>
        <div className=" w-full mt-6 lg:mt-0 text-gray-600 space-y-5">
          <p>
            Most energy and utility owners we talk to face the same three
            pressures. Capital rograms are slipping later than internal teams
            realize, project controls capacity is thinner than it should be for
            the program scale, and Big 4 firms are too expensive for the
            discrete pieces of work that actually need outside discipline. We
            were built for that gap.
          </p>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
            {[
              {
                id: "i",
                title: "Programs slip and recover late",
                description:
                  "By the time the steering committee sees a red status, three months of float are gone and the recovery options are constrained.",
              },
              {
                id: "ii",
                title: "Controls capacity is thin",
                description:
                  "Cost and schedule analysts are stretched, risk reporting becomes reactive, and change orders surprise you.",
              },
              {
                id: "iii",
                title: "Owner's rep is internal-only",
                description:
                  " outside discipline on EPC vendors and major contractors costs creep schedules drift, and accountability blurs.",
              },
            ].map((it) => (
              <div
                key={it.id}
                className=" reveal border-t border-orange pt-4 space-y-4"
              >
                <p className=" text-orange italic">{it.id}.</p>
                <h3 className=" font-bold text-xl text-orange">{it.title}</h3>
                <p className="">{it.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="serve bg-white flex justify-center py-16 border-t border-gray-300">
        <div className="w-full max-w-6xl px-5 lg:px-10">
          <div className="problem-header text-left reveal">
            <div className="section-label">What sets us apart</div>
            <h2 className="section-title text-navy">
              Why we win in this space.
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                id: 1,
                title: "Houston HQ",
                description:
                  "n the energy capital of the United tates. same ume zone, same industry fluency",

                isPrimaryBg: true,
              },
              {
                id: 2,
                title: "Senior-led",
                description:
                  "very engagement led by senior PMs with capital project background. No juniors fronting work.",

                isPrimaryBg: false,
              },
              {
                id: 3,
                title: "50% less cost",
                description:
                  "Than Big 4 for comparable scope. Same caliber of leadership, leaner team structure.",

                isPrimaryBg: true,
              },
              {
                id: 4,
                title: "2-week start",
                description:
                  "From signed agreement to engagement kickoff. Big 4 starts in two quarters",

                isPrimaryBg: true,
              },
            ].map((it, indx) => (
              <div
                key={it.id}
                className={cn(
                  " reveal space-y-1 border-l border-orange text-gray-700 px-4",
                )}
              >
                <h3 className=" font-bold text-2xl ">{it.title}</h3>
                <p>{it.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Most relevant service */}
      <section className="serve bg-white flex justify-center  py-16 border-t border-gray-300">
        <div className="w-full max-w-6xl px-5 lg:px-10">
          <div className="problem-header text-left reveal">
            <div className="section-label">Most relevant services</div>
            <h2 className="section-title text-navy">
              How we typically engage with energy & utilities clients
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                id: 1,
                title: "Fractional PMO Leadership",
                description:
                  "enior PM embedded in your operations two to three days a week.",
                value: "$15-25K/month",
                href: "/services/fractional-pm",
                isPrimaryBg: true,
              },
              {
                id: 2,
                title: "Program Recovery Audit",
                description:
                  "Diagnostics of stalled or troubled programs. Root cause and recovery plan.",
                value: "$30-60K fixed",
                href: "/services/program-recovery-audit",
                isPrimaryBg: false,
              },
              {
                id: 3,
                title: "Owner's Representative",
                description:
                  "Independent oversightof EPC, GC, and major vendor delivery.",
                value: "$15-30K/month",
                href: "/services/owners-representation",
                isPrimaryBg: true,
              },
            ].map((it, indx) => (
              <div
                key={it.id}
                className={cn(
                  "serve-card reveal  text-gray-200 space-y-1",
                  it.isPrimaryBg ? "bg-navy" : "bg-orange",
                )}
              >
                <p className=" text-gray-200 text-xs tracking-widest">
                  SERVICE 0{indx + 1}
                </p>
                <h3 className=" font-bold">{it.title}</h3>
                <p>{it.description}</p>
                <div className=" w-full flex justify-between mt-5 gap-2 border-t border-gray-600 pt-5">
                  <span className=" italic">{it.value}</span>
                  <Link
                    key={it.id}
                    href={it.href}
                    className=" flex items-center gap-1 font-bold"
                  >
                    <MoveRight className=" h-4 w-4 " />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
