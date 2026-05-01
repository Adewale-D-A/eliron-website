import React from "react";

export default function ConstructionInfrastructure() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <header className="mb-12 text-center">
        <p className="text-sm uppercase tracking-wide text-orange-600">
          For Contractors, EPC Firms, and Developers
        </p>
        <h1 className="text-4xl font-bold text-gray-900">
          Project controls and PMO support, built for the way you work.
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Reporting, scheduling, and coordination across multi-project
          portfolios. AI-augmented templates compress weekly admin from hours to
          minutes.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-orange-600 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-700 transition"
        >
          Talk to us
        </a>
      </header>

      {/* Problem Statement */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">The Challenge</h2>
        <p className="mt-4 text-gray-700">
          Construction and infrastructure projects often suffer from fragmented
          reporting, slow scheduling cycles, and lack of portfolio-level
          visibility. Traditional consulting models are too expensive and slow
          for the discrete pieces of work that actually need outside discipline.
          Eliron was built to fill that gap.
        </p>
      </section>

      {/* Featured Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">
          Featured Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <a
            href="/services/fractional-pmo"
            className="block border rounded-lg p-6 hover:border-orange-600 transition"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Fractional PMO Leadership
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Senior PM embedded in your operations two to three days a week.
            </p>
          </a>
          <a
            href="/services/project-staffing"
            className="block border rounded-lg p-6 hover:border-orange-600 transition"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Project Staffing (C2C)
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Vetted contract PMs, schedulers, and project controls analysts
              placed in two weeks.
            </p>
          </a>
          <a
            href="/services/ai-implementation"
            className="block border rounded-lg p-6 hover:border-orange-600 transition"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              AI Implementation
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              AI-augmented operational systems for reporting, scheduling, and
              communication.
            </p>
          </a>
        </div>
      </section>

      {/* Case Study */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Case Study</h2>
        <p className="mt-4 text-gray-700">
          Example: An EPC firm struggling with portfolio reporting adopted
          Eliron’s AI-augmented PMO templates. Weekly reporting time dropped
          from 12 hours to 2, while executive visibility improved across 15
          concurrent projects.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">FAQ</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
          <li>
            Do you work with EPC firms? → Yes, EPCs and general contractors are
            core clients.
          </li>
          <li>How quickly can you deploy? → Typically within two weeks.</li>
          <li>
            Is AI required? → No, but AI augmentation accelerates reporting and
            scheduling.
          </li>
          <li>
            Do you support multi-project portfolios? → Yes, portfolio-level PMO
            support is a key offering.
          </li>
        </ul>
      </section>

      {/* Final CTA */}
      <footer className="mt-12 text-center">
        <a
          href="/contact"
          className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg shadow hover:bg-orange-700 transition"
        >
          Talk to us about Construction & Infrastructure
        </a>
      </footer>
    </div>
  );
}
