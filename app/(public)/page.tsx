import { Metadata } from "next";
import metadataContent from "@/app/_assets/seo-meta-data.json";
import Link from "next/link";
import InfiniteScroll from "../_components/animations/image-infinite-scroll";
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
          <div className="hero-badge">Project & Program Management</div>
          <h1>
            <span className="text-orange">Cut 15–25 Hours</span> of Weekly
            <br />
            Admin Work and
            <br />
            Recover Lost Revenue <br />
            Using AI-Powered Systems.
          </h1>
          <p className="hero-sub">
            We help construction, trades, and service businesses automate
            operations, improve efficiency, and increase profitability.
          </p>
          <div className="hero-ctas">
            <Link href="/contact-us" className="btn btn-primary btn-arrow">
              Book a Free 15-Minute Assessment
            </Link>
            {/* <Link  href="#playbook" className="btn btn-secondary">
              Book a Free 15-Minute Assessment
            </Link> */}
          </div>
          <div className="hero-stats">
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
          </div>
        </div>
      </section>
      <section className=" w-full my-10">
        <InfiniteScroll />
      </section>

      <section className="serve flex justify-center" id="serve">
        <div className="w-full max-w-6xl px-5 lg:px-10">
          <div className="problem-header reveal">
            <div className="section-label">Who We Help</div>
            <h2 className="section-title">
              Built for Construction Companies and Trades Businesses
            </h2>
          </div>
          <div className="serve-grid">
            <Link
              href={"/industries/constructions"}
              className="serve-card reveal"
            >
              <div className="serve-card-label">Market A</div>
              <h3>Construction & Infrastructure</h3>
              <div className="revenue-range">$2M - $500M annual revenue</div>
              <p>
                General contractors, subcontractors, EPC firms, developers, and
                owner's reps. Your pain points: project controls, reporting,
                schedule management, change orders, and keeping multiple
                projects on track.
              </p>
              <div className="serve-industries">
                <span className="serve-tag">General Contractors</span>
                <span className="serve-tag">Subcontractors</span>
                <span className="serve-tag">EPC Firms</span>
                <span className="serve-tag">Developers</span>
                <span className="serve-tag">Owner's Reps</span>
              </div>
            </Link>
            <Link
              href={"/industries/trades-services"}
              className="serve-card reveal"
            >
              <div className="serve-card-label">Market B</div>
              <h3>Trades & Service Companies</h3>
              <div className="revenue-range">$500K - $20M annual revenue</div>
              <p>
                HVAC, plumbing, electrical, roofing, landscaping, property
                management, storage facilities, and auto shops. Your pain
                points: scheduling, customer communication, lead capture,
                invoicing, and getting organized.
              </p>
              <div className="serve-industries">
                <span className="serve-tag">HVAC</span>
                <span className="serve-tag">Plumbing</span>
                <span className="serve-tag">Electrical</span>
                <span className="serve-tag">Roofing</span>
                <span className="serve-tag">Landscaping</span>
                <span className="serve-tag">Property Mgmt</span>
                <span className="serve-tag">Storage</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section flex justify-center" id="contact">
        <div className="w-full max-w-6xl px-5 lg:px-10">
          <div className="cta-inner">
            <h2>Ready to Stop Losing Time and Money?</h2>
            <p>
              Get the AI Playbook today and start automating your operations
              this week. Or book a free assessment for done-for-you
              implementation.
            </p>
            <div className=" flex gap-4 justify-center flex-wrap">
              <Link
                href="/services/ai-playbook"
                className="btn btn-white btn-arrow"
              >
                Get the Playbook
              </Link>
              <Link
                href="/contact-us?tier_id=2"
                className="btn btn-secondary border border-[rgba(255,255,255,0.5)] text-white"
              >
                Twenty-minute intro call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
