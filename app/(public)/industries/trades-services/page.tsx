import React from "react";

export default function TradesServices() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <header className="mb-12 text-center">
        <p className="text-sm uppercase tracking-wide text-orange-600">
          For HVAC, Electrical, Plumbing, Roofing & Property Management
        </p>
        <h1 className="text-4xl font-bold text-gray-900">
          AI Playbook and Implementation for Trades & Services
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Eliron helps trades and service businesses cut admin time, improve
          scheduling, and streamline customer communication. Start small with
          our $97 AI Playbook or scale up with full implementation.
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
          Trades businesses often face heavy admin loads, missed scheduling
          opportunities, and difficulty scaling operations without adding
          overhead. Traditional consulting is too expensive for SMBs, leaving
          owners stuck with inefficient processes. Eliron’s AI-augmented
          solutions provide affordable, practical fixes.
        </p>
      </section>

      {/* Featured Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">
          Featured Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <a
            href="/playbook"
            className="block border rounded-lg p-6 hover:border-orange-600 transition"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              AI Playbook ($97)
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              A 30-day rollout plan with 50+ prompts and 8 SOPs. Built for
              trades and field services.
            </p>
          </a>
          <a
            href="/services/ai-implementation"
            className="block border rounded-lg p-6 hover:border-orange-600 transition"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              AI Playbook Implementation
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Full implementation of AI-augmented systems for reporting,
              scheduling, and customer communication. 80–90% reduction in weekly
              admin work.
            </p>
          </a>
        </div>
      </section>

      {/* Case Study */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Case Study</h2>
        <p className="mt-4 text-gray-700">
          Example: An HVAC company adopted Eliron’s AI Playbook and reduced
          weekly admin time by 12 hours. Customer scheduling improved by 30%,
          and the owner was able to focus on growth instead of paperwork.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">FAQ</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
          <li>
            Is the Playbook really DIY? → Yes, it’s designed for SMB owners to
            implement without consultants.
          </li>
          <li>How long does implementation take? → Typically 4–6 weeks.</li>
          <li>
            What’s the difference between Playbook and Implementation? →
            Playbook is a guide, Implementation is hands-on delivery.
          </li>
          <li>
            Do you support multiple trades? → Yes, HVAC, plumbing, electrical,
            roofing, and property management.
          </li>
        </ul>
      </section>

      {/* Final CTA */}
      <footer className="mt-12 text-center">
        <a
          href="/contact"
          className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg shadow hover:bg-orange-700 transition"
        >
          Talk to us about Trades & Services
        </a>
      </footer>
    </div>
  );
}
