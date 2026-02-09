import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WorkShowcase from './components/WorkShowcase';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';
import ClickSpark from './components/ClickSpark';

// Animation variants for smooth theme transitions
const backgroundVariants = {
  initial: {
    opacity: 0,
    scale: 1.02,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1],
    }
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};

const orbVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: delay * 0.1,
      ease: [0.4, 0, 0.2, 1],
    }
  }),
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.4 }
  }
};

const LightBackground = () => (
  <motion.div
    className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    variants={backgroundVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {/* Main gradient mesh */}
    <motion.div
      className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_10%_20%,rgba(131,89,248,0.08)_0px,transparent_50%),radial-gradient(ellipse_60%_50%_at_90%_30%,rgba(255,182,193,0.1)_0px,transparent_50%),radial-gradient(ellipse_70%_60%_at_50%_90%,rgba(255,218,185,0.1)_0px,transparent_50%),radial-gradient(ellipse_50%_40%_at_80%_80%,rgba(173,216,230,0.07)_0px,transparent_50%)] animate-[mesh_25s_infinite_alternate] opacity-90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9, transition: { duration: 1 } }}
    />

    {/* Premium floating orbs */}
    <motion.div
      className="absolute top-16 left-[8%] w-40 h-40 rounded-full bg-gradient-to-br from-purple-200/60 via-purple-100/40 to-transparent shadow-[0_8px_40px_0_rgba(131,89,248,0.15)] blur-sm animate-[float_8s_ease-in-out_infinite]"
      variants={orbVariants}
      custom={1}
    />
    <motion.div
      className="absolute top-32 right-[12%] w-32 h-32 rounded-full bg-gradient-to-br from-rose-200/50 via-pink-100/30 to-transparent shadow-[0_8px_32px_0_rgba(255,182,193,0.2)] blur-sm animate-[float_7s_ease-in-out_1s_infinite]"
      variants={orbVariants}
      custom={2}
    />
    <motion.div
      className="absolute bottom-32 left-[5%] w-56 h-56 rounded-full bg-gradient-to-tr from-purple-100/50 via-indigo-100/30 to-transparent shadow-[0_12px_48px_0_rgba(131,89,248,0.12)] blur-md animate-[float_9s_ease-in-out_2s_infinite] opacity-70"
      variants={orbVariants}
      custom={3}
    />
    <motion.div
      className="absolute bottom-48 right-[8%] w-48 h-48 rounded-full bg-gradient-to-tl from-orange-100/40 via-amber-50/30 to-transparent shadow-[0_8px_36px_0_rgba(255,218,185,0.2)] blur-sm animate-[float_6s_ease-in-out_3s_infinite] opacity-80"
      variants={orbVariants}
      custom={4}
    />
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-br from-purple-50/30 via-transparent to-rose-50/20 blur-xl opacity-60"
      variants={orbVariants}
      custom={5}
    />

    {/* Small accent dots */}
    <motion.div className="absolute top-[20%] left-[30%] w-2 h-2 rounded-full bg-purple-400/30 animate-pulse" variants={orbVariants} custom={6} />
    <motion.div className="absolute top-[40%] right-[25%] w-3 h-3 rounded-full bg-rose-400/25 animate-pulse delay-500" variants={orbVariants} custom={7} />
    <motion.div className="absolute bottom-[30%] left-[60%] w-2 h-2 rounded-full bg-amber-400/30 animate-pulse delay-1000" variants={orbVariants} custom={8} />
  </motion.div>
);

