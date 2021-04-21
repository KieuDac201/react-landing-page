import React, { useState } from 'react'
import { Link } from 'react-scroll'


function Navbar() {
    const [isMenu, setIsMenu] = useState(false)
    const toggleMenu = () => {
        setIsMenu(!isMenu)
    }
    const hideMenu = () => {
        setIsMenu(false)
    }
    
    return (
        <nav>
            <div className="navbar container">
                <div className="navbar__logo">react landing page</div>
                <ul className={isMenu ? "navbar__menu active" : "navbar__menu"}>
                    <li className="navbar__item">
                        <a href="https://www.facebook.com/Dac.dep/" className="navbar__link"> </a>
                        <Link activeClass="active" className="navbar__link" onClick={hideMenu} to="features" spy={true} smooth={true} offset={-60} duration={500}  >
                            features
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link activeClass="active" className="navbar__link" onClick={hideMenu} to="about" spy={true} smooth={true} offset={-60} duration={500} >
                            about
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link activeClass="active" className="navbar__link" onClick={hideMenu} to="services" spy={true} smooth={true} offset={-60} duration={500} >
                            services
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link activeClass="active" className="navbar__link" onClick={hideMenu} to="gallery" spy={true} smooth={true} offset={-60} duration={500} >
                            gallery
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link activeClass="active" className="navbar__link" onClick={hideMenu} to="testimonials" spy={true} smooth={true} offset={-60} duration={500} >
                            TESTIMONIALS
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link activeClass="active" className="navbar__link" onClick={hideMenu} to="team" spy={true} smooth={true} offset={-60} duration={500} >
                            TEAM
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link activeClass="active" className="navbar__link" onClick={hideMenu} to="contact" spy={true} smooth={true} offset={-60} duration={500} >
                            CONTACT
                        </Link>
                    </li>
                </ul>
                <div className="navbar__icon" onClick={toggleMenu}>
                    {isMenu ? <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-bars" aria-hidden="true"></i>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
