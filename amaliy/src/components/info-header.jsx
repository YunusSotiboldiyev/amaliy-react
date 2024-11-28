import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import "../style/info-header-style.css";

const InfoHeader = () => {
    const contents = ["Frontend", "Backend", "Full Stack", "React", "JavaScript"];
    const [content, setContent] = useState(contents[0]);

    const changeContent = () => {
        const randomIndex = Math.floor(Math.random() * contents.length);
        setContent(contents[randomIndex]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            changeContent(); // Change content every 3 seconds
        }, 3000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);
  
    return (
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>🫡Salom, 🧑🏽‍💻{content}ga qiziqasizmi?</h1>
            </header>
            <div className="info-box">
                React Js darslariga hush kelibsiz!!! <br />
                Siz kursimizda bootstrapni o'rganasiz
            </div>
            <h3>Frontend uchun asosiy texnologiyalar</h3>
        </>
    );
};

export default InfoHeader;