const DarkBackground = () => (
  <motion.div
    className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    variants={backgroundVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {/* Main aurora gradient at bottom */}
    <motion.div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140vw] h-[70vh] rounded-t-full bg-gradient-to-t from-[#2d1b69]/60 via-[#6366f1]/30 to-transparent blur-[120px] opacity-70 animate-[mesh_25s_infinite_alternate]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 0.7, y: 0, transition: { duration: 1, ease: [0.4, 0, 0.2, 1] } }}
    />

    {/* Secondary glow layer */}
    <motion.div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] rounded-t-full bg-gradient-to-t from-[#8359f8]/40 via-[#6366f1]/20 to-transparent blur-[100px] opacity-50"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 0.5, y: 0, transition: { duration: 0.8, delay: 0.1 } }}
    />

    {/* Top corner accent glows */}
    <motion.div
      className="absolute top-0 left-0 w-[50vw] h-[40vh] bg-gradient-to-br from-[#8359f8]/15 via-transparent to-transparent blur-[80px] opacity-60"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 0.6, x: 0, transition: { duration: 0.7 } }}
    />
    <motion.div
      className="absolute top-0 right-0 w-[40vw] h-[30vh] bg-gradient-to-bl from-[#6366f1]/12 via-transparent to-transparent blur-[60px] opacity-50"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 0.5, x: 0, transition: { duration: 0.7 } }}
    />

    {/* Floating orbs */}
    <motion.div
      className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-purple-600/25 via-indigo-500/15 to-transparent blur-md animate-[float_8s_ease-in-out_infinite] shadow-[0_0_60px_rgba(131,89,248,0.3)]"
      variants={orbVariants}
      custom={1}
    />
    <motion.div
      className="absolute top-32 right-[15%] w-24 h-24 rounded-full bg-gradient-to-bl from-indigo-500/20 via-purple-400/10 to-transparent blur-md animate-[float_7s_ease-in-out_2s_infinite] shadow-[0_0_40px_rgba(99,102,241,0.25)]"
      variants={orbVariants}
      custom={2}
    />
    <motion.div
      className="absolute top-1/3 left-[5%] w-48 h-48 rounded-full bg-gradient-to-tr from-purple-700/20 via-violet-500/10 to-transparent blur-xl animate-[float_10s_ease-in-out_1s_infinite] opacity-60"
      variants={orbVariants}
      custom={3}
    />
    <motion.div
      className="absolute top-1/2 right-[8%] w-36 h-36 rounded-full bg-gradient-to-tl from-indigo-600/18 via-blue-500/8 to-transparent blur-lg animate-[float_9s_ease-in-out_3s_infinite] opacity-50"
      variants={orbVariants}
      custom={4}
    />

    {/* Small accent dots - stars effect */}
    <motion.div className="absolute top-[15%] left-[25%] w-1.5 h-1.5 rounded-full bg-purple-400/60 animate-pulse shadow-[0_0_10px_rgba(131,89,248,0.6)]" variants={orbVariants} custom={5} />
    <motion.div className="absolute top-[25%] right-[30%] w-2 h-2 rounded-full bg-indigo-400/50 animate-pulse delay-700 shadow-[0_0_12px_rgba(99,102,241,0.5)]" variants={orbVariants} custom={6} />
    <motion.div className="absolute top-[45%] left-[40%] w-1 h-1 rounded-full bg-violet-400/70 animate-pulse delay-300 shadow-[0_0_8px_rgba(139,92,246,0.7)]" variants={orbVariants} custom={7} />
    <motion.div className="absolute bottom-[35%] right-[45%] w-1.5 h-1.5 rounded-full bg-purple-300/50 animate-pulse delay-1000 shadow-[0_0_10px_rgba(131,89,248,0.5)]" variants={orbVariants} custom={8} />
    <motion.div className="absolute top-[60%] left-[20%] w-1 h-1 rounded-full bg-indigo-300/60 animate-pulse delay-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" variants={orbVariants} custom={9} />
  </motion.div>
);

const Background = () => {
  const { theme } = useTheme();

  return (
    <AnimatePresence mode="wait">
      {theme === 'light' ? (
        <LightBackground key="light-bg" />
      ) : (
        <DarkBackground key="dark-bg" />
      )}
    </AnimatePresence>
  );
};

const AppContent = () => {
  const { theme } = useTheme();

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ClickSpark
      sparkColor={theme === 'light' ? '#000' : '#fff'}
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
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
    </ClickSpark>
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