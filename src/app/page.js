'use client'
import {
  Container,
  Col,
  Row,
  Button
} from 'react-bootstrap';
import Header from './Header';
import { useState } from 'react'

export default function Page() {
  const checkList = [{
    name:"Precio de Bitcoin",
    url: "/btc-price",
    tag: "btc",
    price: "Gratis",
    desc: "Software práctico para saber a cuanto equivale un BTC. De consulta diaria.",
    demoOut: false
  },{
    name:"Historia Clínica",
    url: "https://historia-clinica-demo.web.app",
    tag: "hc",
    price: "$5 USD/mes",
    desc: "Software veterinario que registra historias clínicas de pacientes. Cuenta con carga de imágenes y agenda de turnos. Accedé con Google y probalo.",
    demoOut: true
  }];
  const [checked, setChecked] = useState({});
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    const filteredItem = checkList.find(item => item.tag === event.target.value);
    setChecked(filteredItem);
  };
  // Reset checked item from list
  const handleReset = (event) => {
    setChecked({});
  };
  // Return classes based on whether item is checked
  // const isChecked = (item) => checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
  <>
    <Header />

    <div id="content">
            <Container
              fluid
              id="sidebar"
              className="bg-body-secondary"
              >
              <form onReset={handleReset} >
                <b>Demos:</b>
                {checkList.map((item, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      value={item.tag}
                      id={item.tag}
                      name="gender"
                      onInput={handleCheck}
                    />
                    <label for={item.tag}>{item.name}</label>
                  </div>
                ))}
                <input type="reset" value="Reset"/>
              </form>

              {//descripción
                checked.desc &&
                <p>{checked.desc}</p>}

              {//precio
                checked.price &&
                <p>
                  <code>{checked.price}</code>
                </p>}

              {//demo out
                checked.demoOut && 
                <a
                  className="btn btn-sm dense btn-primary" 
                  href={checked.url}
                  target="_blank"
                  onClick={handleReset}
                >
                  Abrir en una nueva pestaña 🔗
                </a>}
            </Container>


          <main>
            {checked.url &&
              <iframe
                id={checked.url}
                width="100%"
                height="100%"
                src={checked.url}
              ></iframe>}

            {!checked.url &&
              <p>&nbsp;Selecciona una opción...</p>}
          </main>

    </div>
  </>
  );
}