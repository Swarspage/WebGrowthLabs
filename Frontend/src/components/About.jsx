import React from 'react';
import BlurText from './BlurText';

const About = () => {
    return (
        <section className="py-24 px-6 lg:px-12 relative overflow-hidden" id="process">
            {/* BG Effect */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-2">How We Work</h2>
                    <div className="text-3xl md:text-4xl font-bold text-[var(--text-bold)] flex justify-center">
                        <BlurText
                            text="Our 3-Step Process"
                            delay={150}
                            animateBy="words"
                            direction="top"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-8 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-0 shadow-[0_0_10px_rgba(131,89,248,0.5)]"></div>

                    {/* Steps */}
                    {[
                        { num: 1, title: 'Discovery', text: 'We dive deep into your business goals, audience, and current performance to identify opportunities.' },
                        { num: 2, title: 'Strategy', text: 'We build a tailored roadmap combining creative, tech, and marketing to hit your KPIs.' },
                        { num: 3, title: 'Execution', text: 'We launch, monitor, and optimize continuously to ensure sustainable growth.' }
                    ].map((step) => (
                        <div key={step.num} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-full card-glass flex items-center justify-center text-2xl font-bold shadow-[0_0_20px_rgba(131,89,248,0.5)] mb-6 group-hover:scale-110 transition-transform group-hover:shadow-[0_0_30px_rgba(131,89,248,0.8)] text-[var(--text-bold)]">
                                {step.num}
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-[var(--text-bold)]">
                                <BlurText
                                    text={step.title}
                                    delay={150}
                                    animateBy="words"
                                    direction="top"
                                />
                            </h4>
                            <p className="text-[var(--text-main)] px-4">{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Card embedded in About Section flow as per reference (HTML structure had card-glass section next) */}
            <div className="mt-32 max-w-[1440px] mx-auto flex justify-center relative z-10 px-0">
                <div className="w-full max-w-2xl card-glass rounded-3xl p-8 md:p-12 shadow-glow-purple bg-[var(--card-bg)] border border-[var(--card-border)]">
                    <div className="text-center mb-8">
                        <div className="text-3xl font-bold mb-3 text-[var(--text-bold)] flex justify-center">
                            <BlurText
                                text="Let's Grow Together"
                                delay={150}
                                animateBy="words"
                                direction="top"
                            />
                        </div>
                        <p className="text-[var(--text-main)]">Ready to scale? Fill out the form below and we'll get back to you within 24 hours.</p>
                    </div>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[var(--text-main)]" htmlFor="name">Full Name</label>
                                <input className="w-full h-12 px-4 rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--text-bold)] focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none placeholder-gray-500 shadow-[0_0_5px_rgba(255,255,255,0.05)] focus:shadow-[0_0_10px_rgba(131,89,248,0.3)]" id="name" placeholder="John Doe" type="text" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[var(--text-main)]" htmlFor="email">Email Address</label>
                                <input className="w-full h-12 px-4 rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--text-bold)] focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none placeholder-gray-500 shadow-[0_0_5px_rgba(255,255,255,0.05)] focus:shadow-[0_0_10px_rgba(131,89,248,0.3)]" id="email" placeholder="john@company.com" type="email" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-[var(--text-main)]" htmlFor="website">Website URL</label>
                            <input className="w-full h-12 px-4 rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--text-bold)] focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none placeholder-gray-500 shadow-[0_0_5px_rgba(255,255,255,0.05)] focus:shadow-[0_0_10px_rgba(131,89,248,0.3)]" id="website" placeholder="https://company.com" type="url" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-[var(--text-main)]" htmlFor="message">Message</label>
                            <textarea className="w-full p-4 rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--text-bold)] focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none placeholder-gray-500 shadow-[0_0_5px_rgba(255,255,255,0.05)] focus:shadow-[0_0_10px_rgba(131,89,248,0.3)]" id="message" placeholder="Tell us about your project goals..." rows="4"></textarea>
                        </div>
                        <button className="w-full h-14 rounded-xl holographic-btn text-white font-bold text-lg shadow-glow-strong border border-[var(--glass-header-border)] transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(131,89,248,0.6)]" type="button">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default About;
