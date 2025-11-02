import React from 'react';
import { PhoneIncoming, AlertTriangle, Repeat, Link2 } from 'lucide-react';

const SMSUpgrade = () => {
  return (
    <section id="sms" className="relative bg-[#05070a] text-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">SMS infrastructure upgrade</h2>
            <p className="mt-3 text-white/70 max-w-2xl">
              Switch to Twilio for reliable delivery, detailed logs, and smart retries. Reduce costs by replacing
              MMS flyers with SMS links to a web gallery.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="rounded-md bg-white/10 p-2"><PhoneIncoming className="h-5 w-5 text-teal-300" /></div>
                <p className="text-sm text-white/80">Delivery tracking with status webhooks and failure alerts.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-md bg-white/10 p-2"><Repeat className="h-5 w-5 text-cyan-300" /></div>
                <p className="text-sm text-white/80">Smart retry logic: backoff and channel fallback when needed.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-md bg-white/10 p-2"><AlertTriangle className="h-5 w-5 text-amber-300" /></div>
                <p className="text-sm text-white/80">Segment contacts: local get full invites, out‑of‑state get quarterly check‑ins.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-md bg-white/10 p-2"><Link2 className="h-5 w-5 text-indigo-300" /></div>
                <p className="text-sm text-white/80">SMS links to hosted flyer gallery for lower cost and better analytics.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-wide text-white/60">Local segment</p>
                <p className="mt-2 text-sm text-white/80">Invite → Noon reminder → 7pm gate code with unique QR.</p>
                <div className="mt-4 rounded-lg bg-gradient-to-br from-teal-400/20 to-cyan-400/10 p-4">
                  <p className="text-xs text-white/80">Preview SMS</p>
                  <p className="mt-1 text-sm font-medium">Tonight: Anomaly @ 10pm. RSVP + gate code at link →</p>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-wide text-white/60">Out‑of‑state</p>
                <p className="mt-2 text-sm text-white/80">Quarterly check‑ins keep list warm; invite only when interested.</p>
                <div className="mt-4 rounded-lg bg-gradient-to-br from-indigo-400/20 to-fuchsia-400/10 p-4">
                  <p className="text-xs text-white/80">Preview SMS</p>
                  <p className="mt-1 text-sm font-medium">Still want Anomaly updates? Reply YES and your city.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs text-white/60">Delivery KPIs</p>
              <div className="mt-2 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-semibold">98.5%</p>
                  <p className="text-xs text-white/60">Deliverability</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold"><span className="align-top text-sm">~</span>2s</p>
                  <p className="text-xs text-white/60">Time to send</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">-35%</p>
                  <p className="text-xs text-white/60">SMS spend</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMSUpgrade;
