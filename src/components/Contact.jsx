import React from 'react'
import { Element } from 'react-scroll'
function Contact() {
    return (
        <Element name="contact" className="element">
            <section className="contact">
                <div className="container">
                    <div className="section-title">GET IN TOUCH</div>
                    <div className="contact__container">
                        <div className="contact__form">
                            <div className="contact__form-text">Please fill out the form below to send us an email and we will get back to you as soon as possible.</div>
                            <div className="contact__form-row">
                                <input type="text" placeholder="Name"/>
                                <input type="text" placeholder="Email"/>
                            </div>
                            <div className="contact__form-row">
                                <textarea placeholder="Message"></textarea>
                            </div>
                            <div className="contact__form-btn">
                                <button>Send Message</button>
                            </div>
                        </div>
                        <div className="contact__info">
                            <div className="contact__info-title">Contact Info</div>
                            <div className="contact__info-list">
                                <div className="contact__info-item">
                                    <h5><i className="fa fa-map-marker" aria-hidden="true"></i>Address</h5>
                                    <p>4321 California St, San Francisco, CA 12345</p>
                                </div>
                                <div className="contact__info-item">
                                    <h5><i className="fa fa-phone" aria-hidden="true"></i>Phone</h5>
                                    <p>082 7898 103</p>
                                </div>
                                <div className="contact__info-item">
                                    <h5><i className="fa fa-envelope-o" aria-hidden="true"></i>Eamil</h5>
                                    <p>kieudac18082001@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact__sci">
                        <a href="https://www.facebook.com/Dac.dep/" className="contact__sci-link"><i className="fa fa-facebook" aria-hidden="true"></i> </a>
                        <a href="https://www.facebook.com/Dac.dep/" className="contact__sci-link"><i className="fa fa-twitter" aria-hidden="true"></i> </a>
                        <a href="https://www.facebook.com/Dac.dep/" className="contact__sci-link"><i className="fa fa-youtube" aria-hidden="true"></i> </a>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Contact
