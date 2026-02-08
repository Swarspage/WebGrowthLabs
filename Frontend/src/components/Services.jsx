import React from 'react';

const Services = () => {
    const services = [
        {
            title: 'SEO Optimization',
            desc: 'Rank higher and get found by your ideal customers with technical and content SEO.',
            icon: 'search'
        },
        {
            title: 'Paid Advertising',
            desc: 'Maximize ROI with targeted ad campaigns across Google, Meta, and LinkedIn.',
            icon: 'campaign'
        },
        {
            title: 'Web Development',
            desc: 'High-performance websites built for speed, conversion, and scalability.',
            icon: 'code'
        },
        {
            title: 'Analytics & Data',
            desc: 'Data-driven insights to guide your growth and optimize every dollar spent.',
            icon: 'monitoring'
        }
    ];

    return (
        <section className="py-24 px-6 lg:px-12 relative" id="services">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Our Expertise</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-bold)]">Comprehensive Digital Solutions</h3>
                    </div>
                    <p className="text-[var(--text-main)] max-w-md">From SEO to Analytics, we provide the full-stack tools you need to succeed in a crowded market.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="group p-8 rounded-2xl card-glass hover:bg-[var(--card-hover-bg)] hover:shadow-[var(--card-shadow)] transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(131,89,248,0.3)]">
                                <span className="material-symbols-outlined text-3xl drop-shadow-[0_0_5px_rgba(131,89,248,0.8)] bg-clip-text">{service.icon}</span>
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-[var(--text-bold)]">{service.title}</h4>
                            <p className="text-[var(--text-main)] text-sm leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats Section embedded to match flow */}
            <div className="mt-20 py-20 border-y border-white/5 bg-white/5 backdrop-blur-sm">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                        <div className="p-4">
                            <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary mb-2 drop-shadow-[0_0_10px_rgba(131,89,248,0.4)]">500%</h3>
                            <p className="text-gray-400 font-medium">Average Client ROI</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary mb-2 drop-shadow-[0_0_10px_rgba(131,89,248,0.4)]">50M+</h3>
                            <p className="text-gray-400 font-medium">Audience Reach</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary mb-2 drop-shadow-[0_0_10px_rgba(131,89,248,0.4)]">98%</h3>
                            <p className="text-gray-400 font-medium">Client Retention Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
