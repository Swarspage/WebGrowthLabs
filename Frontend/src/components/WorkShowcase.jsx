import React from 'react';
import singularityImg from '../assets/Singularity.png';
import BlurText from './BlurText';

const WorkShowcase = () => {
    return (
        <section className="py-24 px-6 lg:px-12" id="work">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Selected Work</h2>
                    <div className="text-3xl md:text-4xl font-bold text-[var(--text-bold)] flex justify-center">
                        <BlurText
                            text="Featured Success Stories"
                            delay={150}
                            animateBy="words"
                            direction="top"
                        />
                    </div>
                    <p className="text-[var(--text-main)] max-w-2xl mx-auto">See how we've helped other businesses achieve their goals.</p>
                </div>

                {/* Case Study 1: Singularity */}
                <div className="flex flex-col md:flex-row items-center gap-12 group">
                    <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl shadow-primary/5 relative border border-[var(--card-border)]">
                        {/* Reduced overlays for brightness */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10 opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>

                        <img
                            src={singularityImg}
                            alt="Singularity - Space Explorer"
                            className="w-full h-auto object-contain transform group-hover:scale-105 group-hover:brightness-110 transition-all duration-700"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-6 items-start">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                            MERN Stack
                        </div>
                        <h3 className="text-4xl font-bold text-[var(--text-bold)] leading-tight">
                            <BlurText
                                text="Singularity"
                                delay={150}
                                animateBy="characters"
                                direction="top"
                            />: Gateway to the Cosmos</h3>
                        <p className="text-[var(--text-main)] leading-relaxed text-lg">
                            A high-performance full-stack web application designed for space enthusiasts.
                            Featuring a smoothened user experience, real-time mission tracking, and interactive celestial event monitoring.
                            This project demonstrates mastery of the MERN stack with complex API integrations and a premium UI.
                        </p>
                        <a href="https://space-scope-93kx.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all drop-shadow-[0_0_5px_rgba(131,89,248,0.8)]">
                            Visit Live App <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkShowcase;
