
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import OnlineBooking from './components/OnlineBooking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdvancedPhysioView from './components/AdvancedPhysioView';
import SportsPhysioView from './components/SportsPhysioView';
import ManualTherapyView from './components/ManualTherapyView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'advanced-physio' | 'sports-physio' | 'manual-therapy'>('home');

  if (currentView === 'advanced-physio') {
    return (
      <div className="min-h-screen flex flex-col">
        <AdvancedPhysioView onBack={() => setCurrentView('home')} />
        <Footer />
      </div>
    );
  }

  if (currentView === 'sports-physio') {
    return (
      <div className="min-h-screen flex flex-col">
        <SportsPhysioView onBack={() => setCurrentView('home')} />
        <Footer />
      </div>
    );
  }

  if (currentView === 'manual-therapy') {
    return (
      <div className="min-h-screen flex flex-col">
        <ManualTherapyView onBack={() => setCurrentView('home')} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Specialties 
          onLearnMore={(id) => {
            if (id === 'fisioterapia-avanzada') setCurrentView('advanced-physio');
            if (id === 'fisioterapia-deportiva') setCurrentView('sports-physio');
            if (id === 'terapia-manual') setCurrentView('manual-therapy');
          }} 
        />
        <OnlineBooking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
