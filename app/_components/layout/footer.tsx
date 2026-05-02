import Link from "next/link";
import { Logo } from "../logo";

export default function FooterMenu() {
  return (
    <footer className="footer flex justify-center">
      <div className="w-full max-w-6xl px-5 lg:px-10">
        <div className="footer-grid">
          <div className="footer-brand space-y-5">
            <Logo />
            <p>
              Project and program management for energy, infrastructure, and
              growth-stage companies. Houston-headquarters, US-wide delivery.
            </p>
            <div>
              <Link href="mailto:info@elironco.com">hello@elironco.com</Link>{" "}
              <br />
              <Link href="/contact-us">Book a 20-minute call</Link>
              <p>Houston, TX</p>
            </div>
          </div>
          <div className="footer-col">
            <h4 className=" text-orange">Services</h4>
            <Link href="/services/operations-audit">AI Operations Audit</Link>
            <Link href="/services/project-staffing">Project Staffing</Link>
            <Link href="/services/owners-representation">
              Owner's Representation
            </Link>
            <Link href="/services/program-recovery-audit">
              Program Recovery Audit
            </Link>
            <Link href="/services/fractional-pm">Fractional PMO</Link>
            <Link href="/services/pricing">Pricing</Link>
          </div>
          <div className="footer-col">
            <h4 className=" text-orange">Industries</h4>
            <Link href="/industries/energy-and-utilities">
              Energy & Utilities
            </Link>
            <Link href="/industries/constructions">Construction</Link>
            <Link href="/industries/trades-services">Electrical</Link>
            <Link href="/industries/trades-services">Growth-Stage</Link>
            <Link href="/industries/trades-services">Trades & Services</Link>
          </div>
          <div className="footer-col">
            <h4 className=" text-orange">Company</h4>
            <Link href="/about-us">About</Link>
            <Link href="/case-studies">Case Study</Link>
            <Link href="#">Blog</Link>
            <Link href="#">AI Playbook ($97)</Link>
            <Link href="/contact-us">Contact</Link>
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
