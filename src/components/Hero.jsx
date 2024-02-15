import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="heroLeft">
          <div className="heroPara">
            <p>Looking for a Dream Internship??</p>
          </div>

          <h2>
            Join <br />
            <span className="strongWord protest-riot-regular">Internee </span>
            Right Now..!
          </h2>
          <p>
            Pakistan's Virtual Internship Platform Powered By{' '}
            <strong className="protest-riot-regular strongWord">TechvioChats</strong>
          </p>

          <button class="animated-button">
  <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span class="text">Explore More</span>
  <span class="circle"></span>
  <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button>

        </div>
        <div className="heroRight">
          <img loading="lazy" src="https://interneepkhtml.netlify.app/images/OIG1.jpg" alt="Hero Image" />
        </div>
      </div>
  )
}

export default Hero