import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';


function App() {

  const [state, setState] = useState(false);
  const [contar, setContar] = useState(0);

  useEffect(() => {
    console.log("Numero de Clicks " + contar)
  }, [contar]);


  const changeState = () => {
    setState(!state)
    setContar(contar + 1)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h3>Estado: {state ? "Encendido" : "Apagado"} </h3>
        <h3>Contar: {contar} </h3>
        <Button onClick={changeState} variant="primary"> Cambiar Estado </Button>
      </header>
    </div>
  );
}

export default App;
