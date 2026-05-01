import React from "react";

export default function ProjectStaffing() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <header className="mb-12 text-center">
        <p className="text-sm uppercase tracking-wide text-orange-600">
          Service 04
        </p>
        <h1 className="text-4xl font-bold text-gray-900">
          Project Staffing (C2C)
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Vetted contract project managers, schedulers, and project controls
          analysts placed on your team in two weeks. Eliron is the vendor of
          record.
        </p>
        <p className="mt-2 text-md font-semibold text-gray-800">
          $90-180 / hour | Contract, contract-to-hire, or direct | Two-week
          placement
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
            Companies with capacity gaps in PM, scheduling, or project controls
          </li>
          <li>
            Owners needing to staff a project quickly without a long hiring
            cycle
          </li>
          <li>
            Mid-market and enterprise firms preferring one accountable vendor
            over multiple staffing agencies
          </li>
        </ul>
      </section>

      {/* What you get */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">What you get</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
          <li>Vetted candidate slate within seven business days</li>
          <li>
            Eliron compliance, payroll, and insurance backing (one invoice, one
            accountable partner)
          </li>
          <li>Mid-engagement performance check-ins</li>
          <li>Convert to full-time at month six with no placement fee</li>
          <li>
            Roles supported: Project Manager, Senior Project Manager, Program
            Manager, Scheduler, Project Controls Analyst, Cost Controller,
            Document Control, Construction Manager
          </li>
        </ul>
      </section>

      {/* Outcomes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">
          Outcomes you can expect
        </h2>
        <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
          <li>Rapid staffing of critical project roles</li>
          <li>Reduced administrative burden with Eliron as vendor of record</li>
          <li>Improved project continuity and delivery speed</li>
          <li>Flexibility to convert contractors to full-time hires</li>
        </ul>
      </section>

      {/* Case Study */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Case Study</h2>
        <p className="mt-4 text-gray-700">
          Example: A construction firm filled three critical project controls
          roles in under two weeks through Eliron’s C2C staffing model, avoiding
          a 4-month hiring delay and keeping a $50M program on track.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">FAQ</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
          <li>
            How quickly can candidates be placed? → Typically within two weeks.
          </li>
          <li>
            Do you handle compliance and payroll? → Yes, Eliron is vendor of
            record.
          </li>
          <li>
            Can contractors convert to full-time? → Yes, at month six with no
            placement fee.
          </li>
          <li>
            What roles are supported? → PMs, schedulers, project controls, cost
            controllers, and more.
          </li>
        </ul>
      </section>

      {/* Final CTA */}
      <footer className="mt-12 text-center">
        <a
          href="/contact"
          className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg shadow hover:bg-orange-700 transition"
        >
          Talk to us about Project Staffing
        </a>
      </footer>
    </div>
  );
}
