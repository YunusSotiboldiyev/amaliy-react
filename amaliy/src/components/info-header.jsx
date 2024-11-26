import React from 'react'
import logo from '../logo.svg';
import "../style/info-header-style.css"
const InfoHeader = () => {
    const content = "Frontend";
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
  )
}

export default InfoHeader