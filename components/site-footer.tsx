import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <Link className="brand" href="/">Meridian Malvan</Link>
            <p>A slower way to experience the Konkan coast. Thoughtful hospitality, local discoveries, and time well spent.</p>
          </div>
          <div className="footer-links">
            <Link href="/rooms">Stay</Link>
            <Link href="/experiences">Experiences</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/location">Location</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Meridian Malvan</span>
          <span>Malvan, Maharashtra, India</span>
        </div>
      </div>
    </footer>
  );
}
