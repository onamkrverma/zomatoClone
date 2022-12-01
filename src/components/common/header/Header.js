import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='max-width header'>
      <img
        className='header-logo'
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato-logo"
      />

      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name ">
              <i className="fi fi-sr-marker absolute-center location-icon"></i>
              <div>Delhi</div>
            </div>
            <i className="fi fi-sr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <i className="fi fi-rs-search absolute-center search-icon "></i>
            <input
              className='search-input'
              placeholder='Search for restaurant, cuisine or a dish'
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img 
          src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
          alt="profile" 
          className='header-profile-image'
          />
          <span className='header-username'>Onam</span>
          <i className="fi fi-sr-angle-small-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  )
}

export default Header