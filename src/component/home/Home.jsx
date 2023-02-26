import React, { useEffect, useRef } from 'react';
import './HomeStyle.scss';

import Resume from '../../assests/downlodables/Subham_Raj_Feb_2023.pdf';

import Arrow from '../../common/Arrow';
import homeAnimate from './HomeAnimate';
import HomeSVG from './HomeSVG';
import Intersecting from '../intersecting/Intersecting';

const Home = () => {
    const containerHome = useRef(null);
    const arrow = useRef(null);
    const workButton = useRef(null);
    const textHome = useRef([]);
    const buttonHome = useRef(null);
    const rightContainerHome = useRef(null);

    useEffect(() => {
        // homeAnimate([
        //     arrow,
        //     buttonHome,
        //     rightContainerHome,
        //     textHome,
        //     containerHome,
        // ]);

        // adding click to navigate
        arrow.current.addEventListener('click', () => {
            window.document.querySelector('li .about').click();
        });

        // adding click to navigate
        workButton.current.addEventListener('click', () => {
            window.document.querySelector('li .project').click();
        });
    }, []);

    return (
        <div
            ref={containerHome}
            className="container-home container"
            data-section="home"
        >
            <div ref={rightContainerHome} className="right-container-home">
                <HomeSVG />
            </div>

            <div className="left-container-home">
                <div className="text-home">
                    <p
                        ref={(el) => {
                            textHome.current.push(el);
                        }}
                    >
                        Hi!
                    </p>
                    <p
                        ref={(el) => {
                            textHome.current.push(el);
                        }}
                    >
                        My name is <span className="name-home">Subham Raj</span>
                        .
                    </p>
                    <p
                        ref={(el) => {
                            textHome.current.push(el);
                        }}
                    >
                        I build <span className="profession-home">dope</span>{' '}
                        stuffs for <span className="profession-home">dope</span>{' '}
                        people.
                    </p>
                </div>

                <div ref={buttonHome} className="button-home">
                    <a href={Resume} download>
                        <button className="resume-button">
                            <span>Resume</span>
                        </button>
                    </a>
                    <button ref={workButton} className="work-button">
                        <span>My Work</span>
                    </button>
                </div>
            </div>
            <div ref={arrow} className="arrow-container-home">
                <Arrow className="arrow-home" />
            </div>
        </div>
    );
};

export default Home;
