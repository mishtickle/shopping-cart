import './shopPage.css';
import solarRadio from '../img/solarRadio.jpg'
import solarFlashLight from '../img/solarFlashLight.jpg'
import solarReadingLamp from '../img/solarReadingLamp.jpg'
import solarShower from '../img/solarShower.jpg'
import React, { useEffect } from 'react';
import { StateValues } from '../RouteSwitch.js';
import { Link } from 'react-router-dom'

function ShopPage(props) {
    const { light, radio, shower, lamp, items, value, incrementRadio, decrementRadio, changeRadio,
    incrementLight, decrementLight, changeLight,
    incrementShower, decrementShower, changeShower,
    incrementLamp, decrementLamp, changeLamp,
    setItems, setValue } = React.useContext(StateValues);

    useEffect(() => {
        setItems(Number(radio) + Number(light) + Number(lamp) + Number(shower));
        setValue(radio*50 + light*30 + lamp*20 + shower*20)
      }, [radio, light, lamp, shower])

  return (
    <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contact"> Contact</Link>
            <Link href="/about"> About</Link>
        </nav>
        <br></br>
        <br></br>
        <h1 className="shopHeading">Shop</h1>
        <div className="container">
            <div className="products">
                <div className="product1">
                    <img src={solarRadio} alt='Solar Radio' width='200px' height='200px'></img>
                    <h3>Solar Powered Radio</h3>
                    <h3>$50.00</h3>
                    <input type="text" className="radio" value={radio} onChange={changeRadio}></input>
                    <button onClick={incrementRadio}>+</button>
                    <button onClick={decrementRadio}>-</button>
                    <br></br>
                    <br></br>
                </div>
                <div className="product2">
                    <img src={solarFlashLight} alt='Solar Flash Light' width='200px' height='200px'></img>
                    <h3>Solar Powered Flash Light</h3>
                    <h3>$30.00</h3>
                    <input type="text" className="flashlight" value={light} onChange={changeLight}></input>
                    <button onClick={incrementLight}>+</button>
                    <button onClick={decrementLight}>-</button>
                    <br></br>
                    <br></br>
                </div>
                <div className="product3">
                    <img src={solarShower} alt='Solar Shower' width='200px' height='200px'></img>
                    <h3>Solar Powered Shower</h3>
                    <h3>$20.00</h3>
                    <input type="text" className="shower" value={shower} onChange={changeShower}></input>
                    <button onClick={incrementShower}>+</button>
                    <button onClick={decrementShower}>-</button>
                    <br></br>
                </div>
                <div className="product4">
                    <img src={solarReadingLamp} alt='Solar Reading Lamp' width='200px' height='200px'></img>
                    <h3>Solar Powered Reading Lamp</h3>
                    <h3>$20.00</h3>
                    <input type="text" className="lamp" value={lamp} onChange={changeLamp}></input>
                    <button onClick={incrementLamp}>+</button>
                    <button onClick={decrementLamp}>-</button>
                    <br></br>
                </div>
            </div>
            <div className="cart">
                { items > 0 ? <>
                    <h4>Cart</h4>
                    <h5>Items: {items}</h5>
                    <h5>Value: ${value}</h5>
                    <button><Link to="/checkout" className="checkout">Purchase</Link></button>
                </> : ''}
                
                
            </div>
        </div>
    </>
  );
}

export default (ShopPage);
