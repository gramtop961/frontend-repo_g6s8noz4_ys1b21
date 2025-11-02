import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, QrCode, Calendar, Phone } from 'lucide-react';

const HeroSpline = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="relative h-[75vh] w-full">
        <Spline
          scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />

        {/* Subtle gradient and vignette overlays that don't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_0%,rgba(0,255,214,0.18),transparent)]" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-6 md:px-10 max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur">
              <Rocket className="h-4 w-4 text-teal-300" />
              <span className="text-xs md:text-sm text-white/80">Anomaly Events • Operations Platform</span>
            </div>
            <h1 className="mt-5 text-3xl md:text-6xl font-semibold tracking-tight">
              Run the night with precision.
              <span className="block bg-gradient-to-r from-teal-200 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                Contacts, SMS, RSVPs, and Check‑in—integrated.
              </span>
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-white/70 max-w-3xl mx-auto">
              A unified control system for Anomaly and Arcane. Verify contacts by SMS, manage
              approvals, send smart notifications, and move lines fast with QR check‑ins.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#features" className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition">
                <Calendar className="h-5 w-5" /> Explore Features
              </a>
              <a href="#sms" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium hover:bg-white/15 border border-white/15 transition">
                <Phone className="h-5 w-5 text-teal-300" /> SMS Infrastructure
              </a>
              <a href="#checkin" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium hover:bg-white/15 border border-white/15 transition">
                <QrCode className="h-5 w-5 text-cyan-300" /> QR Check‑in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSpline;
