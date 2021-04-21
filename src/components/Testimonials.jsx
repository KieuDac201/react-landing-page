import React from 'react'
import { Element } from 'react-scroll'
import img1 from '../img/testimonials/01.jpg'
import img2 from '../img/testimonials/02.jpg'
import img3 from '../img/testimonials/03.jpg'
import img4 from '../img/testimonials/04.jpg'
import img5 from '../img/testimonials/05.jpg'
import img6 from '../img/testimonials/06.jpg'
function Testimonials() {
    return (
        <Element name="testimonials" className="element">
            <section className="testimonials">
                <div className="container">
                    <div className="section-title">WHAT OUR CLIENTS SAY</div>
                    <div className="testimonials__list">
                        <div className="testimonials__item">
                            <div className="testimonials__item-picture"><img src={img1} alt=""/></div>
                            <div className="testimonials__item-text">
                                <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                                <h5> - John Doe</h5>
                            </div>
                        </div>
                        <div className="testimonials__item">
                            <div className="testimonials__item-picture"><img src={img2} alt=""/></div>
                            <div className="testimonials__item-text">
                                <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                                <h5> - John Doe</h5>
                            </div>
                        </div>
                        <div className="testimonials__item">
                            <div className="testimonials__item-picture"><img src={img3} alt=""/></div>
                            <div className="testimonials__item-text">
                                <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                                <h5> - John Doe</h5>
                            </div>
                        </div>
                        <div className="testimonials__item">
                            <div className="testimonials__item-picture"><img src={img4} alt=""/></div>
                            <div className="testimonials__item-text">
                                <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                                <h5> - John Doe</h5>
                            </div>
                        </div>
                        <div className="testimonials__item">
                            <div className="testimonials__item-picture"><img src={img5} alt=""/></div>
                            <div className="testimonials__item-text">
                                <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                                <h5> - John Doe</h5>
                            </div>
                        </div>
                        <div className="testimonials__item">
                            <div className="testimonials__item-picture"><img src={img6} alt=""/></div>
                            <div className="testimonials__item-text">
                                <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                                <h5> - John Doe</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Testimonials
