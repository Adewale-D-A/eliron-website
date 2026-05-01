import Link from "next/link";

export default function TradesServices() {
  return (
    <div
      className="playbook flex flex-col gap-10 items-center justify-center"
      id="playbook"
    >
      <section
        className="playbook w-full max-w-6xl flex flex-col justify-center pb-16 border-b border-gray-200"
        id="playbook"
      >
        <div className="problem-header reveal px-5 lg:px-10 ">
          <div className="section-label">
            For HVAC, Electrical, Plumbing, Roofing & Property Management
          </div>
          <h2 className="section-title">
            {" "}
            AI Playbook and Implementation for Trades & Services
          </h2>
          <p className="section-sub">
            Eliron helps trades and service businesses cut admin time, improve
            scheduling, and streamline customer communication. Start small with
            our $97 AI Playbook or scale up with full implementation.
          </p>
        </div>
      </section>

      <div className=" w-full bg-navy/10 flex justify-center py-24">
        <section className="max-w-6xl px-5 lg:px-10 text-center">
          <h2 className="section-title">The Challenge</h2>
          <p className="mt-4 text-gray-700">
            Trades businesses often face heavy admin loads, missed scheduling
            opportunities, and difficulty scaling operations without adding
            overhead. Traditional consulting is too expensive for SMBs, leaving
            owners stuck with inefficient processes. Eliron’s AI-augmented
            solutions provide affordable, practical fixes.
          </p>
        </section>
      </div>

      <section className="w-full max-w-6xl px-5 lg:px-10 pt-16 border-t border-gray-200">
        <h2 className="section-title">Featured Services</h2>
        <div className="grid grid-cols-1 gap-6 mt-6">
          <Link href="/playbook" className="serve-card reveal">
            <h3 className="text-lg font-semibold text-gray-900">
              AI Playbook ($97)
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              A 30-day rollout plan with 50+ prompts and 8 SOPs. Built for
              trades and field services.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
