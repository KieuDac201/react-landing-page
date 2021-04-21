import React from 'react'
import aboutImg from '../img/about.jpg'
import { Element } from 'react-scroll'

function About() {
    return (
        <Element name="about" className="element">
        <section className="about">
            <div className="about__container container">
                <div className="about__img">
                    <img src={aboutImg} alt=""/>
                </div>
                <div className="about__content">
                    <div className="section-title">About us</div>
                    <div className="about__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div className="about__choices">
                        <div className="about__choices-title">Why Choose Us?</div>
                        <ul className="about__choices-list">
                            <li className="about__choices-item"><i className="fa fa-check" aria-hidden="true"></i>Lorem ipsum dolor</li>
                            <li className="about__choices-item"><i className="fa fa-check" aria-hidden="true"></i>Tempor incididunt</li>
                            <li className="about__choices-item"><i className="fa fa-check" aria-hidden="true"></i>Dolore magna aliqua.</li>
                            <li className="about__choices-item"><i className="fa fa-check" aria-hidden="true"></i>Incididunt ut labore</li>
                            <li className="about__choices-item"><i className="fa fa-check" aria-hidden="true"></i>Aliquip ex ea commodo</li>
                            <li className="about__choices-item"><i className="fa fa-check" aria-hidden="true"></i>Lorem ipsum dolor</li>
                            <li className="about__choices-item"><i className="fa fa-check" aria-hidden="true"></i>Exercitation ullamco</li>
                            <li className="about__choices-item"><i className="fa fa-check" aria-hidden="true"></i>Lorem ipsum dolor</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </Element>
    )
}

export default About
