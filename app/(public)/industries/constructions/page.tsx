import { cn } from "@/app/_utils/cn";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import metadataContent from "@/app/_assets/seo-meta-data.json";

export const metadata: Metadata = metadataContent.constructionInfrastructure;

export default function ConstructionInfrastructure() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <section className="hero w-full justify-center" id="hero">
        <div className="hero-grid-bg"></div>
        <div className="hero-gradient hero-gradient-1"></div>
        <div className="hero-gradient hero-gradient-2"></div>
        <div className="w-full max-w-6xl px-5 lg:px-10 hero-content">
          <p className="hero-badge">
            {" "}
            For Contractors, EPC Firms, and Developers
          </p>
          <h1 className=" text-4xl lg:text-7xl font-bold">
            Project controls and PMO support,
            <br />
            <span className="text-orange">built for the way you work.</span>
          </h1>
          <p className="hero-sub">
            Reporting, scheduling, and coordination across multi-project
            portfolios. AI-augmented templates compress weekly admin from hours
            to minutes.
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
            {" "}
            Construction and infrastructure projects often suffer from
            fragmented reporting, slow scheduling cycles, and lack of
            portfolio-level visibility. Traditional consulting models are too
            expensive and slow for the discrete pieces of work that actually
            need outside discipline. Eliron was built to fill that gap.
          </p>
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
