import React, { useState, useEffect } from 'react';
import BlurText from './BlurText';
import swarImg from '../assets/swar.jpg';
import vedantImg from '../assets/vedant.jpg';

const Team = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const teamMembers = [
        {
            name: 'Swar',
            role: 'Lead Technical Architect',
            description: 'The visionary behind the code. Swar specializes in building scalable, high-performance web applications and ensuring meticulous technical execution for every project.',
            image: swarImg
        },
        {
            name: 'Vedant',
            role: 'Head of Business & Strategy',
            description: 'The deal closer. Vedant ensures smooth client partnerships, manages strategic growth, and handles all negotiation and signing with precision.',
            image: vedantImg
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % teamMembers.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 px-6 lg:px-12 relative overflow-hidden" id="about-us">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Our Team</h2>
                    <div className="text-3xl md:text-4xl font-bold text-[var(--text-bold)] flex justify-center">
                        <BlurText
                            text="Meet the Minds"
                            delay={150}
                            animateBy="words"
                            direction="top"
                        />
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full max-w-4xl mx-auto min-h-[500px] flex items-center justify-center">

                    <div className="flex flex-col md:flex-row items-center w-full gap-12 p-8 md:p-12 rounded-3xl card-glass border border-[var(--card-border)] bg-[var(--card-bg)] shadow-2xl relative overflow-hidden">

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex justify-center relative h-64 md:h-80">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                >
                                    <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20 transform hover:scale-105 transition-transform duration-700">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Text Info Section */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center relative h-64">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-in-out transform ${index === activeIndex
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 translate-x-8 pointer-events-none'
                                        }`}
                                >
                                    <h4 className="text-4xl font-extrabold text-[var(--text-bold)] mb-2">
                                        <BlurText
                                            text={member.name}
                                            delay={150}
                                            animateBy="characters"
                                            direction="top"
                                        />
                                    </h4>
                                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-6 block border-b border-primary/20 pb-2 w-fit">{member.role}</span>
                                    <p className="text-[var(--text-main)] text-lg leading-relaxed">
                                        {member.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                        {teamMembers.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-[var(--text-muted)] opacity-50'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Team;
