import CurvedLoop from './CurvedLoop';
import BlurText from './BlurText';

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
                    <span className="text-xs font-semibold tracking-wide uppercase text-[var(--text-muted)]">Digital Growth Agency</span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-[var(--text-bold)]">
                    <BlurText
                        text="Scale Your"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="inline-block mb-2"
                    />
                    <br />
                    <BlurText
                        text="Digital Presence"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="inline-block"
                        childClassName="text-neon-gradient"
                    />
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-[var(--text-main)] max-w-2xl leading-relaxed">
                    We help ambitious brands grow through data-driven strategies, creative excellence, and high-performance engineering.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center pt-8">
                    <button className="w-full sm:w-auto h-14 px-8 rounded-full bg-primary text-white font-bold text-lg shadow-glow-strong border border-primary/30 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(131,89,248,0.6)] hover:bg-primary-dark">
                        Get Started
                    </button>
                    <button className="w-full sm:w-auto h-14 px-8 rounded-full bg-transparent border border-[var(--input-border)] text-[var(--text-bold)] font-bold text-lg hover:bg-[var(--card-hover-bg)] transition-all hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm">
                        View Our Work
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>

                {/* Social Proof */}
                <div className="mt-20 mb-60 flex flex-col items-center gap-6 animate-fade-in">
                    <p className="text-sm font-medium text-[var(--text-muted)] uppercase tracking-wider">Trusted by brands</p>

                </div>
            </div>

            {/* Curved Loop Animation at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 w-full z-0 opacity-40 pointer-events-none md:pointer-events-auto select-none overflow-hidden h-[150px] md:h-auto flex items-end justify-center" style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' }}>
                <CurvedLoop
                    marqueeText="WebGrowthLabs ✦ Scale Your Digital Presence ✦"
                    speed={2}
                    curveAmount={80}
                    direction="right"
                    interactive
                    className="text-[var(--text-bold)]"
                />
            </div>
        </section>
    );
};

export default Hero;
