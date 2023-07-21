import Earth from '../img/earth.jpg'
import { Link } from "react-router-dom"
import { MemoryRouter } from 'react-router-dom';

function HomePage() {
  return (
    <>
        <nav>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </nav>
        <br></br>
        <br></br>
        <br></br>
        <div className="background-image">
            <img src={Earth} alt="Earth" width='1263px'></img>
            <h1 className="solarHeading">The Solar Shop</h1>
        </div>
    </>
  );
}

export default HomePage;
