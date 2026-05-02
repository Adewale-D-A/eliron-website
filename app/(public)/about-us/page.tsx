import { Metadata } from "next";
import metadataContent from "@/app/_assets/seo-meta-data.json";
import OurApproachAnimation from "@/app/_components/animations/our-jouney";
// import Image from "next/image";
// import principles from "@/app/_assets/principles.json";
// import Team from "@/app/_components/cards/team";
// import leadership from "@/app/_assets/team.json";

export const metadata: Metadata = metadataContent.about;

export default function AboutUs() {
  return (
    <div className="w-full flex flex-col items-center  pt-28 ">
      <h2 className="text-5xl mb-10 lg:text-7xl text-center font-bold text-transparent bg-linear-45 from-secondary via-primary to-secondary dark:from-primary dark:via-[#eda6a9] dark:to-primary bg-clip-text">
        About Us
      </h2>

      <section className="w-full problem flex justify-center" id="problem">
        <div className="w-full max-w-6xl px-5 lg:px-10">
          <div className="problem-header reveal">
            <div className="section-label">What We Fix</div>
            <h2 className="section-title text-navy">
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
              <h3>Missed calls and lost leads</h3>
              <p>
                30-40% of callers who hit voicemail never call back. They call
                the next company on Google instead.
              </p>
              <div className="pain-stat">$60K+/month walking away</div>
            </div>
            <div className="pain-card reveal">
              <div className="pain-icon">&#9203;</div>
              <h3> ⁠Slow estimates and follow-ups</h3>
              <p>
                4-8 hours per project per week on cost reports, schedule
                updates, and progress reports. For 5 projects, that's a
                full-time employee just formatting.
              </p>
              <div className="pain-stat">20-40 hrs/week wasted</div>
            </div>
            <div className="pain-card reveal">
              <div className="pain-icon">&#128269;</div>
              <h3>Time wasted on reporting</h3>
              <p>
                Your estimate takes 3 days. Your competitor quotes same-day. The
                job goes to whoever responds faster, not whoever is better.
              </p>
              <div className="pain-stat">2-5 day turnaround</div>
            </div>
            <div className="pain-card reveal">
              <div className="pain-icon">&#128172;</div>
              <h3>Poor scheduling and coordination</h3>
              <p>
                No estimate follow-up, no review requests, no check-ins. 10-20%
                of your estimates die from silence alone.
              </p>
              <div className="pain-stat">Revenue left on table</div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full process flex justify-center " id="process">
        <div className="w-full max-w-6xl border-t-orange/30 rounded-lg shadow-xs shadow-orange border-t-2 py-16 px-5 lg:px-10">
          <div className="problem-header reveal">
            <div className="section-label">How It Works</div>
            <h2 className="section-title">From Chaos to System in 30 Days</h2>
          </div>
          <div className="process-steps">
            <div className="process-step reveal">
              <div className="step-number">1</div>
              <h3>Assess</h3>
              <p>We assess your operations.</p>
            </div>
            <div className="process-step reveal">
              <div className="step-number">2</div>
              <h3>Implement</h3>
              <p>We implement systems.</p>
            </div>
            <div className="process-step reveal">
              <div className="step-number">3</div>
              <h3>Optimize</h3>
              <p>We help you run and optimize.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full results flex justify-center" id="results">
        <div className="w-full max-w-6xl px-5 lg:px-10">
          <div className="problem-header reveal">
            <div className="section-label">The Impact</div>
            <h2 className="section-title text-white">
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

      <section className="w-full proof flex justify-center">
        <div className="w-full max-w-6xl px-5 lg:px-10">
          <div className="problem-header reveal">
            <div className="section-label text-orange">By The Numbers</div>
            <h2 className="section-title text-white">
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
    </div>
  );
}
