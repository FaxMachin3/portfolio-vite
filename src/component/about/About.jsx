import React, { useEffect, useRef } from 'react';
import './AboutStyle.scss';

import { ANCHORS, SECTION_ANIMATE } from '../../common/constants';
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
            [ANCHORS[1]]: SECTION_ANIMATE[ANCHORS[1]]([
                headingAbout,
                lineAbout,
                imgAboutContainer,
                textAbout,
                blockAbout,
                rightContainerAbout,
            ]),
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
                    loading="eager"
                ></img>
            </div>

            <div ref={rightContainerAbout} className="right-container-about">
                <p ref={(el) => (textAbout.current[0] = el)}>
                    I'm a Senior Frontend Engineer, passionate about systems and
                    problem-solving. Like talking to people :) Part-time, I also
                    post tech-related stuff on YouTube/ Instagram. Madly in love
                    with competitive games &lt;3.
                </p>

                <p ref={(el) => (textAbout.current[1] = el)}>
                    Currently Exploring - Tanstack/ tRPC/ Zod/ XState/ QWIK/
                    Astro/ WASM.
                </p>

                <div ref={blockAbout} className="block-about"></div>
            </div>
        </div>
    );
};

export default About;
