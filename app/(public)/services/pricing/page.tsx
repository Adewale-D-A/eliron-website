import { Link } from "lucide-react";

export default function Pricing() {
  return (
    <section className="services flex justify-center" id="services">
      <div className="w-full max-w-6xl px-5 lg:px-10">
        <div className="problem-header reveal">
          <div className="section-label">
            Project Controls & Delivery Playbook
          </div>
          <h2 className="section-title">How We Work With You</h2>
        </div>
        <div className="services-grid">
          <div className="service-card flex flex-col justify-between reveal">
            <div>
              <div className="service-tier">ENTRY</div>
              <h3>AI OPERATIONS AUDIT</h3>
              <div className="service-price">
                <span className="amount">$500 – $3,000. </span>
                <span className="period">one-time</span>
              </div>
              <p className="service-desc">
                We assess your current operations and identify where time,
                revenue, and efficiency are being lost.
              </p>
              <p className="service-desc">Includes:</p>
              <ul className="service-features">
                <li>Workflow analysis</li>
                <li>Bottleneck identification</li>
                <li>AI implementation roadmap</li>
              </ul>
            </div>
            <Link href={`/contact-us?tier_id=1`} className="btn btn-outline">
              Book Audit
            </Link>
          </div>
          <div className="service-card flex flex-col justify-between featured reveal">
            <div>
              <div className="service-tier">CORE</div>
              <h3>IMPLEMENTATION</h3>
              <div className="service-price">
                <span className="amount">$2,500 – $10,000.</span>
                <span className="period">starting at</span>
              </div>
              <p className="service-desc">
                We design and implement systems that automate your operations
                and improve efficiency.
              </p>
              <p className="service-desc">Includes:</p>
              <ul className="service-features">
                <li>Reporting automation</li>
                <li>Scheduling systems</li>
                <li>Communication workflows</li>
              </ul>
            </div>
            <Link href={`/contact-us?tier_id=2`} className="btn btn-primary">
              Start Implementation
            </Link>
          </div>
          <div className="service-card flex flex-col justify-between reveal">
            <div>
              <div className="service-tier">PREMIUM</div>
              <h3>FRACTIONAL PM / OPERATIONS</h3>
              <div className="service-price">
                <span className="amount">$3,000 – $15,000/month</span>
                <span className="period">/month</span>
              </div>
              <p className="service-desc">
                We embed into your business to oversee projects, optimize
                operations, and ensure consistent execution.
              </p>
              <p className="service-desc">Includes:</p>
              <ul className="service-features">
                <li>Weekly oversight</li>
                <li>Performance tracking</li>
                <li>Team coordination.</li>
              </ul>
            </div>
            <Link href={`/contact-us?tier_id=3`} className="btn btn-outline">
              Work With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
