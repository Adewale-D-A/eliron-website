export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      {children}

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
    </div>
  );
}
