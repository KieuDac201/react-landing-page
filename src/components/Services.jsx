import React from 'react'
import { Element } from 'react-scroll'

function Services() {
    return (
        <Element name="services" className="element">
        <section className="services">
            <div className="services__container container">
                <div className="section-title">OUR SERVICES</div>
                <div className="services__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</div>
                <div className="services__list">
                    <div className="services__item">
                        <div className="services__item-icon"><i className="fa fa-wordpress"></i></div>
                        <div className="services__item-title">Lorem ipsum dolor</div>
                        <div className="services__item-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</div>
                    </div>
                    <div className="services__item">
                        <div className="services__item-icon"><i className="fa fa-pie-chart"></i></div>
                        <div className="services__item-title">Consectetur adipiscing</div>
                        <div className="services__item-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</div>
                    </div>
                    <div className="services__item">
                        <div className="services__item-icon"><i className="fa fa-plane"></i></div>
                        <div className="services__item-title">Lorem ipsum dolor</div>
                        <div className="services__item-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</div>
                    </div>
                    <div className="services__item">
                        <div className="services__item-icon"><i className="fa fa-language"></i></div>
                        <div className="services__item-title">Diam sedasd commodo</div>
                        <div className="services__item-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</div>
                    </div>
                    <div className="services__item">
                        <div className="services__item-icon"><i className="fa fa-cloud-download"></i></div>
                        <div className="services__item-title">Duis sed dapibus </div>
                        <div className="services__item-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</div>
                    </div>
                    <div className="services__item">
                        <div className="services__item-icon"><i className="fa fa-cart-arrow-down"></i></div>
                        <div className="services__item-title">Consectetur adipiscing</div>
                        <div className="services__item-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</div>
                    </div>
                </div>
            </div>
        </section>
        </Element>
    )
}

export default Services
