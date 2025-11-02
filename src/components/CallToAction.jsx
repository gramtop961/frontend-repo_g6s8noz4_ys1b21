import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="checkin" className="relative bg-black text-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(0,255,214,0.08),transparent_35%),linear-gradient(0deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03))] p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-semibold">Phase 1: Ship the foundation in weeks, not months.</h3>
              <p className="mt-3 text-white/75 max-w-2xl">
                Start with verified contacts, approvals, event flows, and a hardening of the SMS pipeline. Then layer on
                fast QR check‑in and staff coordination for showtime.
              </p>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                  'Contact registration + SMS verification',
                  'Approval queues for Anomaly / Arcane',
                  'Event creation, RSVPs, and lists',
                  'QR codes sent with gate code (7pm day‑of)',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/85">
                    <CheckCircle2 className="h-5 w-5 text-teal-300" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:justify-self-end">
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition"
              >
                View roadmap <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-3 text-xs text-white/60">Recommendation: Start cash‑only, prep infra for optional pre‑sale.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
