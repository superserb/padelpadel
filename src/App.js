import { useState, useEffect } from "react";

export default function PadelPreLaunch() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [count, setCount] = useState(347);
  const [days, setDays] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date("2027-01-15T06:00:00");
    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, target - now);
      setDays({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = () => {
    if (email && email.includes("@")) {
      setSubmitted(true);
      setCount((c) => c + 1);
    }
  };

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: "#0a0a0a", color: "#f5f5f0", minHeight: "100vh", overflow: "hidden", position: "relative" }}>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Bebas+Neue&display=swap" rel="stylesheet" />

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: #E8FF00; color: #0a0a0a; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pulse { 0%, 100% { opacity: 0.08; } 50% { opacity: 0.15; } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 30px rgba(232,255,0,0.1); } 50% { box-shadow: 0 0 60px rgba(232,255,0,0.2); } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes countUp { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
        @keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(1deg); } }
        @keyframes dash { to { stroke-dashoffset: 0; } }
        .anim-1 { animation: slideUp 0.8s ease-out 0.1s both; }
        .anim-2 { animation: slideUp 0.8s ease-out 0.3s both; }
        .anim-3 { animation: slideUp 0.8s ease-out 0.5s both; }
        .anim-4 { animation: slideUp 0.8s ease-out 0.7s both; }
        .anim-5 { animation: slideUp 0.8s ease-out 0.9s both; }
        .anim-6 { animation: slideUp 0.8s ease-out 1.1s both; }
        .countdown-box { background: #111; border: 1px solid #1a1a1a; padding: 20px 8px; text-align: center; min-width: 80px; transition: border-color 0.3s; }
        .countdown-box:hover { border-color: #E8FF00; }
        .email-input { background: #111; border: 2px solid #222; color: #f5f5f0; padding: 18px 24px; font-family: 'Outfit', sans-serif; font-size: 16px; width: 100%; outline: none; transition: all 0.3s; border-radius: 0; }
        .email-input:focus { border-color: #E8FF00; box-shadow: 0 0 20px rgba(232,255,0,0.1); }
        .email-input::placeholder { color: #444; }
        .btn-cta { background: #E8FF00; color: #0a0a0a; border: none; padding: 18px 48px; font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; cursor: pointer; transition: all 0.3s; white-space: nowrap; }
        .btn-cta:hover { background: #d4eb00; transform: translateY(-2px); box-shadow: 0 8px 40px rgba(232,255,0,0.3); }
        .btn-cta:active { transform: translateY(0); }
        .success-msg { animation: countUp 0.5s ease-out both; }
        .stat-item { text-align: center; padding: 24px 16px; }
        .marquee-wrap { overflow: hidden; border-top: 1px solid #1a1a1a; border-bottom: 1px solid #1a1a1a; padding: 14px 0; }
        .marquee-inner { display: flex; gap: 60px; animation: marquee 25s linear infinite; white-space: nowrap; }
        .social-link { color: #444; font-size: 14px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; transition: color 0.3s; text-decoration: none; }
        .social-link:hover { color: #E8FF00; }
        @media (max-width: 640px) {
          .hero-title { font-size: 72px !important; }
          .countdown-row { gap: 8px !important; }
          .countdown-box { min-width: 64px !important; padding: 16px 4px !important; }
          .email-row { flex-direction: column !important; }
          .btn-cta { width: 100%; }
          .stats-row { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* Background elements */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "8%", left: "10%", width: 400, height: 400, border: "1px solid rgba(232,255,0,0.05)", borderRadius: "50%", animation: "pulse 6s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 300, height: 300, border: "1px solid rgba(232,255,0,0.04)", borderRadius: "50%", animation: "pulse 8s ease-in-out infinite 2s" }} />
        <div style={{ position: "absolute", top: "40%", right: "20%", width: 150, height: 150, border: "1px solid rgba(232,255,0,0.03)", borderRadius: "50%", animation: "float 10s ease-in-out infinite" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 20%, rgba(232,255,0,0.04) 0%, transparent 50%)" }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column" }}>

        {/* Nav */}
        <nav style={{ padding: "24px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="anim-1">
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: 4, color: "#E8FF00" }}>PADEL</span>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: "#f5f5f0" }}>.</span>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: 4, color: "#E8FF00" }}> PADEL</span>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: "#f5f5f0" }}>.</span>
          </div>
          
        </nav>

        {/* Hero */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "40px 24px 60px", maxWidth: 800, margin: "0 auto", width: "100%" }}>

          <div className="anim-2" style={{ marginBottom: 32 }}>
            <span style={{ display: "inline-block", padding: "8px 20px", border: "1px solid #E8FF00", fontSize: 11, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "#E8FF00" }}>
              Coming Soon to Las Vegas
            </span>
          </div>

          <h1 className="anim-2 hero-title" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 110, lineHeight: 0.88, letterSpacing: 6, marginBottom: 28 }}>
            <span style={{ color: "#E8FF00" }}>PADEL</span><span style={{ color: "#f5f5f0" }}>.</span><br />
            <span style={{ color: "#E8FF00" }}>PADEL</span><span style={{ color: "#f5f5f0" }}>.</span>
          </h1>

          <p className="anim-3" style={{ fontSize: 18, fontWeight: 300, color: "#777", maxWidth: 520, lineHeight: 1.8, marginBottom: 40 }}>
            Las Vegas' first indoor, self-service padel facility. 6 private, climate-controlled courts. Book online. Get your code. Walk in and play.
          </p>

          {/* Countdown */}
          <div className="anim-4 countdown-row" style={{ display: "flex", gap: 12, marginBottom: 48 }}>
            {[
              { val: days.d, label: "Days" },
              { val: days.h, label: "Hours" },
              { val: days.m, label: "Minutes" },
              { val: days.s, label: "Seconds" },
            ].map((t, i) => (
              <div key={i} className="countdown-box">
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, color: "#E8FF00", lineHeight: 1 }}>
                  {String(t.val).padStart(2, "0")}
                </div>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#444", marginTop: 8 }}>{t.label}</div>
              </div>
            ))}
          </div>

          {/* Email Signup */}
          {!submitted ? (
            <div className="anim-5" style={{ width: "100%", maxWidth: 560 }}>
              <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#555", marginBottom: 16 }}>
                Get early access + 50% off your first session
              </p>
              <div className="email-row" style={{ display: "flex", gap: 0 }}>
                <input
                  type="email"
                  className="email-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  style={{ flex: 1 }}
                />
                <button className="btn-cta" onClick={handleSubmit}>Notify Me</button>
              </div>
              <p style={{ fontSize: 12, color: "#333", marginTop: 12 }}>
                Join {count}+ others on the early access list. No spam, ever.
              </p>
            </div>
          ) : (
            <div className="success-msg" style={{ width: "100%", maxWidth: 560, padding: 32, border: "2px solid #E8FF00", background: "rgba(232,255,0,0.03)" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>
                <span style={{ color: "#E8FF00" }}>&#10003;</span>
              </div>
              <p style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>You're on the list!</p>
              <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7 }}>
                You'll be the first to know when we open and you'll get 50% off your first session. Welcome to the club.
              </p>
              <p style={{ fontSize: 13, color: "#E8FF00", marginTop: 16, fontWeight: 600 }}>
                #{count} on the early access list
              </p>
            </div>
          )}
        </main>

        {/* Marquee */}
        <div className="marquee-wrap anim-6">
          <div className="marquee-inner">
            {Array(4).fill(null).map((_, i) => (
              <span key={i} style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: 8, color: "#1a1a1a" }}>
                INDOOR PADEL &nbsp;&nbsp; LAS VEGAS &nbsp;&nbsp; SELF-SERVICE &nbsp;&nbsp; NO MEMBERSHIP &nbsp;&nbsp; 6 COURTS &nbsp;&nbsp; CLIMATE CONTROLLED &nbsp;&nbsp; OPENING 2027 &nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* Stats Strip */}
        <div className="anim-6 stats-row" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", maxWidth: 800, margin: "0 auto", width: "100%", padding: "40px 24px" }}>
          {[
            { num: "6", label: "Private Courts" },
            { num: "72°F", label: "Always" },
            { num: "$0", label: "Membership Fee" },
            { num: "16hr", label: "Daily Access" },
          ].map((s, i) => (
            <div key={i} className="stat-item">
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: "#E8FF00", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#444", marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* What is Padel mini-explainer */}
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "40px 24px 60px", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 4, textTransform: "uppercase", color: "#E8FF00", marginBottom: 16 }}>New to Padel?</p>
          <p style={{ fontSize: 16, color: "#666", lineHeight: 1.9 }}>
            Padel is the world's fastest-growing racket sport - a mix of tennis, squash, and racquetball played in doubles on an enclosed glass court. It's easy to pick up, incredibly social, and addictively fun. 92% of people who try padel come back to play again. Come find out why.
          </p>
        </div>

        {/* Footer */}
        <footer style={{ borderTop: "1px solid #111", padding: "32px 24px", textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "#333" }}>2026 Padel Padel LLC. All rights reserved. Las Vegas, NV.</p>
        </footer>
      </div>
    </div>
  );
}
