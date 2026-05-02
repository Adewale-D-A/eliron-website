import { Check } from "lucide-react";
import Link from "next/link";

export default function FractionalPmo() {
  return (
    <div className="playbook flex justify-center flex-col items-center">
      <section className="w-full max-w-6xl px-5 lg:px-10 mt-16">
        <div className="problem-header reveal">
          <div className=" w-full flex items-start justify-between flex-col lg:flex-row gap-10">
            <div className="w-full  max-w-xl">
              <div className="section-label">The Fractional PMO </div>
              <h2 className="section-title text-dark-ash-900">
                Fractional PMO Leadership
              </h2>
              <div className=" space-y-5">
                <p className="section-sub">
                  Senior PM embedded in your operations two to three days a
                  week. The grown-up version of having someone own execution
                  without a full-time hire.
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
                  $15-25K / month
                </h4>
                <p className=" text-xs">3-12 month engagements</p>
              </div>
              <div className="w-full border-t border-gray-200 pt-5 space-y-2">
                <div className=" w-full flex justify-between gap-1.5">
                  <span>Kickoff</span>
                  <span className=" font-bold">Two-week kickoff</span>
                </div>
                <div className=" w-full flex justify-between gap-1.5">
                  <span>Duration</span>
                  <span className=" font-bold">3-12 months</span>
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
              "Growth-stage companies that closed a round in the last 6–18 months",
              "Mid-market companies with too many active projects and too few senior PMs",
              "Founders or COOs personally running PMO and want to stop",
              "Companies considering hiring a full-time COO or PMO Director but not ready to commit",
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
              "Senior US-based project and program manager assigned to your account",
              "Project intake and prioritization framework, customized to your portfolio",
              "Weekly status cadence across your leadership team",
              "Single dashboard for executive and board reporting",
              "Risk and dependency tracking",
              "Coaching for your in-house PMs and operations leaders",
              "AI-augmented documentation and reporting (compresses status work by 70%+)",
              "Quarterly executive review with maturity benchmarking",
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
                  title: "70%+",
                  description:
                    "Compression of weekly reporting and status work via AI-augmentation templates.",
                },
                {
                  id: 2,
                  title: "2-4 weeks",
                  description:
                    "Earlier surfacing of cost and schedule risks across the portfolio",
                },
                {
                  id: 3,
                  title: "8-12hrs",
                  description:
                    "Per week recovered for senior leadership previously spent on PMO admin",
                },
                {
                  id: 4,
                  title: "One Source",
                  description:
                    "Of truth or project status across the leadership team and board",
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
