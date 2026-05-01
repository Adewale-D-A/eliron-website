import React from "react";

export default function OwnersRepresentative() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <header className="mb-12 text-center">
        <p className="text-sm uppercase tracking-wide text-orange-600">
          Service 03
        </p>
        <h1 className="text-4xl font-bold text-gray-900">
          Owner's Representative Services
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Independent oversight of EPC, GC, and major vendor delivery on capital
          projects. We sit on your side of the table.
        </p>
        <p className="mt-2 text-md font-semibold text-gray-800">
          $15-30K / month | 6–18 month engagements | Three-week kickoff
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
            Utility, midstream, and renewable owners on capital projects $5M and
            above
          </li>
          <li>Owners without internal owner's rep capacity but needing one</li>
          <li>
            Industrial and infrastructure clients coordinating multiple vendors
          </li>
        </ul>
      </section>

      {/* What you get */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">What you get</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
          <li>
            Senior owner's rep on-site or remote depending on project needs
          </li>
          <li>EPC and GC performance management</li>
          <li>Independent cost and schedule oversight</li>
          <li>Risk register and change order management</li>
          <li>
            Vendor coordination across mechanical, electrical, civil, and
            instrumentation
          </li>
          <li>Monthly executive briefings and quarterly board summaries</li>
          <li>Commissioning and handover support</li>
        </ul>
      </section>

      {/* Outcomes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">
          Outcomes you can expect
        </h2>
        <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
          <li>Independent oversight that protects owner interests</li>
          <li>Improved vendor accountability and performance</li>
          <li>Reduced risk of cost overruns and schedule delays</li>
          <li>Clear reporting for executives and boards</li>
        </ul>
      </section>

      {/* Case Study */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Case Study</h2>
        <p className="mt-4 text-gray-700">
          Example: A renewable energy developer engaged Eliron as owner's rep to
          oversee EPC delivery. Independent oversight reduced change order
          disputes by 35% and ensured on-time commissioning.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">FAQ</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
          <li>
            Do you work onsite or remote? → Flexible, based on project needs.
          </li>
          <li>
            What project sizes do you support? → Typically $5M+ capital
            projects.
          </li>
          <li>
            How do you coordinate with EPCs? → Independent oversight with
            structured reporting.
          </li>
          <li>
            Can you support commissioning? → Yes, through handover and
            commissioning phases.
          </li>
        </ul>
      </section>

      {/* Final CTA */}
      <footer className="mt-12 text-center">
        <a
          href="/contact"
          className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg shadow hover:bg-orange-700 transition"
        >
          Talk to us about Owner's Representative Services
        </a>
      </footer>
    </div>
  );
}
