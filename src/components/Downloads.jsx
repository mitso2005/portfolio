import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email-config';

const Downloads = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        console.log('Initializing EmailJS with:', emailConfig.publicKey);
        emailjs.init(emailConfig.publicKey);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        console.log('Attempting to send email to:', email);

        try {
            console.log('EmailJS config:', {
                serviceId: emailConfig.serviceId,
                templateId: emailConfig.downloadTemplateId
            });

            const result = await emailjs.send(
                emailConfig.serviceId,
                emailConfig.downloadTemplateId,
                {
                    to_email: email,
                    reply_to: email,
                    email: email, // Add this as a fallback
                    user_email: email, // Add this as a fallback
                }
            );
            
            console.log('EmailJS response:', result);

            if (result.status === 200) {
                setStatus('success');
                setEmail('');
            } else {
                throw new Error(`Failed with status: ${result.status}`);
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-black text-2xl mb-4">Start your tech job search today!</h2>
                {status === 'success' && (
                    <div className="mb-4 text-green-600">Template sent! Please check your email.</div>
                )}
                {status === 'error' && (
                    <div className="mb-4 text-red-600">Failed to send template. Please try again.</div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-black mb-2" htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded bg-white text-black"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 disabled:opacity-50"
                    >
                        {status === 'sending' ? 'Sending...' : 'Get My Free Notion Template'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Downloads;