import React, { useState } from 'react'
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section>
            <h2 className="section__title">Qualification</h2>
            <span className='section__subtitle'>My Journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ?
                        "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"} onClick={() => toggleTab(1)}>

                        <i className='uil uil-graduation-cap qualification__icon'></i>{" "}
                        Education
                    </div>
                    <div className={toggleState === 2 ?
                        "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"} onClick={() => toggleTab(2)}>

                        <i className='uil uil-briefcase-alt qualification__icon'></i>{" "}
                        Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">Electronics and Communication</h3>
                                <span className='qualification__subtitle'>
                                    UIET MD University
                                </span>
                                <div className="qualification__calender">
                                    <i className='uil uil-calendar-alt'></i>2019-2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Senior Secondary</h3>
                                <span className='qualification__subtitle'>
                                    Maharishi Vidya Mandir
                                </span>
                                <div className="qualification__calender">
                                    <i className='uil uil-calendar-alt'></i>2017-2018
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">High School</h3>
                                <span className='qualification__subtitle'>
                                    Maharishi Vidya Mandir
                                </span>
                                <div className="qualification__calender">
                                    <i className='uil uil-calendar-alt'></i>2015-2016
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>
                    </div>


                    <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">TCE-Web Dev Role</h3>
                                <span className='qualification__subtitle'>
                                    GeeksforGeeks
                                </span>
                                <div className="qualification__calender">
                                    <i className='uil uil-calendar-alt'></i>2023-present
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Frontend Developer</h3>
                                <span className='qualification__subtitle'>
                                    WorqHat
                                </span>
                                <div className="qualification__calender">
                                    <i className='uil uil-calendar-alt'></i>Sep 2022- Dec 22
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">React JS Developer</h3>
                                <span className='qualification__subtitle'>
                                    Preneurship
                                </span>
                                <div className="qualification__calender">
                                    <i className='uil uil-calendar-alt'></i>feb2022-may2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification