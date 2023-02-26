import React, { useEffect, useRef } from 'react';
import './HomeStyle.scss';

import Resume from '../../assests/downlodables/Subham_Raj_Feb_2023.pdf';

import { ANCHORS } from '../../common/constants';
import Arrow from '../../common/Arrow';
import HomeSVG from './HomeSVG';

const Home = ({ setSectionRefs }) => {
    const arrow = useRef(null);
    const workButton = useRef(null);
    const textHome = useRef(new Array(3));
    const buttonHome = useRef(null);
    const rightContainerHome = useRef(null);

    useEffect(() => {
        setSectionRefs((prevSectionRefs) => ({
            ...prevSectionRefs,
            [ANCHORS[0]]: [arrow, buttonHome, rightContainerHome, textHome],
        }));
    }, []);

    const onArrowClick = () => {
        window.document.querySelector('li .about').click();
    };

    const onWorkButtonClick = () => {
        window.document.querySelector('li .project').click();
    };

    return (
        <div className="container-home container" data-section="home">
            <div ref={rightContainerHome} className="right-container-home">
                <HomeSVG />
            </div>

            <div className="left-container-home">
                <div className="text-home">
                    <p
                        ref={(el) => {
                            textHome.current[0] = el;
                        }}
                    >
                        Hi!
                    </p>
                    <p
                        ref={(el) => {
                            textHome.current[1] = el;
                        }}
                    >
                        My name is <span className="name-home">Subham Raj</span>
                        .
                    </p>
                    <p
                        ref={(el) => {
                            textHome.current[2] = el;
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
                    <button
                        ref={workButton}
                        className="work-button"
                        onClick={onWorkButtonClick}
                    >
                        <span>My Work</span>
                    </button>
                </div>
            </div>
            <div
                ref={arrow}
                className="arrow-container-home"
                onClick={onArrowClick}
            >
                <Arrow className="arrow-home" />
            </div>
        </div>
    );
};

export default Home;
