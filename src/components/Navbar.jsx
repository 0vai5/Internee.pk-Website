import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you need
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className='container'>
            <div className="navbar">
                <div className="heading">
                    <NavLink to="/">
                        <img src="https://portal.internee.pk/assets/logo.png" alt="" className="image" />
                    </NavLink>
                </div>
                <div className="navLinks">
                    <div><FontAwesomeIcon icon={faBars} /></div> 
                    
                    <NavLink to="/contact">
                        <li>
                            <h4>Contact</h4>
                        </li>
                    </NavLink>
                    <NavLink to="/">
                        <li>
                            <h4>About</h4>
                        </li>
                    </NavLink>
                    <NavLink to="/">
                        <li>
                            <h4>Jobs</h4>
                        </li>
                    </NavLink>
                </div>
            </div>
            </div>
        </>
    );
};

export default Navbar;
