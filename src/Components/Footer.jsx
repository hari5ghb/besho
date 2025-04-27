import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="company-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>BZHO NEXUSHUB</h3>
          <p className="footer-motto">"Make a Healthy Society"</p>
          <p>Bridging local food cultures with global accessibility through nutritious and innovative food solutions.</p>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <address>
            <p>4/2, Ramanathapuram - 623704, INDIA</p>
            <p><a href="tel:+919791299248">+91 97912 99248</a></p>
            <p><a href="mailto:bzhonexushub@gmail.com">bzhonexushub@gmail.com</a></p>
          </address>
        </div>

        <div className="footer-section">
          <h4>Our Partners</h4>
          <ul className="partner-list">
            <li>Unique Educational Trust (UET)</li>
            <li>Fortified Agro Producers Confederation (FAPC)</li>
            <li>Farmer Producer Organizations (FPOs)</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our Products</h4>
          <ul className="product-list">
            <li>Turmeric Powder</li>
            <li>Pepper</li>
            <li>Honey</li>
            <li>Coffee Beans</li>
            <li>Annatto Seeds</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 BZHO NEXUSHUB (OPC) PRIVATE LIMITED. All Rights Reserved.</p>
        <p>Directly sourced from farmers - Making every square meter productive</p>
      </div>
    </footer>
  );
};

export default Footer;
