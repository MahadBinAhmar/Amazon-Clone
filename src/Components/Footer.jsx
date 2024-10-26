// src/Components/Footer.js

import React from 'react';
import './Footer.css';
import adsPrivacyImage from '../Assets/ads.png'; // Ensure this path is correct

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div>
          <h4>Amazon Music</h4>
          <p>Stream millions of songs</p>
        </div>
        <div>
          <h4>Amazon Ads</h4>
          <p>Reach customers wherever they spend their time</p>
        </div>
        <div>
          <h4>6pm</h4>
          <p>Score deals on fashion brands</p>
        </div>
        <div>
          <h4>AbeBooks</h4>
          <p>Books, art & collectibles</p>
        </div>
        <div>
          <h4>ACX</h4>
          <p>Audiobook Publishing Made Easy</p>
        </div>
        <div>
          <h4>Sell on Amazon</h4>
          <p>Start a Selling Account</p>
        </div>
        <div>
          <h4>Veepo</h4>
          <p>Shipping Software Inventory Management</p>
        </div>
        <div>
          <h4>Amazon Business</h4>
          <p>Everything For Your Business</p>
        </div>
        <div>
          <h4>AmazonGlobal</h4>
          <p>Ship Orders Internationally</p>
        </div>
        <div>
          <h4>Home Services</h4>
          <p>Experienced Pros Happiness Guarantee</p>
        </div>
        <div>
          <h4>Amazon Web Services</h4>
          <p>Scalable Cloud Computing Services</p>
        </div>
        <div>
          <h4>IMDb</h4>
          <p>Movies, TV & Celebrities</p>
        </div>
        <div>
          <h4>IMDbPro</h4>
          <p>Get Info Entertainment Professionals Need</p>
        </div>
        <div>
          <h4>Kindle Direct Publishing</h4>
          <p>Indie Digital & Print Publishing Made Easy</p>
        </div>
        <div>
          <h4>Prime Video Direct</h4>
          <p>Video Distribution Made Easy</p>
        </div>
        <div>
          <h4>Ring</h4>
          <p>Smart Home Security Systems</p>
        </div>
        <div>
          <h4>eero WiFi</h4>
          <p>Stream 4K Video in Every Room</p>
        </div>
        <div>
          <h4>Blink</h4>
          <p>Smart Security for Every Home</p>
        </div>
        <div>
          <h4>Neighbors App</h4>
          <p>Real-Time Crime & Safety Alerts</p>
        </div>
        <div>
          <h4>Amazon Subscription Boxes</h4>
          <p>Top subscription boxes – right to your door</p>
        </div>
        <div>
          <h4>PillPack</h4>
          <p>Pharmacy Simplified</p>
        </div>
        <div>
          <h4>Box Office Mojo</h4>
          <p>Find Movie Box Office Data</p>
        </div>
        <div>
          <h4>Goodreads</h4>
          <p>Book reviews & recommendations</p>
        </div>
        <div>
          <h4>Zappos</h4>
          <p>Shoes & Clothing</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links-bottom">
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Consumer Health Data Privacy Disclosure</a>
          <a href="#">Your Ads Privacy Choices <img src={adsPrivacyImage} alt="Ads Privacy Choices" /></a>
        </div>
        <div className="footer-copyright">
          <span>© 1996-2024, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
