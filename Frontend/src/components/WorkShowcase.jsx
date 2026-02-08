import React from 'react';

const WorkShowcase = () => {
    return (
        <section className="py-24 px-6 lg:px-12" id="work">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Featured Success Stories</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">See how we've helped other businesses achieve their goals.</p>
                </div>

                {/* Case Study 1 */}
                <div className="flex flex-col md:flex-row items-center gap-12 group">
                    <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl shadow-primary/5 relative h-[400px] border border-white/5">
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10"></div>
                        <div className="absolute inset-0 bg-[#2a2438]/40 z-10 mix-blend-overlay group-hover:bg-[#2a2438]/20 transition-all duration-500"></div>
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                            alt="FinTech Dashboard"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-6 items-start">
                        <span className="px-3 py-1 bg-white/5 backdrop-blur rounded-full text-xs font-bold uppercase tracking-wider text-primary border border-primary/30 shadow-[0_0_10px_rgba(131,89,248,0.3)]">FinTech</span>
                        <h3 className="text-3xl font-bold text-[var(--text-bold)]">Scaling FinTech User Acquisition by 300%</h3>
                        <p className="text-[var(--text-main)] leading-relaxed text-lg">By implementing a comprehensive SEO strategy and targeted LinkedIn ads, we helped a leading FinTech startup triple their user base in just 6 months.</p>
                        <a href="#" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all drop-shadow-[0_0_5px_rgba(131,89,248,0.8)]">
                            Read Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 group">
                    <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl shadow-primary/5 relative h-[400px] border border-white/5">
                        <div className="absolute inset-0 bg-gradient-to-tl from-black/80 to-transparent z-10"></div>
                        <div className="absolute inset-0 bg-[#2a2438]/40 z-10 mix-blend-overlay group-hover:bg-[#2a2438]/20 transition-all duration-500"></div>
                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
                            alt="Creative Agency"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-6 items-start">
                        <span className="px-3 py-1 bg-white/5 backdrop-blur rounded-full text-xs font-bold uppercase tracking-wider text-primary border border-primary/30 shadow-[0_0_10px_rgba(131,89,248,0.3)]">E-Commerce</span>
                        <h3 className="text-3xl font-bold text-[var(--text-bold)]">Revenue Growth for Lifestyle Brand</h3>
                        <p className="text-[var(--text-main)] leading-relaxed text-lg">We redesigned the user experience and optimized the checkout flow, resulting in a 45% increase in conversion rate and record-breaking holiday sales.</p>
                        <a href="#" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all drop-shadow-[0_0_5px_rgba(131,89,248,0.8)]">
                            Read Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkShowcase;
