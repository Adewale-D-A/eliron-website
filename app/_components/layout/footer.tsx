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
            <h4>Products</h4>
            <a href="/#playbook">AI Playbook</a>
            <a href="/#services">Implementation</a>
            <a href="/#services">Fractional PM</a>
          </div>
          <div className="footer-col">
            <h4>Industries</h4>
            <a href="#serve">Construction</a>
            <a href="#serve">HVAC & Plumbing</a>
            <a href="#serve">Electrical</a>
            <a href="#serve">Roofing</a>
            <a href="#serve">Property Mgmt</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:info@elironco.com">info@elironco.com</a>
            <a href="/contact-us">Free Assessment</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Elironco. All rights reserved.</p>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
