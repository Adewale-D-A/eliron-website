import { cn } from "@/app/_utils/cn";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import metadataContent from "@/app/_assets/seo-meta-data.json";

export const metadata: Metadata = metadataContent.tradesServices;

export default function TradesServices() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <section className="hero w-full justify-center" id="hero">
        <div className="hero-grid-bg"></div>
        <div className="hero-gradient hero-gradient-1"></div>
        <div className="hero-gradient hero-gradient-2"></div>
        <div className="w-full max-w-6xl px-5 lg:px-10 hero-content">
          <p className="hero-badge">
            {" "}
            For HVAC, Electrical, Plumbing, Roofing & Property Management
          </p>
          <h1 className=" text-4xl lg:text-7xl font-bold">
            AI Playbook and Implementation for Trades & Services
            <br />
            <span className="text-orange">Trades & Services</span>
          </h1>
          <p className="hero-sub">
            Eliron helps trades and service businesses cut admin time, improve
            scheduling, and streamline customer communication. Start small with
            our $97 AI Playbook or scale up with full implementation.
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

      {/* The Challenge */}
      <section className="w-full max-w-6xl px-5 lg:px-10 border-t border-gray-200 py-16 flex flex-col lg:flex-row">
        <div className="w-full max-w-sm">
          <div className="section-label">The Challenge</div>
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
            Where the executions breaks.
          </h2>
        </div>
        <div className=" w-full mt-6 lg:mt-0 text-gray-600 space-y-5">
          <p>
            Trades businesses often face heavy admin loads, missed scheduling
            opportunities, and difficulty scaling operations without adding
            overhead. Traditional consulting is too expensive for SMBs, leaving
            owners stuck with inefficient processes. Eliron’s AI-augmented
            solutions provide affordable, practical fixes.{" "}
          </p>
        </div>
      </section>

      {/* Most relevant service */}
      <section className="serve bg-white flex justify-center  py-16 border-t border-gray-300">
        <div className="w-full max-w-6xl px-5 lg:px-10">
          <div className="problem-header text-left reveal">
            <div className="section-label">Featured Services</div>
            <h2 className="section-title text-navy">
              How we typically engage with energy & utilities clients
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                id: 1,
                title: "AI Playbook ($97)",
                description:
                  "A 30-day rollout plan with 50+ prompts and 8 SOPs. Built for trades and field services.",
                value: "$97",
                href: "/playbook",
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
