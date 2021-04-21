import React from 'react'
import { Element } from 'react-scroll'
import img1 from '../img/team/01.jpg'
import img2 from '../img/team/02.jpg'
import img3 from '../img/team/03.jpg'
import img4 from '../img/team/04.jpg'

const Team = () => {
    return (
        <Element name="team" className="element">
            <section className="team">
                <div className="container">
                    <div className="section-title">MEET THE TEAM</div>
                    <div className="team__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</div>
                    <div className="team__list">
                        <div className="team__item">
                            <div className="team__item-picture">
                                <img src={img1} alt=""/>
                            </div>
                            <div className="team__item-name">John Doe</div>
                            <div className="team__item-position">Director</div>
                        </div>
                        <div className="team__item">
                            <div className="team__item-picture">
                                <img src={img2} alt=""/>
                            </div>
                            <div className="team__item-name">Mike Doe</div>
                            <div className="team__item-position">Senior Designer</div>
                        </div>
                        <div className="team__item">
                            <div className="team__item-picture">
                                <img src={img3} alt=""/>
                            </div>
                            <div className="team__item-name">Jane Doe</div>
                            <div className="team__item-position">Senior Designer</div>
                        </div>
                        <div className="team__item">
                            <div className="team__item-picture">
                                <img src={img4} alt=""/>
                            </div>
                            <div className="team__item-name">Karen Doe</div>
                            <div className="team__item-position">Project Manager</div>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Team
