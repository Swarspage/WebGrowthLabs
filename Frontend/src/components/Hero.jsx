import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 lg:py-32 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-40 left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm mb-4">
                    <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_#8359f8]"></span>
                    <span className="text-xs font-semibold tracking-wide uppercase text-gray-300">Digital Growth Agency</span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-[var(--text-bold)]">
                    Scale Your <br />
                    <span className="text-neon-gradient">Digital Presence</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-[var(--text-main)] max-w-2xl leading-relaxed">
                    We help ambitious brands grow through data-driven strategies, creative excellence, and high-performance engineering.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center pt-8">
                    <button className="w-full sm:w-auto h-14 px-8 rounded-full holographic-btn text-white font-bold text-lg shadow-glow-strong border border-white/20 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(131,89,248,0.6)]">
                        Get Started
                    </button>
                    <button className="w-full sm:w-auto h-14 px-8 rounded-full bg-transparent border border-[var(--input-border)] text-[var(--text-bold)] font-bold text-lg hover:bg-white/5 transition-all hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm">
                        View Our Work
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>

                {/* Social Proof */}
                <div className="mt-20 flex flex-col items-center gap-6 animate-fade-in">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Trusted by 200+ brands</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <div className="h-8 flex items-center font-bold text-xl text-white">
                            <span className="material-symbols-outlined mr-1">spa</span> Lotus
                        </div>
                        <div className="h-8 flex items-center font-bold text-xl text-white">
                            <span className="material-symbols-outlined mr-1">bolt</span> BoltShift
                        </div>
                        <div className="h-8 flex items-center font-bold text-xl text-white">
                            <span className="material-symbols-outlined mr-1">language</span> Global
                        </div>
                        <div className="h-8 flex items-center font-bold text-xl text-white">
                            <span className="material-symbols-outlined mr-1">change_history</span> Pyramid
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
