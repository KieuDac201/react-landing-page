import React from 'react'
import { Element } from 'react-scroll'
import img1 from '../img/portfolio/01-small.jpg'
import img2 from '../img/portfolio/02-small.jpg'
import img3 from '../img/portfolio/03-small.jpg'
import img4 from '../img/portfolio/04-small.jpg'
import img5 from '../img/portfolio/05-small.jpg'
import img6 from '../img/portfolio/06-small.jpg'
import img7 from '../img/portfolio/07-small.jpg'
import img8 from '../img/portfolio/08-small.jpg'
import img9 from '../img/portfolio/09-small.jpg'

const Gallery = () => {
    return (
        <Element name="gallery" className="element">
        <section className="gallery">
            <div className="container">
                <div className="section-title">GALLERY</div>
                <div className="gallery__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</div>
                <div className="gallery__list">
                    <div className="gallery__item" data-text="baby shark">
                        <img src={img1} alt=""/>
                    </div>
                    <div className="gallery__item" data-text="Adipiscing Elit">
                        <img src={img2} alt=""/>
                    </div>
                    <div className="gallery__item" data-text="Lorem ipsum">
                        <img src={img3} alt=""/>
                    </div>
                    <div className="gallery__item" data-text="sit amet">
                        <img src={img4} alt=""/>
                    </div>
                    <div className="gallery__item" data-text="adipiscing elit">
                        <img src={img5} alt=""/>
                    </div>
                    <div className="gallery__item" data-text="ipsum dolor">
                        <img src={img6} alt=""/>
                    </div>
                    <div className="gallery__item" data-text="dapibus leonec">
                        <img src={img7} alt=""/>
                    </div>
                    <div className="gallery__item" data-text="sed dapibus">
                        <img src={img8} alt=""/>
                    </div>
                    <div className="gallery__item" data-text="consectetur adipiscing">
                        <img src={img9} alt=""/>
                    </div>
                </div>
            </div>
        </section>
        </Element>
    )
    
}

export default Gallery
