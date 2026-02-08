import React from 'react';

const Footer = () => {
    return (
        <footer className="relative z-10 bg-black/40 text-white pt-20 pb-10 px-6 lg:px-12 border-t border-white/10 backdrop-blur-md">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary border border-primary/30">
                            <span className="material-symbols-outlined text-xl">rocket_launch</span>
                        </div>
                        <h2 className="text-xl font-bold">WebGrowthLabs</h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Data-driven digital marketing and development for brands ready to lead their industry.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors border border-white/10">
                            <span className="material-symbols-outlined text-sm">public</span>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors border border-white/10">
                            <span className="material-symbols-outlined text-sm">mail</span>
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold mb-6 text-lg">Services</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-primary transition-colors">SEO Optimization</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Paid Advertising</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Data Analytics</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-6 text-lg">Company</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-6 text-lg">Subscribe</h3>
                    <p className="text-gray-400 text-sm mb-4">Join our newsletter for the latest growth strategies.</p>
                    <div className="flex gap-2">
                        <input type="email" placeholder="Email address" className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 h-10 text-sm text-white focus:border-primary outline-none focus:ring-1 focus:ring-primary" />
                        <button className="h-10 px-4 bg-primary rounded-lg text-white font-bold text-sm hover:bg-primary-dark transition-colors border border-white/10">
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">© 2024 WebGrowthLabs. All rights reserved.</p>
                <div className="flex gap-6 text-gray-500 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
