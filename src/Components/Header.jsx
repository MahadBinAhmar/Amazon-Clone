import React, { useState } from 'react'; 
import './Header.css'; // Import the CSS
import logo from '../Assets/logo.png'; // Ensure correct path for the logo
import usFlag from '../Assets/us-flag.png'; // Path to US flag image
import searchIcon from '../Assets/search.png'; // Search icon image
import cartIcon from '../Assets/cart.png'; // Cart image
import locationIcon from '../Assets/locationn.png'; // Location symbol image
import accountIcon from '../Assets/account.png';
import ordersIcon from '../Assets/returns.png';

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  const reloadPage = () => {
    window.location.reload();
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <div className="header">
        {/* Left section (Amazon logo and location) */}
        <div className="header__left">
          <img
            src={logo}
            alt="Amazon"
            className="header__logo"
            onClick={reloadPage}
          />
          <div className="header__option header__location" onClick={togglePopup}>
            <img src={locationIcon} alt="Location" className="header__locationIcon" />
          </div>
        </div>

        {/* Middle section (Search bar) */}
        <div className="header__search">
          <select className="header__searchDropdown">
            <option value="All">All</option>
            <option value="Art">Art & Crafts</option>
            <option value="Books">Books</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home">Home & Kitchen</option>
            <option value="Toys">Toys & Games</option>
          </select>
          <input
            type="text"
            className="header__searchInput"
            placeholder="Search Amazon"
          />
          <button className="header__searchIcon" onClick={reloadPage}>
            <img src={searchIcon} alt="Search Icon" />
          </button>
        </div>

        {/* Right section (Language, Account, Orders, Cart) */}
        <div className="header__right">
          <div className="header__languageDropdown">
            <span>
              <img src={usFlag} alt="EN" className="header__flag"/>
            </span>
            <div className="header__languageDropdownContent">
              <div className="header__languageHeading">
                Change language <span className="blueLink">Learn more</span>
              </div>

              {/* Language options */}
              <div className="header__languageOption">
                <input type="radio" id="en" name="language" value="EN" defaultChecked />
                <label htmlFor="en">English - EN</label>
              </div>
              <div className="header__languageOption">
                <input type="radio" id="es" name="language" value="ES" />
                <label htmlFor="es">español - ES</label>
              </div>
              <div className="header__languageOption">
                <input type="radio" id="ar" name="language" value="AR" />
                <label htmlFor="ar">العربية - AR</label>
              </div>
              <div className="header__languageOption">
                <input type="radio" id="de" name="language" value="DE" />
                <label htmlFor="de">Deutsch - DE</label>
              </div>
              <div className="header__languageOption">
                <input type="radio" id="he" name="language" value="HE" />
                <label htmlFor="he">עברית - HE</label>
              </div>
              <div className="header__languageOption">
                <input type="radio" id="ko" name="language" value="KO" />
                <label htmlFor="ko">한국어 - KO</label>
              </div>
              <div className="header__languageOption">
                <input type="radio" id="pt" name="language" value="PT" />
                <label htmlFor="pt">português - PT</label>
              </div>
              <div className="header__languageOption">
                <input type="radio" id="zh" name="language" value="ZH" />
                <label htmlFor="zh">中文(简体) - ZH</label>
              </div>
              <div className="header__languageOption">
                <input type="radio" id="zh-tw" name="language" value="ZH-TW" />
                <label htmlFor="zh-tw">中文(繁體) - ZH</label>
              </div>

              <div className="header__currencyOption">
                <a href="#" className="header__link">Change currency</a>
              </div>

              <div className="header__shoppingInfo">
                <img src={usFlag} alt="US" className="header__flag"/> You are shopping on Amazon.com
              </div>
              <a href="#" className="header__centerLink">Change country/region</a>
            </div>
          </div>

          <div className="header__option header__accountDropdown">
            <img src={accountIcon} alt="Account Icon" className="header__accountIcon" />
            <div className="header__dropdownContent">
              <button type="button">
                <a href="/signup">Sign in</a>
              </button>
              <p>New customer? Start here.</p>

              <div className="dropdown__container">
                <div className="dropdown__lists">
                  <h4>Your Lists</h4>
                  <ul>
                    <li><a href="#">Create a List</a></li>
                    <li><a href="#">Find a List or Registry</a></li>
                  </ul>
                </div>
                <div className="dropdown__account">
                  <h4>Your Account</h4>
                  <ul>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Orders</a></li>
                    <li><a href="#">Recommendations</a></li>
                    <li><a href="#">Browsing History</a></li>
                    <li><a href="#">Watchlist</a></li>
                    <li><a href="#">Video Purchases & Rentals</a></li>
                    <li><a href="#">Kindle Unlimited</a></li>
                    <li><a href="#">Content & Devices</a></li>
                    <li><a href="#">Subscribe & Save Items</a></li>
                    <li><a href="#">Memberships & Subscriptions</a></li>
                    <li><a href="#">Music Library</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header__option">
          <img src={ordersIcon} alt="Orders Icon" className="header__ordersIcon" />
          </div>
          <div className="header__cart">
            <img src={cartIcon} alt="Cart" className="header__cartIcon" />
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup__content">
            <span className="popup__close" onClick={togglePopup}>&times;</span>
            <h2>Choose your location</h2>
            <p>Delivery options and delivery speeds may vary for different locations</p>
            <button className="popup__signInButton">Sign in to see your addresses</button>
            <p>or enter a US zip code</p>
            <input type="text" className="popup__input" placeholder="Enter zip code"/>
            <button className="popup__applyButton">Apply</button>
            <p>or ship outside the US</p>
            <select className="popup__countrySelect">
              <option value="Pakistan">Pakistan</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
              {/* Add more countries as needed */}
            </select>
            <button className="popup__doneButton">Done</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
