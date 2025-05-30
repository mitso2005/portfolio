import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email-config';

const Downloads = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await emailjs.send(
                emailConfig.serviceId,
                emailConfig.downloadTemplateId,
                {
                    to_email: email,
                    template_link: "YOUR_NOTION_TEMPLATE_LINK"
                },
                emailConfig.publicKey
            );

            if (result.status === 200) {
                setMessage('Thank you! The template has been sent to your email.');
                setEmail('');
            } else {
                throw new Error('Failed to send template');
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setMessage('There was an error. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-black text-2xl mb-4">Start your tech job search today!</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-black mb-2" htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded bg-white text-black"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
                    >
                        Get My Free Notion Template
                    </button>
                </form>
                {message && <p className="text-black mt-4">{message}</p>}
            </div>
        </div>
    );
};

export default Downloads;