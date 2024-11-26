import React from 'react';
import '../style/body.css';

const App = () => {
  const technologies = [
    {
      title: "HTML",
      P: "HTML elementlarni ma'lumotlarni brauzerda ko'rsatadi",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png",
    },
    {
      title: "CSS",
      P: "Elementlarga stil berish maqsadida ishlatiladi",
      img: "https://brandlogos.net/wp-content/uploads/2014/11/CSS3-logo-vector-400x400.png",
    },
    {
      title: "JS",
      P: "Javascript veb sahifalarda interaktivlik qo'shish maqsadida ishlatiladi",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    },
    {
      title: "TS",
      P:
        "JavaScript imkoniyatlarini kengaytiruvchi dasturlash tili",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    },
    {
      title: "React",
      P:
        "React bu javascript kutubxonasi UI qismini qurish uchun mo'ljallangan",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      title: "Next JS",
      P:
        "Next.js Reactning qo'shimcha kutubxonasi bo'lib SSR va SSG uchun ishlatiladi",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    },
  ];

  return (
    <div className="my-container">
      {technologies.map((tech, index) => (
        <div className="card" key={index}>
          <img src={tech.img} alt={tech.title} className="icon" />
          <h3>{tech.title}</h3>
          <p>{tech.P}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
