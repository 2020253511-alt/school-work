import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HomeIntro } from './components/HomeIntro';
import { AboutUs } from './components/AboutUs';
import { Organization } from './components/Organization';
import { InformationSystem } from './components/InformationSystem';
import { BusinessValue } from './components/BusinessValue';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';
import { StudentGuideModal } from './components/StudentGuideModal';

export default function App() {
  const [guideOpen, setGuideOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 font-sans selection:bg-indigo-500 selection:text-white antialiased transition-colors duration-300">
        
        {/* Sticky Navigation Bar with Theme Switcher */}
        <Navbar onOpenGuide={() => setGuideOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1">
          
          {/* 1. Hero Section (Home) */}
          <Hero />

          {/* 2. Academic Project Introduction & 4 Navigation Pillars */}
          <HomeIntro />

          {/* 3. About Us (Student Team Profiles, Resumes & Collaboration Matrix) */}
          <AboutUs />

          {/* 4. Organization Profile (PBL, 10 Core Services, 10 Maritime Services, Mission/Vision) */}
          <Organization />

          {/* 5. Information System (MIS, Desktop Agent Portal, Web Tools, Architecture) */}
          <InformationSystem />

          {/* 6. Strategic Business Value (Laudon 6 Objectives, Impact Matrix, Synthesis Table, Conclusion) */}
          <BusinessValue />

          {/* 7. Contact Us (UB Campus Map FIRST ABOVE Form, Client-Validated Submission) */}
          <ContactUs />

        </main>

        {/* Footer */}
        <Footer />

        {/* Step-by-Step Student & Lecturer Guide Modal */}
        <StudentGuideModal
          isOpen={guideOpen}
          onClose={() => setGuideOpen(false)}
        />

      </div>
    </ThemeProvider>
  );
}

