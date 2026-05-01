import Link from "next/link";
import { Logo } from "../logo";

export default function FooterMenu() {
  return (
    <footer className="footer flex justify-center">
      <div className="w-full max-w-6xl px-5 lg:px-10">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>
              AI-powered operations consulting for construction and trades
              businesses. We help you automate the admin work that's eating your
              margins.
            </p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <Link href="/services/operations-audit">AI Operations Audit</Link>
            <Link href="/services/project-staffing">Project Staffing</Link>
            <Link href="/services/owners-representation">
              Owner's Representation
            </Link>
            <Link href="/services/program-recovery-audit">
              Program Recovery Audit
            </Link>
            <Link href="/services/fractional-pm">Fractional PM</Link>
            <Link href="/services/pricing">Pricing</Link>
          </div>
          <div className="footer-col">
            <h4>Industries</h4>
            <Link href="/industries/constructions">Construction</Link>
            <Link href="/industries/trades-services">HVAC & Plumbing</Link>
            <Link href="/industries/trades-services">Electrical</Link>
            <Link href="/industries/trades-services">Roofing</Link>
            <Link href="/industries/trades-services">Property Mgmt</Link>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <Link href="mailto:info@elironco.com">hello@elironco.com</Link>
            <Link href="/contact-us">Free Assessment</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Elironco. All rights reserved.</p>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
