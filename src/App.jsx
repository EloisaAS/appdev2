import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Importing Link from react-scroll for smooth scrolling
import { useState } from 'react';
import Home from './components/Home.jsx';
import Menu1 from './components/Menu1.jsx';
import Gallery from './components/Gallery.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Checkout from './components/Checkout.jsx';
import Footer from './components/Footer.jsx';
import Cart from './components/Cart.jsx';
import BreakfastReservation from './components/Reservation.jsx';

function App() {
  const [cart, setCart] = useState([]);

  // Function to update cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-custom shadow-sm">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-start">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <ScrollLink className="nav-link" to="home" smooth={true} duration={500}>
                    Home
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink className="nav-link" to="menu" smooth={true} duration={500}>
                    Menu
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink className="nav-link" to="gallery" smooth={true} duration={500}>
                    Gallery
                  </ScrollLink>
                </li>
              </ul>
            </div>

            <Link to="/" className="navbar-brand">
              <img
                src="src/images/logo.png"
                alt="Ko-Co Cafe Logo"
                className="logo"
              />
            </Link>

            <div className="d-flex justify-content-end align-items-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <ScrollLink className="nav-link" to="aboutus" smooth={true} duration={500}>
                    About us
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink className="nav-link" to="contact" smooth={true} duration={500}>
                    Contact
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink className="btn btn-light ms-3" to="reservation" smooth={true} duration={500}>
                    Book A Table
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <button className="btn btn-outline-dark ms-3">
                      <i className="fas fa-shopping-cart"></i> ({cart.length})
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/menu1" element={<Menu1 addToCart={addToCart} />} />
          <Route path="/reservation" element={<BreakfastReservation />} /> 
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
        </Routes>

        {/* Scrollable sections for the rest of the pages */}
        <div id="home">
          <Home />
        </div>

        <div id="menu">
          <Menu1 />
        </div>

        <div id="gallery">
          <Gallery />
        </div>
        
        <div id="reservation">
          <BreakfastReservation />
        </div>

        <div id="aboutus">
          <About />
        </div>

        <div id="contact">
          <Contact />
        </div>

        {/* Footer - This will always be visible unless you want to hide it on specific pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
