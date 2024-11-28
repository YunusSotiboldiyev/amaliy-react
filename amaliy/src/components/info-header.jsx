import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import "../style/info-header-style.css";

const InfoHeader = ({ contents = ["Frontend", "Backend", "Full Stack", "React", "JavaScript"] }) => {
    const [content, setContent] = useState(contents[0]);

    const changeContent = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * contents.length);
        } while (contents[randomIndex] === content);
        setContent(contents[randomIndex]);
    };

    useEffect(() => {
        const interval = setInterval(changeContent, 3000);
        return () => clearInterval(interval); // Cleanup on unmount
    }, [content, contents]);

    return (
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="React logo" />
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

InfoHeader.propTypes = {
    contents: PropTypes.arrayOf(PropTypes.string),
};

export default InfoHeader;
