import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer bg-light py-5">
      <div className="container">
        <div className="row text-center"> {/* Center all content */}
          {/* Logo Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">KO-CO CAFE</h5>
            <p>Your Sweet Escape for some Coffee, Tea, and Music</p>
          </div>

          {/* Contact Information */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">HAVE QUESTIONS?</h6>
            <p>
              <FaEnvelope className="me-2" /> kococoffeeteamusic@gmail.com
            </p>
            <p>
              <FaMapMarkerAlt className="me-2" /> 68 Kisad Road, Baguio City, Philippines
            </p>
          </div>

          {/* Reservation Assistance Section */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">NEED ASSISTANCE?</h6>
            <p>
              <FaPhoneAlt className="me-2" /> 0993 024 7430
            </p>
            <div className="social-icons d-flex justify-content-center">
              <a href="https://www.tiktok.com/@kococafe?_t=8rhkMoN7MPg&_r=1" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="me-3" />
              </a>
              <a href="https://www.facebook.com/koco.coffeeteamusic/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="me-3" />
              </a>
              <a href="https://www.instagram.com/koco.coffeeteamusic?igsh=bnA1MDZiOGhqejd6" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="me-3" />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center mt-3">
          © 2024 Ko-Co Cafe | All Rights Reserved | Powered by UB Equipment System
        </p>
      </div>
    </footer>
  );
}

export default Footer;