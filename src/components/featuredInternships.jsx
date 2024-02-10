import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const FeaturedInternships = () => {
  const iconStyle = { color: '#3B622B', fontWeight: 800, marginRight: '5px' };

  return (
    <div className="featuredInternships" data-scroll-section-speed=".1">
      <h3>Featured <span className="protest-riot-regular strongWord">Internships</span></h3>
      <p className="poppins-light">
        Internships come every two months. Grab your internships in your favorite
        <br />
        <span className="strongWord protest-riot-regular">domain</span> to boost yourself in the field of{' '}
        <span className="strongWord protest-riot-regular">Computer Technology</span>
      </p>
      <div className="internshipsCards">
        <div className="cardRow">
        <div className="card">
            <img loading="lazy" src="https://internee.pk/images/jobs/analysis.jpg" alt="" />
            <h2 className="cardHead">Data Analysis</h2>
            <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', color: 'gray' }}>
              <li>
                <FontAwesomeIcon icon={faClock} style={iconStyle} />1 Month
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} style={iconStyle} />
                Remote
              </li>
            </ul>
            <button className="internshipBtn">Apply Now</button>
          </div>

          <div className="card">
            <img loading="lazy" src="https://internee.pk/images/jobs/hack.jpeg" alt="" />
            <h2 className="cardHead">Cyber Security</h2>
            <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', color: 'gray' }}>
              <li>
                <FontAwesomeIcon icon={faClock} style={iconStyle} />1 Month
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} style={iconStyle} />
                Remote
              </li>
            </ul>
            <button className="internshipBtn">Apply Now</button>
          </div>

          <div className="card">
            <img loading="lazy" src="https://internee.pk/images/jobs/cloud.jpg" alt="" />
            <h2 className="cardHead">Cloud Computing</h2>
            <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', color: 'gray' }}>
              <li>
                <FontAwesomeIcon icon={faClock} style={iconStyle} />1 Month
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} style={iconStyle} />
                Remote
              </li>
            </ul>
            <button className="internshipBtn">Apply Now</button>
          </div>
        </div>
        <button className="browseBtn browseBtnResp">Browse Internships</button>
      </div>
      <button className="browseBtn">Browse Internships</button>
    </div>
  );
}

export default FeaturedInternships;
