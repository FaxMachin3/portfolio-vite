import React, { useRef, useEffect } from 'react';
import './ContactStyle.scss';

import { ANCHORS, CONTACTS, SECTION_ANIMATE } from '../../common/constants';
import ContactSVG from './ContactSVG';

const Contact = ({ setSectionRefs }) => {
    const headingContact = useRef(null);
    const lineContact = useRef(null);
    const bottomContainerContact = useRef(null);
    const leftContainerContact = useRef(null);
    const linksContact = useRef(new Array(4));
    const textContact = useRef(new Array(4));

    useEffect(() => {
        setSectionRefs((prevSectionRefs) => ({
            ...prevSectionRefs,
            [ANCHORS[4]]: SECTION_ANIMATE[ANCHORS[4]]([
                headingContact,
                lineContact,
                bottomContainerContact,
                leftContainerContact,
                linksContact,
                textContact,
            ]),
        }));
    }, []);

    return (
        <div className="container-contact container" data-section="contact">
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
                    <p ref={(el) => (textContact.current[0] = el)}>
                        <span>Email:</span>{' '}
                        <a
                            href="mailto:subhamraj4114@gmail.com?Subject=Hello!"
                            target="__blank"
                        >
                            subhamraj4114@gmail.com
                        </a>
                    </p>
                    <p ref={(el) => (textContact.current[1] = el)}>
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
                    {CONTACTS.slice(0, 2).map(
                        ({ name, Icon, website }, index) => (
                            <div
                                key={name}
                                ref={(el) => {
                                    linksContact.current[index] = el;
                                }}
                            >
                                <div>
                                    <a href={website} target="__blank">
                                        <Icon />
                                    </a>
                                </div>
                                <div>
                                    <a href={website} target="__blank">
                                        <p>{name}</p>
                                    </a>
                                </div>
                            </div>
                        )
                    )}
                </div>

                <div className="bottom-half-bottom-container-contact">
                    {CONTACTS.slice(2, 4).map(
                        ({ name, Icon, website }, index) => (
                            <div
                                key={name}
                                ref={(el) => {
                                    linksContact.current[index + 2] = el;
                                }}
                            >
                                <div>
                                    <a href={website} target="__blank">
                                        <Icon />
                                    </a>
                                </div>
                                <div>
                                    <a href={website} target="__blank">
                                        <p>{name}</p>
                                    </a>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
