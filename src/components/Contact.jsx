import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email-config';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.send(
                emailConfig.serviceId,
                emailConfig.contactTemplateId,
                {
                    from_email: email,
                    topic: topic,
                    message: message,
                },
                emailConfig.publicKey
            );

            setStatus('success');
            setEmail('');
            setTopic('');
            setMessage('');
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="bg-gray-100 w-full flex items-center justify-center py-12 px-4">
            <div className="max-w-3xl w-full p-8 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
                <p className="mb-6">If you're a brand looking to collaborate, please send me an email using the form below.</p>
                {status === 'success' && (
                    <div className="mb-4 text-green-600">Message sent successfully!</div>
                )}
                {status === 'error' && (
                    <div className="mb-4 text-red-600">Failed to send message. Please try again.</div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-group">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="topic" className="block text-sm font-medium text-gray-700">Topic</label>
                        <input
                            type="text"
                            id="topic"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        disabled={status === 'sending'}
                        className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
                    >
                        {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;