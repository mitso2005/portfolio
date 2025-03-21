import React, { useEffect, useState } from "react";
import profileImg from "../assets/dimitri.webp";

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
        <section id="about" className="min-h-screen flex items-center justify-center">
            <div className="flex items-center space-x-20">
                <div className="pl-15">
                    {/* Circular Image */}
                    <img
                    src={profileImg}
                    alt="Dimitri"
                    className="w-80 h-80 rounded-full object-cover"
                    />
                </div>

                <div className="pr-15">
                    {/* Title and Subtitle */}
                    <h1 className="text-7xl font-bold mb-5 text-left">Hi, my name's Dimitri!</h1>
                    <h3 className="text-3xl font-medium mb-5 text-left">
                    I'm a student software developer and content creator.
                    </h3>
                    
                    {/* Countdown */}
                    <div className="text-1xl max-w-3xl mx-auto">
                        <p> I'm currently <span className="font-bold text-red-500">{gradCountdown.days} days, {gradCountdown.hours} hours, {gradCountdown.minutes} minutes, and {gradCountdown.seconds} seconds</span> away from graduating <br></br>with my Computer Science degree from The University of Melbourne.</p>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  export default About;