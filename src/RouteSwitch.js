import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopPage from "./components/ShopPage";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import About from "./components/About";
import Checkout from "./components/Checkout"


export const StateValues = React.createContext();

function RouteSwitch() {
  const [ radio, setRadio ] = useState(0);
  const [ light, setLight ] = useState(0);
  const [ lamp, setLamp ] = useState(0);
  const [ shower, setShower ] = useState(0);
  const [ items, setItems ] = useState(0);
  const [ value, setValue ] = useState(0);

  const allowOnlyNumber=(value) => {
      return value.replace(/[^0-9]/g, '')
  }

  function incrementRadio(){
      setRadio(Number(radio) + Number(1));
      console.log(radio);
  }
  function decrementRadio(){
      if (radio > 0) setRadio(Number(radio) - Number(1));   
  }
  function changeRadio(event){
      setRadio(allowOnlyNumber(event.target.value))
  }

  function incrementLight(){
      setLight(Number(light) + Number(1));
  }
  function decrementLight(){
      if (light > 0) setLight(Number(light) - Number(1));   
  }
  function changeLight(event){
      setLight(allowOnlyNumber(event.target.value))
  }

  function incrementLamp(){
      setLamp(Number(lamp) + Number(1));
  }
  function decrementLamp(){
      if (lamp > 0) setLamp(Number(lamp) - Number(1));   
  }
  function changeLamp(event){
      setLamp(allowOnlyNumber(event.target.value))
  }

  function incrementShower(){
      setShower(Number(shower) + Number(1));
  }
  function decrementShower(){
      if (shower > 0) setShower(Number(shower) - Number(1));   
  }
  function changeShower(event){
      setShower(allowOnlyNumber(event.target.value))
  }

  return (
    <StateValues.Provider value = {{     
      radio, setRadio, incrementRadio, decrementRadio, changeRadio,
      light, setLight, incrementLight, decrementLight, changeLight,
      lamp, setLamp, incrementLamp, decrementLamp, changeLamp,
      shower, setShower, incrementShower, decrementShower, changeShower,
      value, setValue, items, setItems }}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={ <ShopPage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/checkout" element={ <Checkout />}></Route>
      </Routes>
      </BrowserRouter>
    </StateValues.Provider>
  );
}

export default RouteSwitch;
