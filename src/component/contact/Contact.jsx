import React, { useRef, useEffect } from 'react';
import './ContactStyle.scss';

import contactAnimate from './ContactAnimate';
import ContactSVG from './ContactSVG';
import ContactSVGInstagram from './ContactSVGInstagram';
import ContactSVGLinkedin from './ContactSVGLinkedin';
import ContactSVGFacebook from './ContactSVGFacebook';
import ContactSVGGithub from './ContactSVGGithub';

const Contact = () => {
    const containerContact = useRef(null);
    const headingContact = useRef(null);
    const lineContact = useRef(null);
    const bottomContainerContact = useRef(null);
    const leftContainerContact = useRef(null);
    const linksContact = useRef([]);
    const textContact = useRef([]);

    useEffect(() => {
        // contactAnimate([
        //     containerContact,
        //     headingContact,
        //     lineContact,
        //     bottomContainerContact,
        //     leftContainerContact,
        //     linksContact,
        //     textContact,
        // ]);
    }, []);

    return (
        <div
            ref={containerContact}
            className="container-contact container"
            data-section="contact"
        >
            <div ref={headingContact} className="heading-contact">
                <h1>Contact</h1>

                <span ref={lineContact} className="line-contact"></span>
            </div>
            <div className="top-container-contact">
                <div
                    ref={leftContainerContact}
                    className="left-container-contact"
                >
                    <ContactSVG />
                </div>

                <div className="right-container-contact">
                    <p ref={(el) => textContact.current.push(el)}>
                        <span>Email:</span>{' '}
                        <a
                            href="mailto:subhamraj4114@gmail.com?Subject=Hello!"
                            target="__blank"
                        >
                            subhamraj4114@gmail.com
                        </a>
                    </p>
                    <p ref={(el) => textContact.current.push(el)}>
                        <span>Phone:</span>{' '}
                        <a href="tel:8260602263">+91 826-060-2263</a>
                    </p>
                </div>
            </div>

            <div
                ref={bottomContainerContact}
                className="bottom-container-contact"
            >
                <div className="top-half-bottom-container-contact">
                    <div
                        ref={(el) => {
                            linksContact.current.push(el);
                        }}
                    >
                        <div>
                            <a
                                href="https://github.com/FaxMachin3"
                                target="__blank"
                            >
                                <ContactSVGGithub />
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://github.com/FaxMachin3"
                                target="__blank"
                            >
                                <p>GitHub</p>
                            </a>
                        </div>
                    </div>

                    <div
                        ref={(el) => {
                            linksContact.current.push(el);
                        }}
                    >
                        <div>
                            <a
                                href="https://www.instagram.com/_subhamraj/"
                                target="__blank"
                            >
                                <ContactSVGInstagram />
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.instagram.com/_subhamraj/"
                                target="__blank"
                            >
                                <p>Instagram</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bottom-half-bottom-container-contact">
                    <div
                        ref={(el) => {
                            linksContact.current.push(el);
                        }}
                    >
                        <div>
                            <a
                                href="https://www.linkedin.com/in/subhamraj"
                                target="__blank"
                            >
                                <ContactSVGLinkedin />
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/subhamraj"
                                target="__blank"
                            >
                                <p>LinkedIn</p>
                            </a>
                        </div>
                    </div>

                    <div
                        ref={(el) => {
                            linksContact.current.push(el);
                        }}
                    >
                        <div>
                            <a
                                href="https://www.facebook.com/F4xMachin3"
                                target="__blank"
                            >
                                <ContactSVGFacebook />
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.facebook.com/F4xMachin3"
                                target="__blank"
                            >
                                <p>Facebook</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
