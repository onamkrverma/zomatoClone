import React from 'react'
import ExploreOpt from './exploreOptions/ExploreOpt'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-section'>
      <ExploreOpt />
      <div className="footer-wrapper max-width">
        <div className='footer-row'>
          <img className='footer-logo' src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="zomato logo" />
          <div className="country-language-wrapper">
            <div className="country-selector">
              <span className='country-flag'> </span>
              <span className='country-name'>India</span>
              <i className="fi fi-rs-angle-small-down absolute-center"></i>
            </div>
            <div className="language-selector">
              <i className="fi fi-sr-globe absolute-center globe-icon"></i>
              <span className='language'>English</span>
              <i className="fi fi-rs-angle-small-down absolute-center"></i>
            </div>
          </div>
        </div>
        <div className="footer-content-wrapper">
          <div className="footer-about-section">
            <div className="about-title">ABOUT ZOMATO</div>
            <div className="links-list">
              <div className="link-text">Who We Are</div>
              <div className="link-text">Blog</div>
              <div className="link-text">Work With Us</div>
              <div className="link-text">Investor Relations</div>
              <div className="link-text">Report Fraud</div>
              <div className="link-text">Contact Us</div>
            </div>
          </div>
          <div className="footer-other-bussiness-section">
            <div className="about-title">ZOMAVERSE</div>
            <div className="links-list">
              <div className="link-text">Zomato</div>
              <div className="link-text">Blinkit</div>
              <div className="link-text">Feeding India</div>
              <div className="link-text">Hyperpure</div>
              <div className="link-text">Zomaland</div>
            </div>
          </div>
          <div className="footer-partner-section">
            <div className="about-title">FOR RESTAURANTS</div>
            <div className="links-list">
              <div className="link-text">partner with us</div>
              <div className="link-text">Apps for you</div>
            </div>
            <div className="about-title" style={{ marginTop: '30px' }}>FOR ENTERPRISES</div>
            <div className="links-list">
              <div className="link-text">Zomato for work</div>
            </div>
          </div>
          <div className="footer-learn-more-section">
            <div className="about-title">LEARN MORE</div>
            <div className="links-list">
              <div className="link-text">privacy</div>
              <div className="link-text">security</div>
              <div className="link-text">terms</div>
              <div className="link-text">sitemap</div>
            </div>
          </div>
          <div className="footer-social-links-section" id='footer-desktop-social'>
            <div className="about-title">SOCIAL LINKS</div>
            <div className="social-media-links-wrapper">
              <div className="linkedin-link social-meadia-link">
                <img src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png" alt="social-icon" className='social-icon' />
              </div>
              <div className="instagram-link social-meadia-link">
                <img src="https://image.similarpng.com/very-thumbnail/2020/07/Instagram-black-and-white-logo-vector-png-(5).png" alt="social-icon" className='social-icon' />
              </div>
              <div className="twitter-link social-meadia-link">
                <img src="https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Twitter-logo-transparent-PNG.png" alt="social-icon" className='social-icon' />
              </div>
              <div className="youtube-link social-meadia-link">
                <img src="https://image.similarpng.com/very-thumbnail/2020/07/Black-Youtube-logo-with--new-style-vetor-PNG.png" alt="social-icon" className='social-icon' />
              </div>
              <div className="facebook-link social-meadia-link">
                <img src="https://image.similarpng.com/very-thumbnail/2020/04/Black-icon-facebook-logo-PNG.png" alt="social-icon" className='social-icon' />
              </div>

            </div>
            <div className="apps-links">
              <img className='apps-store-image' src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="apps-store-icon" />

              <img className='apps-store-image' src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="apps-store-icon" />

            </div>
          </div>
          <div className="footer-social-links-section " id='footer-mobile-social-link-section'>
            <div className="apps-links">
              <img className='apps-store-image' src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="apps-store-icon" />

              <img className='apps-store-image' src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="apps-store-icon" />

            </div>
            <div className="social-media">
              <div className="about-title">SOCIAL LINKS</div>
              <div className="social-media-links-wrapper">
                <div className="linkedin-link social-meadia-link">
                  <img src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-noire.png" alt="social-icon" className='social-icon' />
                </div>
                <div className="instagram-link social-meadia-link">
                  <img src="https://image.similarpng.com/very-thumbnail/2020/07/Instagram-black-and-white-logo-vector-png-(5).png" alt="social-icon" className='social-icon' />
                </div>
                <div className="twitter-link social-meadia-link">
                  <img src="https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Twitter-logo-transparent-PNG.png" alt="social-icon" className='social-icon' />
                </div>
                <div className="youtube-link social-meadia-link">
                  <img src="https://image.similarpng.com/very-thumbnail/2020/07/Black-Youtube-logo-with--new-style-vetor-PNG.png" alt="social-icon" className='social-icon' />
                </div>
                <div className="facebook-link social-meadia-link">
                  <img src="https://image.similarpng.com/very-thumbnail/2020/04/Black-icon-facebook-logo-PNG.png" alt="social-icon" className='social-icon' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='max-width' />
      <div className="createdby absolute-center">Made With 😍 by Onamkrverma</div>
    </div>
  )
}

export default Footer