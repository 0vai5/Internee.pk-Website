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

          <button className="heroBtn">Browse Internships</button>
        </div>
        <div className="heroRight">
          <img loading="lazy" src="https://interneepkhtml.netlify.app/images/OIG1.jpg" alt="Hero Image" />
        </div>
      </div>
  )
}

export default Hero