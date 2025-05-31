import React, { useEffect, useState } from "react";
import profileImg from "../assets/dimitri.webp";
import { 
    SiJavascript, SiReact, SiPython, SiTailwindcss, 
    SiHtml5, SiCss3, SiMysql 
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { TbBrandCpp } from 'react-icons/tb';

function About() {
    const [gradCountdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    
    // Set target date for your Computer Science degree completion
    const targetDate = new Date("2026-11-15T00:00:00");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const timeDiff = targetDate - now;

            // Calculate days, hours, minutes, and seconds
            const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hoursLeft = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

            setCountdown({
                days: daysLeft,
                hours: hoursLeft,
                minutes: minutesLeft,
                seconds: secondsLeft,
            });
        }, 1000);
    
        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-white py-20">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20 max-w-7xl mx-auto px-4">
                <div className="w-48 md:w-80">
                    {/* Circular Image */}
                    <img
                    src={profileImg}
                    alt="Dimitri"
                    className="w-full h-full rounded-full object-cover"
                    />
                </div>

                <div className="text-center md:text-left">
                    {/* Title and Subtitle */}
                    <h1 className="text-4xl md:text-7xl font-bold mb-3 md:mb-5">Hi, my name's Dimitri!</h1>
                    <h3 className="text-xl md:text-3xl font-medium mb-3 md:mb-5">
                    <span className="font-bold text-red-500">Software Developer · Content Creator</span>
                    </h3>
                
                    
                    {/* Countdown */}
                    <div className="text-sm md:text-base max-w-3xl mx-auto text-gray-600 mb-5">
                        <p>
                            I'm a passionate Student Software Developer and Tech Content Creator based out of Melbourne, currently <span className="font-bold text-red-500">{gradCountdown.days} days, {gradCountdown.hours} hours, {gradCountdown.minutes} minutes, and {gradCountdown.seconds} seconds</span> away from graduating with my Computer Science degree from The University of Melbourne.
                        </p>
                        <p>
                            Right now I'm working as a <span className="font-bold text-red-500">Web Developer</span> at YellaTerra.
                        </p>
                    </div>

                    {/* Skills Section - Moved and Enhanced */}
                    <div className="my-8">
                        <div className="flex gap-8 flex-wrap justify-center md:justify-start">
                            <div className="flex flex-col items-center group">
                                <SiReact className="text-4xl text-blue-400 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex flex-col items-center group">
                                <SiTailwindcss className="text-4xl text-teal-400 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex flex-col items-center group">
                                <SiJavascript className="text-4xl text-yellow-400 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex flex-col items-center group">
                                <SiPython className="text-4xl text-blue-500 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex flex-col items-center group">
                                <DiJava className="text-4xl text-red-500 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex flex-col items-center group">
                                <SiMysql className="text-4xl text-blue-400 group-hover:scale-110 transition-transform" />
                            </div>
                        </div>
                    </div>

                    {/* Resume Download Button */}
                    <div className="mt-8">
                        <a
                            href="/DimitriResume.pdf"
                            download
                            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300"
                        >
                            Download my resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;