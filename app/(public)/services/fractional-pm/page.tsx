export default function FractionalPmo() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <header className="mb-12 text-center">
        <p className="text-sm uppercase tracking-wide text-orange-600">
          Service 01
        </p>
        <h1 className="text-4xl font-bold text-gray-900">
          Fractional PMO Leadership
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Senior PM embedded in your operations two to three days a week. The
          grown-up version of having someone own execution without a full-time
          hire.
        </p>
        <p className="mt-2 text-md font-semibold text-gray-800">
          $15-25K / month | 3-12 month engagements | Two-week kickoff
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-orange-600 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-700 transition"
        >
          Talk to us
        </a>
      </header>

      {/* Who this is for */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">
          Who this is for
        </h2>
        <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
          <li>
            Growth-stage companies that closed a round in the last 6–18 months
          </li>
          <li>
            Mid-market companies with too many active projects and too few
            senior PMs
          </li>
          <li>Founders or COOs personally running PMO and want to stop</li>
          <li>
            Companies considering hiring a full-time COO or PMO Director but not
            ready to commit
          </li>
        </ul>
      </section>

      {/* What you get */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">What you get</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
          <li>
            Senior US-based project and program manager assigned to your account
          </li>
          <li>
            Project intake and prioritization framework, customized to your
            portfolio
          </li>
          <li>Weekly status cadence across your leadership team</li>
          <li>Single dashboard for executive and board reporting</li>
          <li>Risk and dependency tracking</li>
          <li>Coaching for your in-house PMs and operations leaders</li>
          <li>
            AI-augmented documentation and reporting (compresses status work by
            70%+)
          </li>
          <li>Quarterly executive review with maturity benchmarking</li>
        </ul>
      </section>

      {/* Outcomes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">
          Outcomes you can expect
        </h2>
        <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
          <li>Clear prioritization of projects</li>
          <li>Reduced executive workload</li>
          <li>Improved reporting speed</li>
          <li>Higher project success rate</li>
        </ul>
      </section>

      {/* Case Study */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Case Study</h2>
        <p className="mt-4 text-gray-700">
          Example: A growth-stage SaaS firm stabilized portfolio execution after
          Series B by embedding a fractional PMO leader, reducing missed
          deadlines by 40% and improving investor confidence.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">FAQ</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
          <li>How quickly can you start? → Two-week kickoff timeline.</li>
          <li>
            Do you work onsite or remote? → Flexible, depending on client needs.
          </li>
          <li>
            What industries do you specialize in? → Energy, infrastructure,
            growth-stage companies.
          </li>
          <li>
            What happens after the engagement? → Option to extend or transition
            to full-time hire.
          </li>
        </ul>
      </section>
    </div>
  );
}
