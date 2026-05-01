import Link from "next/link";

export default function AiPlaybook() {
  return (
    <section className="playbook flex justify-center" id="playbook">
      <div className="w-full max-w-6xl px-5 lg:px-10">
        <div className="problem-header reveal">
          <div className="section-label">The Playbook</div>
          <h2 className="section-title">
            The AI Playbook for Construction & Trades
          </h2>
          <p className="section-sub">
            The complete implementation system. 8 playbooks, 50+ prompts, SOPs
            for every process. Everything you need to automate your operations.
          </p>
        </div>
        <div className="playbook-grid">
          <div className="playbook-visual reveal">
            <div className="playbook-mockup">
              <div className="playbook-price-badge">
                <span className="price-dollar">$</span>
                <span className="price-val">97</span>
              </div>
              <div className="mockup-title-sm">The AI Playbook</div>
              <div className="mockup-title">For Construction</div>
              <div className="mockup-title-orange">& Trades</div>
              <div className="mockup-divider"></div>
              <div className="mockup-stats">
                <div className="mockup-stat-box">
                  <div className="mockup-stat-val">8</div>
                  <div className="mockup-stat-label">Playbooks</div>
                </div>
                <div className="mockup-stat-box">
                  <div className="mockup-stat-val">50+</div>
                  <div className="mockup-stat-label">Prompts</div>
                </div>
                <div className="mockup-stat-box">
                  <div className="mockup-stat-val">8</div>
                  <div className="mockup-stat-label">Full SOPs</div>
                </div>
                <div className="mockup-stat-box">
                  <div className="mockup-stat-val">30-Day</div>
                  <div className="mockup-stat-label">Plan</div>
                </div>
              </div>
            </div>
          </div>
          <div className="playbook-details reveal">
            <h3>Everything You Need to Automate Your Business Operations</h3>
            <p>
              Stop spending 20+ hours a week on admin work. This playbook gives
              you the exact prompts, templates, and SOPs to implement AI across
              every major function in your business.
            </p>
            <div className="playbook-features">
              <div className="playbook-feature">
                <div className="playbook-feature-check">
                  <svg viewBox="0 0 12 12">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <span>
                  <strong>Reporting & Documentation</strong> &mdash; Cut weekly
                  reporting from 8 hours to 45 minutes
                </span>
              </div>
              <div className="playbook-feature">
                <div className="playbook-feature-check">
                  <svg viewBox="0 0 12 12">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <span>
                  <strong>Client Communication</strong> &mdash; Automated
                  follow-up sequences that recover 10-20% of lost estimates
                </span>
              </div>
              <div className="playbook-feature">
                <div className="playbook-feature-check">
                  <svg viewBox="0 0 12 12">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <span>
                  <strong>Phone & Lead Capture</strong> &mdash; Stop losing
                  $5K-$30K/month in missed calls
                </span>
              </div>
              <div className="playbook-feature">
                <div className="playbook-feature-check">
                  <svg viewBox="0 0 12 12">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <span>
                  <strong>Estimating & Pricing</strong> &mdash; Same-day
                  estimates with professional cover letters
                </span>
              </div>
              <div className="playbook-feature">
                <div className="playbook-feature-check">
                  <svg viewBox="0 0 12 12">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <span>
                  <strong>Invoicing & Cash Flow</strong> &mdash; Automated
                  payment follow-ups and 90-day projections
                </span>
              </div>
              <div className="playbook-feature">
                <div className="playbook-feature-check">
                  <svg viewBox="0 0 12 12">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <span>
                  <strong>30-Day Implementation Plan</strong> &mdash;
                  Step-by-step, week-by-week execution roadmap
                </span>
              </div>
            </div>
            <Link
              href="/contact-us?tier_id=1"
              className="btn btn-primary btn-arrow"
            >
              Get the Playbook &mdash; $500
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
