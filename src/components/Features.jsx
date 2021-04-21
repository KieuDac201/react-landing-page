import React from 'react'
import { Element } from 'react-scroll'
function Features() {
    return (
        <Element name="features" className="element">
            <section className="feature">
                <div className="container">
                
                    <div className="section-title">FEATURES</div>
                    <div className="feature__list">
                        <div className="feature__item">
                            <div className="feature__item-icon"><i className="fa fa-comments-o"></i></div>
                            <h4 className="feature__item-title">Lorem ipsum</h4>
                            <p className="feature__item-paragraph">Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                        </div>
                        <div className="feature__item">
                            <div className="feature__item-icon"><i className="fa fa-bullhorn"></i></div>
                            <h4 className="feature__item-title">Lorem ipsum</h4>
                            <p className="feature__item-paragraph">Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                        </div>
                        <div className="feature__item">
                            <div className="feature__item-icon"><i className="fa fa-group"></i></div>
                            <h4 className="feature__item-title">Lorem ipsum</h4>
                            <p className="feature__item-paragraph">Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                        </div>
                        <div className="feature__item">
                            <div className="feature__item-icon"><i className="fa fa-magic"></i></div>
                            <h4 className="feature__item-title">Lorem ipsum</h4>
                            <p className="feature__item-paragraph">Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Features
