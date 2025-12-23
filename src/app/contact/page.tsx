'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ContactPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const json = await res.json() as { success?: boolean; message?: string };
            if (res.ok && json?.message) {
                setSubmitMessage(json.message);
                setFormData({ name: '', email: '', subject: '', message: '', inquiryType: 'general' });
            } else {
                setSubmitMessage(json?.message ?? 'There was an error sending your message. Please try again later.');
            }
        } catch {
            setSubmitMessage('There was an error sending your message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-20 -right-20 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                        scale: [1, 0.8, 1],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            <div className="relative w-full z-10">
                <div className='absolute top-5 left-5 md:top-10 md:left-10 opacity-20'>
                    <svg className="w-16 h-16 md:w-20 md:h-20 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </div>
                <div className='absolute top-20 right-5 md:top-32 md:right-10 opacity-15'>
                    <svg className="w-12 h-12 md:w-16 md:h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <div className='absolute top-[400px] left-10 md:top-[600px] md:left-20 opacity-10'>
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>

            <div className="relative w-full container mx-auto px-4 py-12 md:py-20 z-20">
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 60 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.div
                        className="inline-block px-6 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6 font-roboto"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        SECURE CONTACT
                    </motion.div>

                    <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 font-bebas tracking-wider">
                        GET VPN <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">SUPPORT</span>
                    </h1>

                    <motion.div
                        className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto mb-8 rounded-full"
                        initial={{ width: 0 }}
                        animate={isLoaded ? { width: 128 } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />

                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-roboto font-light leading-relaxed">
                        Need help with your VPN connection? Have questions about our security features?
                        Our privacy experts are here 24/7 to assist you with secure, encrypted support.
                    </p>

                    <motion.div
                        className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="flex items-center gap-2 text-green-400 text-sm font-roboto">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            24/7 Support
                        </div>
                        <div className="flex items-center gap-2 text-blue-400 text-sm font-roboto">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Encrypted Communication
                        </div>
                        <div className="flex items-center gap-2 text-purple-400 text-sm font-roboto">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Privacy Experts
                        </div>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
                    <motion.div
                        className="xl:col-span-1 space-y-6"
                        initial={{ opacity: 0, x: -60 }}
                        animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    >
                        <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white font-bebas tracking-wider mb-2">SECURITY SUPPORT</h3>
                                    <p className="text-blue-400 text-sm font-medium mb-3 font-roboto">Immediate Assistance</p>
                                    <p className="text-gray-300 font-roboto font-light text-sm leading-relaxed">
                                        Get instant help with VPN setup, connection issues, and security configuration from our certified experts.
                                    </p>
                                    <div className="mt-4 flex items-center gap-2 text-green-400 text-xs font-roboto">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        Available 24/7
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white font-bebas tracking-wider mb-2">SALES & BILLING</h3>
                                    <p className="text-purple-400 text-sm font-medium mb-3 font-roboto">Secure Transactions</p>
                                    <p className="text-gray-300 font-roboto font-light text-sm leading-relaxed">
                                        Questions about pricing, billing, or need help choosing the right VPN plan? Our sales team is here to help.
                                    </p>
                                    <a href="mailto:sales@fortivovpn.com" className="inline-block mt-3 text-purple-400 hover:text-purple-300 font-roboto text-sm hover:underline transition-colors">
                                        sales@fortivovpn.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white font-bebas tracking-wider mb-2">PRIVACY CONCERNS</h3>
                                    <p className="text-cyan-400 text-sm font-medium mb-3 font-roboto">Confidential Support</p>
                                    <p className="text-gray-300 font-roboto font-light text-sm leading-relaxed">
                                        Have privacy questions or security concerns? Contact our privacy advocates for confidential assistance.
                                    </p>
                                    <a href="mailto:privacy@fortivovpn.com" className="inline-block mt-3 text-cyan-400 hover:text-cyan-300 font-roboto text-sm hover:underline transition-colors">
                                        privacy@fortivovpn.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="xl:col-span-2"
                        initial={{ opacity: 0, x: 60 }}
                        animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                    >
                        <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-10 shadow-2xl">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-white font-bebas tracking-wider">
                                    SECURE MESSAGE
                                </h2>
                            </div>

                            {submitMessage && (
                                <motion.div
                                    className="mb-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 font-roboto flex items-center gap-3"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {submitMessage}
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-300 mb-2 font-roboto">
                                        Type of Inquiry
                                    </label>
                                    <select
                                        id="inquiryType"
                                        name="inquiryType"
                                        value={formData.inquiryType}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-roboto text-white"
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="technical">Technical Support</option>
                                        <option value="billing">Billing & Payment</option>
                                        <option value="privacy">Privacy Concerns</option>
                                        <option value="enterprise">Enterprise Solutions</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-roboto">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-roboto text-white placeholder-gray-400"
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-roboto">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-roboto text-white placeholder-gray-400"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 font-roboto">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-roboto text-white placeholder-gray-400"
                                        placeholder="Brief description of your inquiry"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-roboto">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical font-roboto text-white placeholder-gray-400"
                                        placeholder="Please provide detailed information about your inquiry. For technical issues, include your device type and any error messages."
                                    />
                                </div>

                                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <div>
                                            <h4 className="text-blue-400 font-medium font-roboto text-sm mb-1">Privacy Protected</h4>
                                            <p className="text-gray-300 font-roboto text-xs leading-relaxed">
                                                Your message is encrypted and protected by our zero-log policy. We never share your information with third parties.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-roboto transform hover:scale-[1.02] shadow-xl hover:shadow-blue-500/20"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending Secure Message...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l-7-7m0 0l7-7m-7 7h18" />
                                            </svg>
                                            Send Secure Message
                                        </span>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-16 md:mt-20"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-800/80 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-white font-bebas tracking-wider mb-2">LIVE CHAT</h3>
                            <p className="text-gray-400 font-roboto text-sm mb-4">Get instant help from our experts</p>
                            <button className="text-green-400 hover:text-green-300 font-roboto text-sm hover:underline">
                                Start Chat →
                            </button>
                        </div>

                        <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-800/80 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-white font-bebas tracking-wider mb-2">HELP CENTER</h3>
                            <p className="text-gray-400 font-roboto text-sm mb-4">Browse our knowledge base</p>
                            <Link href="/help" className="text-blue-400 hover:text-blue-300 font-roboto text-sm hover:underline">
                                Visit Help Center →
                            </Link>
                        </div>

                        <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-800/80 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-white font-bebas tracking-wider mb-2">MOBILE APP</h3>
                            <p className="text-gray-400 font-roboto text-sm mb-4">Download our secure VPN app</p>
                            <Link href="/download" className="text-purple-400 hover:text-purple-300 font-roboto text-sm hover:underline">
                                Get App →
                            </Link>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-300 font-roboto group"
                    >
                        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to FortivoVPN
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}