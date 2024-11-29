import React, { useState, useEffect } from 'react';
import './Styles/TypingAni.css';

const TypingEffect = () => {
    const [text, setText] = useState(''); // State to manage the displayed text
    const companyName = 'SunRaj Tour and Travels'; // The text you want to display
    const speed = 100; // Typing speed (in milliseconds)

    useEffect(() => {
        let index = 0;

        // Function to type each character
        const typeEffect = setInterval(() => {
            if (index < companyName.length) {
                setText((prev) => prev + companyName[index]);
                index++;
            } else {
                clearInterval(typeEffect); // Stop typing once the text is complete
            }
        }, speed);

        return () => clearInterval(typeEffect); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="typing-effect-container" aria-live="polite">
            <h1>{text}</h1>
            <span className="cursor">|</span>
        </div>
    );
};

export default TypingEffect;