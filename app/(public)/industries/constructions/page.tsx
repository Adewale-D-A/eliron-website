import Link from "next/link";

export default function ConstructionInfrastructure() {
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
            For Contractors, EPC Firms, and Developers
          </div>
          <h2 className="section-title">
            {" "}
            Project controls and PMO support, built for the way you work.
          </h2>
          <p className="section-sub">
            {" "}
            Reporting, scheduling, and coordination across multi-project
            portfolios. AI-augmented templates compress weekly admin from hours
            to minutes.
          </p>
        </div>
      </section>

      <div className=" w-full bg-navy/10 flex justify-center py-24">
        <section className="max-w-6xl px-5 lg:px-10 text-center">
          <h2 className="section-title">The Challenge</h2>
          <p className="mt-4 text-gray-700">
            Construction and infrastructure projects often suffer from
            fragmented reporting, slow scheduling cycles, and lack of
            portfolio-level visibility. Traditional consulting models are too
            expensive and slow for the discrete pieces of work that actually
            need outside discipline. Eliron was built to fill that gap.
          </p>
        </section>
      </div>

      <section className="w-full max-w-6xl px-5 lg:px-10 pt-16 border-t border-gray-200">
        <h2 className="section-title">Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Link href="/services/fractional-pm" className="serve-card reveal">
            <h3 className="text-lg font-semibold text-gray-900">
              Fractional PMO Leadership
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Senior PM embedded in your operations two to three days a week.
            </p>
          </Link>
          <Link href="/services/project-staffing" className="serve-card reveal">
            <h3 className="text-lg font-semibold text-gray-900">
              Project Staffing (C2C)
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Vetted contract PMs, schedulers, and project controls analysts
              placed in two weeks.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
