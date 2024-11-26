import { useState } from "react";
import "../style/last.css"
const Misollar = () => {
  const BtnData = [
    {
      title: "HTML",
      p: "HTML tili taxminan 1991—1992-yillarda Yevropa Yadroviy Tadqiqotlar Markazida ishlovchi britaniyalik mutaxassis Tim Berners-Lee tomonidan ishlab chiqilgan.",
      code: `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Bu sarlavha</title>
          </head>
          <body>
               <p>
                Erkak: <input type="radio" name="jins" >
                Ayol: <input type="radio" name="jins" >
            </p>
            <div>
                <p>Hello world!</p>
            </div>
          </body>
        </html>`,
    },
    {
      title: "CSS style",
      p: "CSS ning toʻliq shakli 1997-yil tashkil topgan boʻlib, „WWW Consorcium“da qoʻllab quvvatlangan va foydalanishga taqdim etilgan. ",
      code: `body {
          background-color: lightblue;
        }
        
        h1 {
          color: white;
          text-align: center;
        }
        
        p {
          font-family: verdana;
        }`,
    },
    {
      title: "JavaScript o'zgaruvchi",
      p: "JavaScript (talaffuzi: /ˈdʒɑːvəskrɪpt/; qisqartmasi: JS /ˈdʒeɪ.ɛs./) yuqori pogʻonali dasturlash tilidir. 1995-yilda amerikalik dasturchi Brendan Eich tomonidan yaratilgan. JavaScript tili barcha asosiy brauzerlar tomonidan ishlatiladi.",
      code: `let x = 5;
        let y = 6;
        let z = x + y;`,
    },
    {
      title: "JavaScript Funksiya",
      p: "JavaScript (talaffuzi: /ˈdʒɑːvəskrɪpt/; qisqartmasi: JS /ˈdʒeɪ.ɛs./) yuqori pogʻonali dasturlash tilidir. 1995-yilda amerikalik dasturchi Brendan Eich tomonidan yaratilgan. JavaScript tili barcha asosiy brauzerlar tomonidan ishlatiladi.",
      code: `function myFunc(theObject) {
          theObject.make = "Toyota";
        }
        
        const mycar = {
          make: "Honda",
          model: "Accord",
          year: 1998,
        };
        
        console.log(mycar.make); // "Honda"
        myFunc(mycar);
        console.log(mycar.make);`,
    },
    {
      title: "TypeScript",
      p: "TypeScript-bu JavaScript-ga asoslangan kuchli yozilgan dasturlash tili bo'lib, sizga har qanday miqyosda yaxshiroq vositalarni taqdim etadi.",
      code: `interface User {
          id: number
          firstName: string
          lastName: string
          role: string
        }
         
        function updateUser(id: number, update: Partial<User>) {
          const user = getUser(id)
          const newUser = { ...user, ...update }
          saveUser(id, newUser)
        }
         `,
    },
    {
      title: "React",
      p: "React sizga komponentlar deb nomlangan alohida qismlardan foydalanuvchi interfeyslarini yaratishga imkon beradi.",
      code: `import { useState } from 'react';
  
        export default function Counter() {
          const [count, setCount] = useState(0);
        
          function handleClick() {
            setCount(count + 1);
          }
        
          return (
            <button onClick={handleClick}>
              You pressed me {count} times
            </button>
          );
        }`,
    },
  ];

  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <>
      <h2>Misollar</h2>
      <header >
        {BtnData.map((btn, index) => (
          <button key={index} onClick={() => handleClick(index)} className="my-btn">
            {btn.title}
          </button>
        ))}
      </header>
      <div className="my-last">
        {selected ===null &&(
            <div className="my-box">
                <h3>Qaysinidur tanlang</h3>
            </div>
        )}
        {selected !== null && (
          <div className="my-box">
            <h3>{BtnData[selected].title}</h3>
            <p>{BtnData[selected].p}</p>
            <p>
              {BtnData[selected].code}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Misollar;
