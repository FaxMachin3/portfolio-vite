import React, { useRef, useEffect, useState } from 'react';
import useProjectSlideAnimate from '../../hooks/useProjectSlideAnimate';
import useThrottle from '../../hooks/useThrottle';
import { ANCHORS, PROJECTS, SLIDE_DELAY } from '../../common/constants';
import ProjectSVGCode from './ProjectSVGCode';
import ProjectSVGWebsite from './ProjectSVGWebsite';
import Arrow from '../../common/Arrow';
import DarkWeather from '../../assests/images/darkWeather.jpg';
import Socialize from '../../assests/images/socialize.jpg';
import MyPortfolio from '../../assests/images/myPortfolio.jpg';
import BookMyEvent from '../../assests/images/bookMyEvent.jpg';
import APS from '../../assests/images/APS.jpg';

import './ProjectStyle.scss';

const Project = ({ setSectionRefs }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(0);
    const [arrowClicked, setArrowClicked] = useState(false);
    const imageSliderWidth = useRef(0);
    const textSliderWidth = useRef(0);
    const textSliderHeight = useRef(0);

    const headingProject = useRef(null);
    const lineProject = useRef(null);
    const leftContainerProject = useRef(null);
    const rightContainerProject = useRef(null);
    const blockProject = useRef(null);
    const leftArrowProject = useRef(null);
    const rightArrowProject = useRef(null);
    const textSliderProject = useRef(null);
    const imageSliderProject = useRef(null);
    const linksProject = useRef(new Array(5));
    const textSlidesProject = useRef(new Array(5));
    const textSlidesProjectH2 = useRef(new Array(5));
    const textSlidesProjectPara = useRef(new Array(5));
    const imageSlidesProject = useRef(new Array(5));
    const imageProject = useRef(new Array(5));

    useEffect(() => {
        imageSliderWidth.current =
            leftContainerProject.current.getBoundingClientRect().width;
        textSliderWidth.current =
            rightContainerProject.current.getBoundingClientRect().width;
        textSliderHeight.current =
            rightContainerProject.current.getBoundingClientRect().height;

        setSectionRefs((prevSectionRefs) => ({
            ...prevSectionRefs,
            [ANCHORS[3]]: [
                textSlidesProjectH2,
                textSlidesProjectPara,
                blockProject,
                imageSlidesProject,
                headingProject,
                lineProject,
                leftArrowProject,
                rightArrowProject,
                linksProject,
                rightContainerProject,
            ],
        }));
    }, []);

    useProjectSlideAnimate(
        currentSlide,
        textSlidesProjectH2,
        textSlidesProjectPara,
        linksProject,
        blockProject,
        arrowClicked,
        prevSlide
    );

    const onArrowClick = (inc) => {
        return useThrottle((_e) => {
            setArrowClicked(true);
            setCurrentSlide((prevCount) => {
                setPrevSlide(prevCount);
                let newCount = prevCount + inc;

                if (newCount < 0) newCount = 0;
                if (newCount >= PROJECTS.length) newCount = PROJECTS.length - 1;

                if (inc === -1) {
                    imageSliderProject.current.style.transform = `translateX(-${
                        imageSliderWidth.current * newCount
                    }px)`;

                    window.matchMedia('(min-width: 769px)').matches
                        ? (textSliderProject.current.style.transform = `translateY(-${
                              textSliderHeight.current * newCount
                          }px)`)
                        : (textSliderProject.current.style.transform = `translateX(-${
                              textSliderWidth.current * newCount
                          }px)`);
                } else {
                    imageSliderProject.current.style.transform = `translateX(-${
                        imageSliderWidth.current * newCount
                    }px)`;

                    window.matchMedia('(min-width: 769px)').matches
                        ? (textSliderProject.current.style.transform = `translateY(-${
                              textSliderHeight.current * newCount
                          }px)`)
                        : (textSliderProject.current.style.transform = `translateX(-${
                              textSliderWidth.current * newCount
                          }px)`);
                }

                return newCount;
            });
        }, SLIDE_DELAY);
    };

    return (
        <div className="container-project container" data-section="project">
            <div className="heading-project">
                <h1 ref={headingProject}>Project</h1>

                <span ref={lineProject} className="line-project"></span>
            </div>

            <div ref={leftContainerProject} className="left-container-project">
                <div
                    ref={leftArrowProject}
                    onClick={onArrowClick(-1)}
                    className="left-arrow-container-project"
                >
                    <Arrow className="left-arrow-project" />
                </div>

                <div
                    ref={rightArrowProject}
                    onClick={onArrowClick(1)}
                    className="right-arrow-container-project"
                >
                    <Arrow className="right-arrow-project" />
                </div>

                <div ref={imageSliderProject} className="image-slider-project">
                    <div
                        ref={(el) => (imageSlidesProject.current[0] = el)}
                        className="image-container-project"
                    >
                        <img
                            ref={(el) => (imageProject.current[0] = el)}
                            className="image-project"
                            loading="lazy"
                            alt="socialize"
                            src={Socialize}
                        />
                    </div>

                    <div
                        ref={(el) => (imageSlidesProject.current[1] = el)}
                        className="image-container-project"
                    >
                        <img
                            ref={(el) => (imageProject.current[1] = el)}
                            className="image-project mobile-image-project"
                            loading="lazy"
                            alt="arizona public service"
                            src={APS}
                        />
                    </div>

                    <div
                        ref={(el) => (imageSlidesProject.current[2] = el)}
                        className="image-container-project"
                    >
                        <img
                            ref={(el) => (imageProject.current[2] = el)}
                            className="image-project mobile-image-project"
                            loading="lazy"
                            alt="portfolio"
                            src={MyPortfolio}
                        />
                    </div>

                    <div
                        ref={(el) => (imageSlidesProject.current[3] = el)}
                        className="image-container-project"
                    >
                        <img
                            ref={(el) => (imageProject.current[3] = el)}
                            className="image-project"
                            loading="lazy"
                            alt="dark weather"
                            src={DarkWeather}
                        />
                    </div>

                    <div
                        ref={(el) => (imageSlidesProject.current[4] = el)}
                        className="image-container-project"
                    >
                        <img
                            ref={(el) => (imageProject.current[4] = el)}
                            className="image-project"
                            loading="lazy"
                            alt="book my event"
                            src={BookMyEvent}
                        />
                    </div>
                </div>
            </div>

            <div
                ref={rightContainerProject}
                className="right-container-project"
            >
                <div ref={textSliderProject} className="text-slider-project">
                    <div
                        ref={(el) => (textSlidesProject.current[0] = el)}
                        className="text-slide-project"
                    >
                        <h2 ref={(el) => (textSlidesProjectH2.current[0] = el)}>
                            Socialize:
                        </h2>

                        <p
                            ref={(el) =>
                                (textSlidesProjectPara.current[0] = el)
                            }
                        >
                            Responsive, full stack, social-networking web app
                            built using MERN stack with love.
                        </p>

                        <div
                            ref={(el) => (linksProject.current[0] = el)}
                            className="links-project"
                        >
                            <div>
                                <a
                                    href="https://github.com/FaxMachin3/socialize"
                                    target="__blank"
                                >
                                    <ProjectSVGCode />
                                </a>
                            </div>
                            <div>
                                <a
                                    href="http://mighty-meadow-58912.herokuapp.com/"
                                    target="__blank"
                                >
                                    <ProjectSVGWebsite />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        ref={(el) => (textSlidesProject.current[1] = el)}
                        className="text-slide-project"
                    >
                        <h2 ref={(el) => (textSlidesProjectH2.current[1] = el)}>
                            Arizona Public Service:
                        </h2>

                        <p
                            ref={(el) =>
                                (textSlidesProjectPara.current[1] = el)
                            }
                        >
                            Cross-platform mobile app built using Xamarin
                            native. I worked on Xamarin iOS fornt-end and
                            integration; and integration of Microsoft's App
                            Center.
                        </p>

                        <div
                            ref={(el) => (linksProject.current[1] = el)}
                            className="links-project"
                        >
                            <div>
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.aps.apsconsumerapp"
                                    target="__blank"
                                >
                                    <ProjectSVGWebsite />
                                </a>
                            </div>
                            <div className="link-hide-project">
                                <ProjectSVGCode />
                            </div>
                        </div>
                    </div>

                    <div
                        ref={(el) => (textSlidesProject.current[2] = el)}
                        className="text-slide-project"
                    >
                        <h2 ref={(el) => (textSlidesProjectH2.current[2] = el)}>
                            My Portfolio:
                        </h2>

                        <p
                            ref={(el) =>
                                (textSlidesProjectPara.current[2] = el)
                            }
                        >
                            I made this to improve and practice my front-end
                            skills. This was made using React.js (Hooks).
                        </p>

                        <div
                            ref={(el) => (linksProject.current[2] = el)}
                            className="links-project"
                        >
                            <div>
                                <a
                                    href="https://github.com/FaxMachin3/portfolio"
                                    target="__blank"
                                >
                                    <ProjectSVGCode />
                                </a>
                            </div>
                            <div>
                                <a href="https://subhamraj.dev/">
                                    <ProjectSVGWebsite />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        ref={(el) => (textSlidesProject.current[3] = el)}
                        className="text-slide-project"
                    >
                        <h2 ref={(el) => (textSlidesProjectH2.current[3] = el)}>
                            Dark Weather:
                        </h2>

                        <p
                            ref={(el) =>
                                (textSlidesProjectPara.current[3] = el)
                            }
                        >
                            A small dark themed weather app built using Python's
                            tkinter Library. Just enter a city or a country name
                            to get the weather report.
                        </p>

                        <div
                            ref={(el) => (linksProject.current[3] = el)}
                            className="links-project"
                        >
                            <div>
                                <a
                                    href="https://github.com/FaxMachin3/weather"
                                    target="__blank"
                                >
                                    <ProjectSVGCode />
                                </a>
                            </div>
                            <div className="link-hide-project">
                                <ProjectSVGWebsite />
                            </div>
                        </div>
                    </div>

                    <div
                        ref={(el) => (textSlidesProject.current[4] = el)}
                        className="text-slide-project"
                    >
                        <h2 ref={(el) => (textSlidesProjectH2.current[4] = el)}>
                            Book My Event:
                        </h2>

                        <p
                            ref={(el) =>
                                (textSlidesProjectPara.current[4] = el)
                            }
                        >
                            This is pure, non-responsive-spaghetti code as this
                            was the first college project I just made to have a
                            taste of web development.
                        </p>

                        <div
                            ref={(el) => (linksProject.current[4] = el)}
                            className="links-project"
                        >
                            <div>
                                <a
                                    href="https://github.com/FaxMachin3/BookMyEvent"
                                    target="__blank"
                                >
                                    <ProjectSVGCode />
                                </a>
                            </div>
                            <div className="link-hide-project">
                                <ProjectSVGWebsite />
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={blockProject} className="block-project"></div>
            </div>
        </div>
    );
};

export default Project;
