import React from "react";
import './FooterInfo.css';

// Importing images from src/Assets folder
import logo from '../Assets/logo.png';
import englishIcon from '../Assets/english.png';
import usdIcon from '../Assets/usd.png';
import usIcon from '../Assets/usa.png';

const FooterInfo = () => {
  return (
    <div className="footer-info-container container-fluid">
      <div className="footer-info-content row">
        <div className="footer-column col-6 col-sm-4 col-md-3">
          <h3>Get to Know Us</h3>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science</li>
          </ul>
        </div>

        <div className="footer-column col-6 col-sm-4 col-md-3">
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Sell apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub</li>
            <li>See More Make Money with Us</li>
          </ul>
        </div>

        <div className="footer-column col-6 col-sm-4 col-md-3">
          <h3>Amazon Payment Products</h3>
          <ul>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>

        <div className="footer-column col-6 col-sm-4 col-md-3">
          <h3>Let Us Help You</h3>
          <ul>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Returns & Replacements</li>
            <li>Manage Your Content and Devices</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <div className="footer-info-bottom row text-center">
        <div className="footer-logo col-12">
          <img src={logo} alt="Logo" className="footer-logo-img" onClick={() => window.location.reload()} />
        </div>
        <div className="footer-settings col-12 d-flex justify-content-center">
          <div className="footer-setting-item">
            <img src={englishIcon} alt="English" className="footer-setting-img" />
            <div className="dropdown-content">
              <div className="dropdown-header">
                <span>Change language</span>
                <a href="#">Learn more</a>
              </div>
              <ul>
                <li><input type="radio" name="language" id="english" /><label htmlFor="english">English - EN</label></li>
                <li><input type="radio" name="language" id="spanish" /><label htmlFor="spanish">español - ES</label></li>
                <li><input type="radio" name="language" id="arabic" /><label htmlFor="arabic">العربية - AR</label></li>
                <li><input type="radio" name="language" id="german" /><label htmlFor="german">Deutsch - DE</label></li>
                <li><input type="radio" name="language" id="hebrew" /><label htmlFor="hebrew">עברית - HE</label></li>
                <li><input type="radio" name="language" id="korean" /><label htmlFor="korean">한국어 - KO</label></li>
                <li><input type="radio" name="language" id="portuguese" /><label htmlFor="portuguese">português - PT</label></li>
                <li><input type="radio" name="language" id="chinese-simplified" /><label htmlFor="chinese-simplified">中文(简体) - ZH</label></li>
                <li><input type="radio" name="language" id="chinese-traditional" /><label htmlFor="chinese-traditional">中文(繁體) - ZH</label></li>
              </ul>
            </div>
          </div>
          <img src={usdIcon} alt="USD" className="footer-setting-img" />
          <img src={usIcon} alt="United States" className="footer-setting-img" />
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
