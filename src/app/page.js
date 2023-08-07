'use client'
import variables from './variables.modules.scss'
import { useState } from 'react'
// Logo is a Server Component
import Logo from './logo.js'

export default function Page() {
  const checkList = [{
      name:"Precio de Bitcoin",
      url: "/btc-price",
      tag: "btc",
      price: "Gratis",
      desc: "Software práctico para saber a cuanto equivale un BTC. De consulta diaria."
    }, {
      name:"Historia Clínica",
      url: "https://historia-clinica-demo.web.app",
      tag: "hc",
      price: "$5 USD/mes",
      desc: "Software veterinario que registra historias clínicas de pacientes. Cuenta con carga de imágenes y agenda de turnos. Accedé con Google y probalo."
    },
  ];
  const [checked, setChecked] = useState({});
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    const filteredItem = checkList.find(item => item.tag === event.target.value);
    setChecked(filteredItem);
  };
  // Reset checked item from list
  const handleReset = (event) => {
    setChecked({});
    event.target.reset();
  };
  // Return classes based on whether item is checked
  // const isChecked = (item) => checked.includes(item) ? "checked-item" : "not-checked-item";
  
  return (
  <div>
    <header>
      <nav>
        <Logo />
      </nav>
    </header>

    <main>
      <form onReset={handleReset} className={variables.listContainer}>
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
      {checked.desc &&
        <p>{checked.desc}</p>
      }
      {checked.price &&
        <p><code>{checked.price}</code></p>
      }
    </main>

    <section>
      {/*<pre>{JSON.stringify(checked, null, 2)}</pre>*/}
      {checked.url &&
        <iframe
          id={checked.url}
          width="100%"
          height="100%"
          src={checked.url}
        ></iframe>
      }
      {!checked.url &&
        <p>&nbsp;Selecciona una opción...</p>
      }
    </section>
  </div>
  );
}