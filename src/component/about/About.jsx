import React, { useEffect, useRef } from 'react';
import './AboutStyle.scss';

import Loader from '../loader/Loader';

import aboutAnimate from './AboutAnimate';
import avatar from '../../assests/images/avatar.jpg';

const About = (props) => {
    const containerAbout = useRef(null);
    const headingAbout = useRef(null);
    const lineAbout = useRef(null);
    const imgAboutContainer = useRef(null);
    const imgAbout = useRef(null);
    const blockAbout = useRef(null);
    const rightContainerAbout = useRef(null);
    const textAbout = useRef([]);

    useEffect(() => {
        // aboutAnimate([
        //     containerAbout,
        //     headingAbout,
        //     lineAbout,
        //     imgAboutContainer,
        //     imgAbout,
        //     textAbout,
        //     blockAbout,
        //     rightContainerAbout,
        // ]);
    }, []);

    // lazy loading
    useEffect(() => {
        imgAbout.current.addEventListener('load', () => {
            imgAbout.current.style.opacity = '1';

            setTimeout(() => {
                imgAbout.current.previousElementSibling.style.display = 'none';
            }, 500);
        });
    }, [props.theme]);

    return (
        <div
            ref={containerAbout}
            className="container-about container"
            data-section="about"
        >
            <div className="heading-about">
                <h1 ref={headingAbout}>About</h1>
                <span ref={lineAbout} className="line-about"></span>
            </div>

            <div ref={imgAboutContainer} className="left-container-about">
                <Loader />
                <img
                    ref={imgAbout}
                    className="img-about"
                    src=""
                    alt="avatar"
                    data-src={avatar}
                ></img>
            </div>

            <div ref={rightContainerAbout} className="right-container-about">
                <p ref={(el) => textAbout.current.push(el)}>
                    I'm twenty two, a systems engineer with good problem solving
                    skills, currently working with Infosys on React JS.
                </p>

                <p ref={(el) => textAbout.current.push(el)}>
                    To know more about my project and skills please scroll down.
                </p>

                <div ref={blockAbout} className="block-about"></div>
            </div>
        </div>
    );
};

export default About;
