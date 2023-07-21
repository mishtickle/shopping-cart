import MadeNZ from '../img/madeInNewZealand.jpg'

function About() {
  return (
    <>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        </nav>
        <br></br>
        <br></br>
        <br></br>
        <div className="aboutContainer">
            <h1>About Us:</h1>
            <h3>We search far and wide for the best solar powered gadgets</h3>
            <h3>Proudly New Zealand owned and operated</h3>
            <img src={MadeNZ} alt="Made in New Zealand" height="300px"></img>
        </div>
    </>
  );
}

export default About;
