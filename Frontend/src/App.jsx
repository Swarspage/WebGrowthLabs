import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WorkShowcase from './components/WorkShowcase';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';

const Background = () => {
  const { theme } = useTheme();

  if (theme === 'light') {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,rgba(230,224,250,0.6)_0px,transparent_50%),radial-gradient(at_100%_0%,rgba(245,230,255,0.6)_0px,transparent_50%),radial-gradient(at_100%_100%,rgba(255,255,255,0.8)_0px,transparent_50%),radial-gradient(at_0%_100%,rgba(230,224,250,0.4)_0px,transparent_50%)] blur-[60px] animate-[mesh_20s_infinite_alternate] opacity-80"></div>
        <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-linear-to-br from-white/80 to-white/20 shadow-[0_8px_32px_0_rgba(131,89,248,0.1)] blur-sm animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-40 right-[10%] w-48 h-48 rounded-full bg-linear-to-br from-white/80 to-white/20 shadow-[0_8px_32px_0_rgba(131,89,248,0.1)] blur-sm animate-[float_6s_ease-in-out_3s_infinite] opacity-80"></div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] rounded-t-full bg-gradient-to-t from-[#46556e]/50 via-[#6366f1]/40 to-transparent blur-[100px] opacity-60"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] rounded-t-full bg-[#b5b8d0]/30 blur-[80px] opacity-40 mix-blend-screen"></div>
    </div>
  );
};

const AppContent = () => {
  return (
    <div className="bg-mist-theme text-[var(--text-main)] overflow-x-hidden min-h-screen relative font-display transition-colors duration-500">
      <Background />
      <Navbar />
      <main className="relative z-10 pt-20">
        <Hero />
        <Services />
        <WorkShowcase />

        <About />
        <Team />
        <Footer />
      </main>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;