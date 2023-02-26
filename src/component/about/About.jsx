import React, { useEffect, useRef } from 'react';
import './AboutStyle.scss';

import { ANCHORS } from '../../common/constants';
import avatar from '../../assests/images/avatar.jpg';

const About = ({ setSectionRefs }) => {
    const headingAbout = useRef(null);
    const lineAbout = useRef(null);
    const imgAboutContainer = useRef(null);
    const blockAbout = useRef(null);
    const rightContainerAbout = useRef(null);
    const textAbout = useRef(new Array(2));

    useEffect(() => {
        setSectionRefs((prevSectionRefs) => ({
            ...prevSectionRefs,
            [ANCHORS[1]]: [
                headingAbout,
                lineAbout,
                imgAboutContainer,
                textAbout,
                blockAbout,
                rightContainerAbout,
            ],
        }));
    }, []);

    return (
        <div className="container-about container" data-section="about">
            <div className="heading-about">
                <h1 ref={headingAbout}>About</h1>
                <span ref={lineAbout} className="line-about"></span>
            </div>

            <div ref={imgAboutContainer} className="left-container-about">
                <img
                    className="img-about"
                    src={avatar}
                    alt="avatar"
                    loading="lazy"
                ></img>
            </div>

            <div ref={rightContainerAbout} className="right-container-about">
                <p ref={(el) => (textAbout.current[0] = el)}>
                    I'm twenty two, a systems engineer with good problem solving
                    skills, currently working with Infosys on React JS.
                </p>

                <p ref={(el) => (textAbout.current[1] = el)}>
                    To know more about my project and skills please scroll down.
                </p>

                <div ref={blockAbout} className="block-about"></div>
            </div>
        </div>
    );
};

export default About;
