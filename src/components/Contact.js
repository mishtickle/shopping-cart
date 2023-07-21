import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
        </nav>
        <br></br>
        <br></br>
        <br></br>
        <div className="contactContainer">
            <h1>Contact:</h1>
            <h3>notarealemail@email.com</h3>
        </div>
    </>
  );
}

export default Contact;
