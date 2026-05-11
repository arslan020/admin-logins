import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="logo-wrap">
        <Image
          src="/business-logo.png"
          alt="Heston Automotive Logo"
          height={90}
          width={280}
          priority
          style={{ width: "auto", height: "90px" }}
        />
      </div>

      <div className="grid">
        <a
          href="https://dealers-website-two.vercel.app/login?callbackUrl=%2Fapp%2Fdashboard"
          className="btn"
        >
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l3 3" />
            <path d="M3 12h2M19 12h2M12 3v2M12 19v2" />
          </svg>
          Dealer Website
        </a>

        <a href="https://car-service-website-alpha.vercel.app/login" className="btn">
          <svg viewBox="0 0 24 24">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
          Garage Website
        </a>

        <a href="https://video.hestonautomotive.com/" className="btn">
          <svg viewBox="0 0 24 24">
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          </svg>
          Video Website
        </a>

        <a href="https://appraise.hestonautomotive.com/" className="btn">
          <svg viewBox="0 0 24 24">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
          Appraisal Website
        </a>
      </div>

      <p className="footer">&copy; 2026 Heston Automotive. All rights reserved.</p>
    </div>
  );
}
