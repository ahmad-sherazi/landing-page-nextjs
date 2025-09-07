import Image from "next/image";
import Link from "next/link";
import "../globals.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-col">
          <Image src="/logo.svg" alt="Logo" width={180} height={80} />
          <p>Connect with us</p>
          <div className="social-links">
            <Link href="#">🔗</Link>
            <Link href="#">▶️</Link>
            <Link href="#">📘</Link>
          </div>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="#">Who we are</Link></li>
            <li><Link href="#">Our people</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>What we do</h4>
          <ul>
            <li><Link href="#">Our solutions</Link></li>
            <li><Link href="#">How we work</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Subscribe to our newsletter</h4>
          <form>
            <div className="form-row">
              <input type="text" placeholder="First Name*" />
              <input type="text" placeholder="Last Name*" />
            </div>
            <input type="email" placeholder="Your Email Address*" />
            <input type="text" placeholder="Organisation Name*" />
            <label><input type="checkbox" /> Global</label>
            <label><input type="checkbox" /> Moving Through Tough Terrain (Africa)</label>
            <button type="submit">Submit →</button>
          </form>
          <p className="copyright">
            © 2025 Reos Partners. All Rights Reserved. | <Link href="#">Privacy Policy</Link> | <Link href="#">Data Collection Notice</Link>
          </p>
        </div>
      </div>
      <div className="footer-image">
        <Image src="/footerpic.svg" alt="Footer" width={1600} height={100} />
      </div>
    </footer>
  );
}
