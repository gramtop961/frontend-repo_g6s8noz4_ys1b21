import React from 'react';
import { Users, Shield, QrCode, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Contact Management',
    desc:
      'Collect names, phones, emails, and headshots. SMS verification, referral tracking, and city/state for frequency management.',
    bullets: [
      'Separate approvals for Anomaly / Arcane',
      'Personalized invite links to track referrals',
      'Segment local vs out‑of‑state',
    ],
  },
  {
    icon: Shield,
    title: 'Event Control',
    desc:
      'Create events with flyers, dates, gate codes, and RSVP states. Manage member lists, not‑this‑time, and check‑in views.',
    bullets: ['RSVP: yes / not this time / no response', 'Attendance history per contact', 'Gate code automation'],
  },
  {
    icon: QrCode,
    title: 'Check‑in Tablet',
    desc:
      '7pm day‑of QR codes. Scan → lookup → confirm with photo → collect payment. Door, locker, method, and wristband tracking.',
    bullets: ['Door fee and locker add‑on', 'Cash or optional digital methods', 'Fast identity confirmation'],
  },
  {
    icon: BarChart3,
    title: 'Analytics Ready',
    desc:
      'Attendance percentages, popular nights, and reconciliation groundwork for inventory and payouts in later phases.',
    bullets: ['Show‑up rate per contact', 'List views for members and not‑this‑time', 'Foundation for bar + finance'],
  },
];

const FeaturesOverview = () => {
  return (
    <section id="features" className="relative bg-gradient-to-b from-black to-[#05070a] text-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Phase 1 foundation</h2>
          <p className="mt-3 text-white/70">
            Build the core: contacts with SMS verification, robust event workflows, and a reliable notification
            pipeline. Everything else stacks on top.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 md:p-7 hover:bg-white/[0.05] transition">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-white/10 p-3">
                  <f.icon className="h-6 w-6 text-teal-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{f.desc}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-white/75 list-disc pl-5">
                    {f.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
