import bot from "./img/bot.jpg";
import send from "./img/send.png";
import './css/App.css';
import { useState, useRef } from "react";

function App() {
  const humanMessage = useRef();
  const botmessage = useRef();
  const input = useRef();

  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "December",
  ];
  const [time, setTime] = useState(`${hours}:${seconds}`); //using the useState hook to get the data from the local time and set it to the time variable
  const [dateTime, setDateTime] = useState(
    `${days[day]}, ${months[month]} ${year}`
  ); //using the useState hook to get the data from the local date and set it to the dateTime variable

  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime === "Thursday, Aug 13 2022") {
      //if the dateTime is Thursday, 13 Aug 2022, the bot will be inactive
      isActive = false;
    }
    const status = document.querySelector(".status");
    // selecting the status class
    if (isActive === true) {
      //if the bot is active
      status.innerHTML = "Online";
      status.style.color = "green";
    } else {
      status.innerHTML = "Offline";
      status.style.color = "red";
    }
  };
  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const userMessage = document.querySelector("#message2");
    const inputRef = input.current;
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;

    let welcome = [
      "Hola|Como estas?|Buenas|Que hay",
    ];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      // if the input contains welcome words
      getBotMessage.innerText = "Escribiendo...";
      setTimeout(() => {
        getBotMessage.innerText = "Hola, que tal estas?"; // display the message
        status.innerText = "Online";
        status.style.color = "green";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let bye = ["Adios|Hasta Pronto|Mucho Gusto|Hasta Luego"];
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Escribiendo...";
      setTimeout(() => {
        getBotMessage.innerText = "Hasta Pronto, Saludos";
        inputRef.value = ""; // clear the input
      }, 2000);
      setTimeout(() => {
        status.innerText = "Offline";
        status.style.color = "red";
      }, 5000);
    }
    let thanks = [
      "Gracias|Gracias a ti|Muchas Gracias",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Escribiendo...";
      setTimeout(() => {
        getBotMessage.innerText = "De Nada";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let how = [
      "Como Estas?",
    ];
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Escribiendo...";
      setTimeout(() => {
        getBotMessage.innerText = "Estoy bien, Gracias";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let good = [
      "Eso es bueno|Suena bien|Eso suena genial|Eso suena genial|Genial|Genial|Suena genial|Eso suena bien|Bien|Bien",
    ];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Escribiendo...";
      setTimeout(() => {
        getBotMessage.innerText = "😁";
        inputRef.value = ""; // clear the input
      }, 1000);
    }

    let response = [
      "estoy bien|estoy bien|estoy bien hoy|estoy bien hoy|estoy bien|estoy genial|estoy bien|estoy genial|estoy bien|estoy bien|genial |Genial",
    ];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Escribiendo...";
      setTimeout(() => {
        getBotMessage.innerText = "Eso es Bueno";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let nameAsk = [
      "¿Cuál es tu nombre?",
    ];
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Escribiendo...";
      setTimeout(() => {
        getBotMessage.innerText = "Mi nombre es Bot";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let owner = [
      "¿Quién es el propietario?|¿Quién es el propietario?|¿Quién es el propietario de este bot?|¿Quién es el propietario de este bot? tu dueño|¿Quién es tu dueño?",
    ];
    let words9 = new RegExp(owner);
    if (words9.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Escribiendo...";
      setTimeout(() => {
        getBotMessage.innerText = "El dueño de este bot es El papi de Dennis y su equipo";
        inputRef.value = ""; // clear the input
      }, 2000);
    }


    let ageAsk = [
      "cual es tu edad|cual es tu edad|cual es tu edad|cual es tu edad|cuantos años tienes|cuantos años tienes",
    ]; //adding the age-question
    let words11 = new RegExp(ageAsk);
    if (words11.test(document.querySelector("#input").value)) {
      // if the input contains some question
      getBotMessage.innerText = "Escribiendo...";
      setTimeout(() => {
        getBotMessage.innerText = "tengo 1 año";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    getHumanMessage.innerText = inputRef.value; // display the message
  };
  return (
    <div className="App" onLoad={checkStatus}>
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src={bot} alt="" />
            </div>
            <div className="right">
              <div className="name">ChatBot</div>
              <div className="status">Online</div>
            </div>
          </div>
          <div className="main">
            <div className="main_content">
              <div className="messages">
              
                <div
                  className="bot-message"
                  id="message1"
                  ref={botmessage}
                ></div>
                <div
                  className="human-message"
                  id="message2"
                  ref={humanMessage}
                ></div>

              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
              <div className="input">
                <input
                  type="text"
                  id="input"
                  placeholder="Enter your message"
                  ref={input}
                />
              </div>
              <div className="btn">
                <button onClick={handleInput}>
                 <img src={send} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
