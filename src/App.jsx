import React from 'react';
import HeroSpline from './components/HeroSpline';
import FeaturesOverview from './components/FeaturesOverview';
import SMSUpgrade from './components/SMSUpgrade';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">
      <HeroSpline />
      <FeaturesOverview />
      <SMSUpgrade />
      <CallToAction />
      <footer className="border-t border-white/10 bg-black/50">
        <div className="mx-auto max-w-6xl px-6 py-8 text-xs text-white/60 flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-between">
          <p>
            Anomaly Events Management • Built for operations: contacts, SMS, RSVPs, check‑in, and analytics.
          </p>
          <p>© {new Date().getFullYear()} Anomaly • All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
