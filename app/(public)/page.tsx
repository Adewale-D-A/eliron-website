import { Metadata } from "next";
import metadataContent from "@/app/_assets/seo-meta-data.json";
import Link from "next/link";

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
          <div className="hero-badge">
            AI Implementation for Construction & Trades
          </div>
          <h1>
            Stop Losing Money to
            <br />
            <span className="text-orange">Manual Operations</span>
          </h1>
          <p className="hero-sub">
            Your team spends 20+ hours a week on reports, estimates, and
            follow-ups that AI can handle in minutes. We help construction and
            trades businesses automate the work that's eating your margins.
          </p>
          <div className="hero-ctas">
            <Link href="#playbook" className="btn btn-primary btn-arrow">
              Get the AI Playbook
            </Link>
            <Link href="#services" className="btn btn-secondary">
              Done-For-You Implementation
            </Link>
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

      <section className="problem flex justify-center" id="problem">
        <div className="w-full max-w-6xl px-5 lg:px-10">
          <div className="problem-header reveal">
            <div className="section-label">The Problem</div>
            <h2 className="section-title">
              Your Admin Work Is Killing Your Margins
            </h2>
            <p className="section-sub">
              Every hour your PM spends formatting a cost report is an hour
              they're not managing the project. Every missed call is a customer
              who calls your competitor.
            </p>
          </div>
          <div className="pain-grid">
            <div className="pain-card reveal">
              <div className="pain-icon">&#9888;</div>
              <h3>Missed Calls, Lost Revenue</h3>
              <p>
                30-40% of callers who hit voicemail never call back. They call
                the next company on Google instead.
              </p>
              <div className="pain-stat">$60K+/month walking away</div>
            </div>
            <div className="pain-card reveal">
              <div className="pain-icon">&#9203;</div>
              <h3>Reports That Take Forever</h3>
              <p>
                4-8 hours per project per week on cost reports, schedule
                updates, and progress reports. For 5 projects, that's a
                full-time employee just formatting.
              </p>
              <div className="pain-stat">20-40 hrs/week wasted</div>
            </div>
            <div className="pain-card reveal">
              <div className="pain-icon">&#128269;</div>
              <h3>Slow Estimates Lose Jobs</h3>
              <p>
                Your estimate takes 3 days. Your competitor quotes same-day. The
                job goes to whoever responds faster, not whoever is better.
              </p>
              <div className="pain-stat">2-5 day turnaround</div>
            </div>
            <div className="pain-card reveal">
              <div className="pain-icon">&#128172;</div>
              <h3>Zero Follow-Up System</h3>
              <p>
                No estimate follow-up, no review requests, no check-ins. 10-20%
                of your estimates die from silence alone.
              </p>
              <div className="pain-stat">Revenue left on table</div>
            </div>
            <div className="pain-card reveal">
              <div className="pain-icon">&#128197;</div>
              <h3>Scheduling Chaos</h3>
              <p>
                The schedule lives in the owner's head. Changes happen by text.
                Crews show up at the wrong address.
              </p>
              <div className="pain-stat">3-8 hrs/week in confusion</div>
            </div>
            <div className="pain-card reveal">
              <div className="pain-icon">&#128176;</div>
              <h3>Cash Flow Blind Spots</h3>
              <p>
                Invoices sent weeks late. No follow-up on payments. Change
                orders missed entirely. You find out you lost money at the end.
              </p>
              <div className="pain-stat">$15K-$50K+ at risk</div>
            </div>
          </div>
        </div>
      </section>

      <section className="results flex justify-center" id="results">
        <div className="w-full max-w-6xl px-5 lg:px-10">
          <div className="problem-header reveal">
            <div className="section-label">The Impact</div>
            <h2 className="section-title">
              What Changes When You Implement AI
            </h2>
            <p className="section-sub text-gray-400">
              Real-world results from construction and trades businesses using
              our implementation framework.
            </p>
          </div>
          <table className="results-table reveal">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Before AI</th>
                <th>After AI</th>
                <th>Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="metric-name">
                  Weekly reporting time (per project)
                </td>
                <td className="before-val">4-8 hours</td>
                <td className="after-val">30-60 minutes</td>
                <td className="impact-val">80-90% reduction</td>
              </tr>
              <tr>
                <td className="metric-name">Missed customer calls</td>
                <td className="before-val">15-30% of all calls</td>
                <td className="after-val">Under 2%</td>
                <td className="impact-val">Revenue recovered</td>
              </tr>
              <tr>
                <td className="metric-name">Estimate turnaround time</td>
                <td className="before-val">2-5 days</td>
                <td className="after-val">Same day</td>
                <td className="impact-val">Win rate increase</td>
              </tr>
              <tr>
                <td className="metric-name">Schedule update frequency</td>
                <td className="before-val">Monthly (if at all)</td>
                <td className="after-val">Weekly automated</td>
                <td className="impact-val">Earlier detection</td>
              </tr>
              <tr>
                <td className="metric-name">Invoice processing time</td>
                <td className="before-val">2-3 hours/week</td>
                <td className="after-val">20 minutes/week</td>
                <td className="impact-val">Faster cash flow</td>
              </tr>
              <tr>
                <td className="metric-name">Change order documentation</td>
                <td className="before-val">Often missed entirely</td>
                <td className="after-val">Captured in real time</td>
                <td className="impact-val">Revenue protected</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="playbook flex justify-center" id="playbook">
        <div className="w-full max-w-6xl px-5 lg:px-10">
          <div className="problem-header reveal">
            <div className="section-label">The Playbook</div>
            <h2 className="section-title">
              The AI Playbook for Construction & Trades
            </h2>
            <p className="section-sub">
              The complete implementation system. 8 playbooks, 50+ prompts, SOPs
              for every process. Everything you need to automate your
              operations.
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
                Stop spending 20+ hours a week on admin work. This playbook
                gives you the exact prompts, templates, and SOPs to implement AI
                across every major function in your business.
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
                    <strong>Reporting & Documentation</strong> &mdash; Cut
                    weekly reporting from 8 hours to 45 minutes
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
              <Link href="#contact" className="btn btn-primary btn-arrow">
                Get the Playbook &mdash; $97
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="serve flex justify-center" id="serve">
        <div className="w-full max-w-6xl px-5 lg:px-10">
          <div className="problem-header reveal">
            <div className="section-label">Who We Serve</div>
            <h2 className="section-title">
              Built for Construction Companies and Trades Businesses
            </h2>
          </div>
          <div className="serve-grid">
            <div className="serve-card reveal">
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
            </div>
            <div className="serve-card reveal">
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
            </div>
          </div>
        </div>
      </section>

      <section className="services flex justify-center" id="services">
        <div className="w-full max-w-6xl px-5 lg:px-10">
          <div className="problem-header reveal">
            <div className="section-label">How We Work</div>
            <h2 className="section-title">SERVICES / OFFERINGS</h2>
            <p className="section-sub">Project Controls & Delivery Playbook</p>
          </div>
          <div className="services-grid">
            <div className="service-card flex flex-col justify-between reveal">
              <div>
                <div className="service-tier">Tier 1</div>
                <h3>The Playbook</h3>
                <div className="service-price">
                  <span className="amount">$97</span>
                  <span className="period">one-time</span>
                </div>
                <p className="service-desc">Who It's For</p>
                <ul className="service-features">
                  <li>Project Managers</li>
                  <li>Project Controls Managers</li>
                  <li>PMOs and delivery practice leads</li>
                  <li>Consulting firms managing high-risk engagements</li>
                </ul>
                <p className="service-desc">What You Get</p>
                <ul className="service-features">
                  <li>Proven controls frameworks and templates</li>
                  <li>Risk and opportunity management tools</li>
                  <li>Integrated planning and execution guidance</li>
                  <li>Metrics, dashboards, and accountability models</li>
                </ul>
              </div>
              <Link href={`/contact-us?tier_id=1`} className="btn btn-outline">
                Access Now
              </Link>
            </div>
            <div className="service-card flex flex-col justify-between featured reveal">
              <div>
                <div className="service-tier">Tier 2</div>
                <h3>Advanced Editions & Expansions</h3>
                <div className="service-price">
                  <span className="amount">$2,500</span>
                  <span className="period">starting at</span>
                </div>
                <p className="service-desc">
                  Extend the Playbook with deeper content tailored to:
                </p>
                <ul className="service-features">
                  <li>Strategic risk governance</li>
                  <li>Portfolio-level delivery standards</li>
                  <li>Predictive analytics and early warning indicators</li>
                  <li>Integration with enterprise planning systems</li>
                </ul>
              </div>
              <Link href={`/contact-us?tier_id=2`} className="btn btn-primary">
                Contact sales for options
              </Link>
            </div>
            <div className="service-card flex flex-col justify-between reveal">
              <div>
                <div className="service-tier">Tier 3</div>
                <h3>Team & Firm Licensing</h3>
                <div className="service-price">
                  <span className="amount">$5,000</span>
                  <span className="period">/month</span>
                </div>
                <p className="service-desc">
                  Enterprise licence options for organisations that want:
                </p>
                <ul className="service-features">
                  <li>Multi-user access</li>
                  <li>Internal distribution rights</li>
                  <li>Customised branding options</li>
                  <li>Integration support</li>
                </ul>
              </div>
              <Link href={`/contact-us?tier_id=3`} className="btn btn-outline">
                Request pricing
              </Link>
            </div>
            <div className="service-card flex flex-col justify-between reveal">
              <div>
                <div className="service-tier">Tier 4</div>
                <h3>High-Value Advisory & Consulting Retainers</h3>
                <div className="service-price">
                  <span className="amount">$5,000</span>
                  <span className="period">/month</span>
                </div>
                <p className="service-desc">
                  For organisations facing the toughest delivery challenges,
                  Eliron offers:
                </p>
                <ul className="service-features">
                  <li>Ongoing advisory retainer support</li>
                  <li>Custom consulting engagements</li>
                  <li>
                    Project health assessments and corrective action planning
                  </li>
                  <li>Executive decision support</li>
                </ul>
              </div>
              <Link href={`/contact-us?tier_id=4`} className="btn btn-outline">
                Talk to an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="process flex justify-center">
        <div className="w-full max-w-6xl px-5 lg:px-10">
          <div className="problem-header reveal">
            <div className="section-label">How It Works</div>
            <h2 className="section-title">From Chaos to System in 30 Days</h2>
          </div>
          <div className="process-steps">
            <div className="process-step reveal">
              <div className="step-number">1</div>
              <h3>Assess</h3>
              <p>
                Take the 5-minute AI Readiness Assessment. Identify your
                highest-impact starting point.
              </p>
            </div>
            <div className="process-step reveal">
              <div className="step-number">2</div>
              <h3>Implement</h3>
              <p>
                Set up your tools, run the prompts, customize templates for your
                business. One playbook at a time.
              </p>
            </div>
            <div className="process-step reveal">
              <div className="step-number">3</div>
              <h3>Refine</h3>
              <p>
                Test on real projects. Adjust prompts based on results. Train
                your team on the new system.
              </p>
            </div>
            <div className="process-step reveal">
              <div className="step-number">4</div>
              <h3>Scale</h3>
              <p>
                Measure ROI. Add the next playbook. After 3-4 playbooks, save
                15-40 hours per week.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="proof flex justify-center">
        <div className="w-full max-w-6xl px-5 lg:px-10">
          <div className="problem-header reveal">
            <div className="section-label text-orange">By The Numbers</div>
            <h2 className="section-title">
              The Impact of AI on Construction & Trades Operations
            </h2>
          </div>
          <div className="proof-grid">
            <div className="proof-card reveal">
              <div className="proof-metric">80-90%</div>
              <div className="proof-desc">
                Reduction in weekly reporting time per project. AI handles the
                first draft, you review for 15-20 minutes.
              </div>
              <div className="proof-source">Reporting Playbook</div>
            </div>
            <div className="proof-card reveal">
              <div className="proof-metric">$24,960</div>
              <div className="proof-desc">
                Annual value of time saved when one PM recovers 8 hours per week
                from automated reporting alone.
              </div>
              <div className="proof-source">ROI Calculator</div>
            </div>
            <div className="proof-card reveal">
              <div className="proof-metric">10-20%</div>
              <div className="proof-desc">
                Of dead estimates recovered through automated follow-up
                sequences. Revenue you were leaving on the table.
              </div>
              <div className="proof-source">Communication Playbook</div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq flex justify-center" id="faq">
        <div className="w-full max-w-6xl px-5 lg:px-10">
          <div className="problem-header reveal">
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Common Questions</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <button className="faq-question">
                Do I need to be technical to use this?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>
                  No. If you can copy and paste text and fill in your business
                  details, you can use every playbook in this guide. There is no
                  coding, no programming, and no technical setup required. The
                  prompts are ready to use with free AI tools like Claude or
                  ChatGPT.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                What AI tools do I need?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>
                  Start with Claude (free or $20/month for Pro) or ChatGPT, plus
                  Google Workspace (free or $7/month). That's it. The entire
                  playbook works with these two tools. We recommend additional
                  tools as you grow, but they're optional.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                Will AI replace my team?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>
                  No. AI handles the repetitive, time-consuming parts:
                  formatting reports, drafting emails, generating first-draft
                  estimates. Your people still make the decisions, manage
                  relationships, and do the work in the field. AI makes them
                  more productive, not replaceable.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                How long does implementation take?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>
                  With the DIY playbook, plan for 30 days to fully implement
                  your first playbook. With our done-for-you implementation, we
                  have 2-4 playbooks running in your business within 2 weeks.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                What kind of businesses is this for?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>
                  Construction companies (GCs, subcontractors, EPC firms) doing
                  $2M-$500M in revenue, and trades businesses (HVAC, plumbing,
                  electrical, roofing, landscaping, property management,
                  storage) doing $500K-$20M in revenue. If you have admin work
                  eating your time, this is for you.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                What if I want you to do it all for me?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>
                  That's our Implementation Package ($2,500+) or Fractional PM
                  service ($5,000/month). We audit your operations, implement
                  the highest-impact playbooks, set up all tools, and train your
                  team. Book a free 15-minute assessment to see which option
                  fits.
                </p>
              </div>
            </div>
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
                href="/contact-us?tier_id=2"
                className="btn btn-white btn-arrow"
              >
                Get the Playbook
              </Link>
              <Link
                href="/contact-us?tier_id=2"
                className="btn btn-secondary border border-[rgba(255,255,255,0.5)] text-white"
              >
                Book Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
