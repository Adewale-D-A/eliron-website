import { Metadata } from "next";
import metadataContent from "@/app/_assets/seo-meta-data.json";
import Link from "next/link";
// import InfiniteScroll from "../_components/animations/image-infinite-scroll";
import { Building, MoveRight, Toolbox, TrendingUp, Zap } from "lucide-react";
import { cn } from "../_utils/cn";
export const metadata: Metadata = metadataContent.home;

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="hero w-full justify-center" id="hero">
        <div className="hero-grid-bg"></div>
        <div className="hero-gradient hero-gradient-1"></div>
        <div className="hero-gradient hero-gradient-2"></div>
        <div className="w-full max-w-6xl px-5 lg:px-10 hero-content">
          <p className="hero-badge">
            PROJECT & PROGRAM MANAGEMENT • HOUSTON TEXAS
          </p>
          <h1 className=" text-4xl lg:text-7xl font-bold">
            Execution discipline
            <br />
            for
            <span className="text-orange"> complex programs.</span>
          </h1>
          <p className="hero-sub">
            Elion delivers senior project and program management with Al-
            augmented execution for energy, infrastructure, and growth-stage
            companies. Houston-headquarters, serving clients nationally, at a
            fraction of Big 4 cost.
          </p>
          <div className="hero-ctas">
            <Link href="/contact-us" className="btn btn-primary btn-arrow">
              Talk to us
            </Link>
            <Link href="/case-studies" className="btn btn-secondary">
              See our work
            </Link>
          </div>
          {/* <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">80-90%</div>
              <div className="hero-stat-label">Reporting Time Cut</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">$5-30K</div>
              <div className="hero-stat-label">Monthly Revenue Recovered</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">50+</div>
              <div className="hero-stat-label">Ready-to-Use Prompts</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">30 Days</div>
              <div className="hero-stat-label">To Full Implementation</div>
            </div>
          </div> */}
        </div>
      </section>
      {/* <section className=" w-full my-10">
        <InfiniteScroll />
      </section> */}

      {/* Who we serve */}
      <section
        className="serve bg-white text-navy flex justify-center"
        id="serve"
      >
        <div className="w-full max-w-6xl px-5 lg:px-10">
          <div className="problem-header text-left reveal">
            <div className="section-label">Who We Serve</div>
            <h2 className="section-title">
              Pick the work you do. <br />
              Wel'll show you how we'd fit in
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                id: 1,
                icon: Zap,
                title: "Energy & Utilities",
                description:
                  "Capital project leaders, controls managers, owner's reps. Houston advantgae.",
                href: "/industries/constructions",
              },
              {
                id: 2,
                icon: Building,
                title: "Construction & Infrastructure",
                description:
                  "GCs, EPC firms, developers, owner's rep. Project controls, and PMO support",
                href: "/industries/constructions",
              },
              {
                id: 3,
                icon: TrendingUp,
                title: "Growth-Stage Companies",
                description:
                  "Post-raise founders and operations. Fractional PMO ofr the next 18 months.",
                href: "/industries/trades-services",
              },
              {
                id: 4,
                icon: Toolbox,
                title: "Trandes & Services",
                description:
                  "HVAC, electrical, plumbing, roofing, property management. AI playbook starts at $97",
                href: "/industries/trades-services",
              },
            ].map((it) => (
              <div
                key={it.id}
                className="serve-card h-full flex flex-col justify-between reveal space-y-2"
              >
                <div className=" space-y-2">
                  <it.icon className=" text-navy" />
                  <h3 className=" font-semibold">{it.title}</h3>
                  <p className=" text-gray-500">{it.description}</p>
                </div>
                <Link
                  key={it.id}
                  href={it.href}
                  className="text-orange flex items-center gap-1 font-bold"
                >
                  Explore <MoveRight className=" h-4 w-4 " />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our services */}
      <section className="serve bg-white flex justify-center" id="serve">
        <div className="w-full max-w-6xl px-5 lg:px-10">
          <div className="problem-header text-left reveal">
            <div className="section-label">Our Services</div>
            <h2 className="section-title text-navy">
              Six ways to start working with Eliron.
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
              {
                id: 4,
                title: "Project Staffing (C2C)",
                description:
                  "Vetted contract PMs, schedulers, and analyst placed in two weeks",
                value: "$90-180/hr",
                href: "/services/project-staffing",
                isPrimaryBg: true,
              },
              {
                id: 5,
                title: "AI Operations Audit",
                description:
                  "Two-week diagnostic of where ops are losing time and revenue",
                value: "$500-3k",
                href: "/services/operations-audit",
                isPrimaryBg: true,
              },
              {
                id: 6,
                title: "AI implementation",
                description:
                  "AI-augmentation systems for reporting, scheduling, and customer comm.",
                value: "$2.5K-10K/hr",
                href: "/services/fractional-pm",
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

      {/* Why Eliron */}
      <section className="serve flex justify-center bg-navy" id="serve">
        <div className="w-full max-w-6xl px-5 lg:px-10">
          <div className="problem-header text-left reveal">
            <div className="section-label">Why Eliron</div>
            <h2 className="section-title text-white">
              Senior leadership <br />
              <span className=" text-orange">Al-augmented delivery</span>
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                id: 1,
                title: "Senior leadership, embedded",
                description:
                  "Every engagement is led by a senior US-based PM or program manager with capital project and perations background. We do not put juniors in front of clients.",
              },
              {
                id: 2,
                title: "AI-augmented deivery",
                description:
                  "Our delivery team use AI to compress reporting, status andn documentation work . You get faster output and lower cost than a traditional consulting model",
              },
              {
                id: 3,
                title: "Houston roots, US delivery",
                description:
                  "Houston-headquartered with delivery support nationally. We work in the same time zone as our energy and infrastructure client. We are not Accenture or Deloitte",
              },
            ].map((it, indx) => (
              <div
                key={it.id}
                className={cn(" reveal border-t border-orange pt-8 space-y-4")}
              >
                <p className="text-xs tracking-widest font-bold text-orange italic">
                  0{indx + 1}.
                </p>
                <h3 className=" font-bold">{it.title}</h3>
                <p className=" text-gray-400">{it.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Engagements */}
      <section className="serve bg-white flex justify-center" id="serve">
        <div className="w-full max-w-6xl px-5 lg:px-10">
          <div className="problem-header text-left reveal">
            <div className="section-label">Selected Engagments</div>
            <h2 className="section-title text-navy">
              What changes when execution works.
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                id: 1,
                title: "Reportting time cut by 85%",
                description:
                  "PM reporting dropped by 6 hours to 45 minutes per project. Risk surfaced 2-4 wekks earlier",
                subTitle: "Construction Tech",
                href: "/case-studies",
              },
              {
                id: 2,
                title: "From reactive to structured",
                description:
                  "Tenant response times cut significantly. Manual coordination reduced by an estimated 40%.",
                subTitle: "Property Operations",
                href: "/case-studies",
              },
              {
                id: 3,
                title: "Recovering lost pipeline revenue",
                description:
                  "Missed cal rate dropped  to under 2%. Visible customer pipeline or the first time.",
                subTitle: "Field Service",
                href: "/case-studies",
              },
            ].map((it, indx) => (
              <div
                key={it.id}
                className={cn(
                  "serve-card reveal h-full flex flex-col justify-between  text-gray-700 space-y-1",
                )}
              >
                <div className="space-y-1">
                  <p className="  text-xs tracking-wide uppercase text-orange font-bold">
                    {it.subTitle}
                  </p>
                  <h3 className=" font-bold">{it.title}</h3>
                  <p>{it.description}</p>
                </div>
                <div className=" w-full flex items-center gap-1.5 font-bold">
                  <span className=" italic">Read the case</span>
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

      <section className=" bg-white py-16 flex justify-center w-full">
        <div className="w-full max-w-6xl px-5 py-16 lg:px-10 flex justify-between flex-col lg:flex-row gap-5 text-center lg:text-left items-center bg-orange/5 lg:rounded-2xl border border-orange">
          <div className="text-gray-700 space-y-5">
            <p className="hero-badge">
              PROJECT & PROGRAM MANAGEMENT • HOUSTON TEXAS
            </p>
            <h2 className="font-bold text-4xl">Just want the playbook?</h2>
            <p className=" max-w-xl">
              Our $97 AI Playbook gives SMB owners a 30-day rollout plan with
              50+ prompts and 8 SOPs. Built for trades and field services. No
              consultant required
            </p>
          </div>

          <Link href="/contact-us" className="btn btn-primary btn-arrow">
            Get the Playbook • $97
          </Link>
        </div>
      </section>

      {/* Next step */}
      <div className=" w-full bg-white py-16">
        <section className="serve flex justify-center bg-navy my-16">
          <div className="w-full max-w-6xl px-5 lg:px-10">
            <div className="problem-header reveal text-center space-y-7">
              <div className="section-label text-center">Next Step</div>
              <h2 className="section-title text-white">
                Twenty-minute ntro call. <br />
                <span className=" text-orange">No deck, no pitch.</span>
              </h2>
              <p className=" text-gray-200">
                Tell us where execution is breaking. We'll tell you whether we
                can help, and if not, who can.
              </p>
              <div className="w-full flex justify-center hero-ctas">
                <Link href="/contact-us" className="btn btn-primary btn-arrow">
                  Book a call
                </Link>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href={"mailto:hello@elironco.com"}
                  className="btn btn-secondary"
                >
                  Email Us Instead
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
