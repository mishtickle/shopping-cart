import { StateValues } from "../RouteSwitch.js";
import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom"

function Checkout(props) {

  const { 
    light, setLight, 
    radio, setRadio, 
    lamp, setLamp, 
    shower, setShower, 
    value, setValue } = React.useContext(StateValues);

  useEffect(() => {
    setValue(light*30 + radio*50 + lamp*20 + shower*20)
  }, [light, radio, lamp, shower, value])
  
  return (
      <>
          <nav>
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
          </nav>
          <br></br>
          <br></br>
          <br></br>
          <h3>Checkout:</h3>
          {light > 0 ? <p>Light <br></br>Quantity: {light} <br></br> Price: ${light * 30} <br></br> <button onClick={() => setLight(0)}>Remove</button> </p> : ''}
          {radio > 0 ? <p>Radio <br></br>Quantity: {radio} <br></br> Price: ${radio * 50} <br></br> <button onClick={() => setRadio(0)}>Remove</button></p> : ''}
          {lamp > 0 ? <p>Lamp <br></br>Quantity: {lamp} <br></br> Price: ${lamp * 20} <br></br> <button onClick={() => setLamp(0)}>Remove</button></p> : ''}
          {shower > 0 ? <p>Shower <br></br>Quantity: {shower} <br></br> Price: ${shower * 20} <br></br> <button onClick={() => setShower(0)}>Remove</button></p> : ''}
          {value == 0 ? <p>It looks like you don't have anything in your cart.  <br></br>Visit the shop for some cool products.</p> : ''}
          <br></br>
          <br></br>
          {value > 0? <><h3>Total Value: ${value}</h3></> : ''}
          {value > 0 ? <button>Pay Now</button> : ""}

          

      </>
    );
  }
  
  export default Checkout;
  