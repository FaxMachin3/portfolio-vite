import React, { useRef, useEffect } from 'react';
import { gsap, Power2 } from 'gsap';
import './ProjectStyle.scss';

import { ANCHORS } from '../../common/constants';
import ProjectSVGCode from './ProjectSVGCode';
import ProjectSVGWebsite from './ProjectSVGWebsite';
import Arrow from '../../common/Arrow';
import DarkWeather from '../../assests/images/darkWeather.jpg';
import Socialize from '../../assests/images/socialize.jpg';
import MyPortfolio from '../../assests/images/myPortfolio.jpg';
import BookMyEvent from '../../assests/images/bookMyEvent.jpg';
import APS from '../../assests/images/APS.jpg';

const Project = ({ setSectionRefs }) => {
    const large = useRef(window.matchMedia('(min-width: 769px)').matches);
    const slideCountProject = useRef(0);
    const allowClick = useRef(true);
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

    const animateTextProject = (heading, para, links, prevCount) => {
        const timelineText = gsap.timeline({
            defaults: { opacity: 0, duration: 0.75, ease: Power2.easeInOut },
        });

        const prevH2 = textSlidesProjectH2.current[prevCount];
        const prevPara = textSlidesProjectPara.current[prevCount];
        const prevLink = Array.from(linksProject.current[prevCount].childNodes);

        const xTrans = large.current ? 10 : 5;

        gsap.to(blockProject.current, {
            duration: 0.15,
            x: xTrans,
            ease: Power2.easeOut,
        });
        gsap.to(blockProject.current, {
            duration: 0.15,
            x: 0,
            delay: 0.15,
            ease: Power2.easeOut,
        });

        large.current
            ? timelineText
                  .to(prevH2, { duration: 0.5, y: -100, opacity: 0 })
                  .to(prevPara, { duration: 0.5, y: -100, opacity: 0 }, '-=0.4')
                  .to(
                      prevLink,
                      {
                          duration: 0.5,
                          y: -100,
                          opacity: 0,
                          stagger: {
                              each: 0.1,
                          },
                      },
                      '-=0.3'
                  )
                  .from(heading, { duration: 0.75, y: 100 }, '-=0.1')
                  .from(
                      para,
                      {
                          duration: 0.75,
                          y: 100,
                          stagger: {
                              each: 0.05,
                          },
                      },
                      '-=0.65'
                  )
                  .from(
                      links,
                      {
                          duration: 0.75,
                          y: 100,
                          stagger: {
                              each: 0.05,
                          },
                      },
                      '-=0.55'
                  )
                  .set(prevH2, { y: 0, opacity: 1 })
                  .set(prevPara, { y: 0, opacity: 1 })
                  .set(prevLink, { y: 0, opacity: 1 })
            : timelineText
                  .from(heading, { delay: 0.4 })
                  .from(
                      para,
                      {
                          y: 100,
                          stagger: {
                              each: 0.05,
                          },
                      },
                      '-=0.65'
                  )
                  .from(
                      links,
                      {
                          y: 100,
                          stagger: {
                              each: 0.05,
                          },
                      },
                      '-=0.55'
                  );
    };

    const selectTextProject = (count, prevCount) => {
        if (count === 5) {
            animateTextProject(
                textSlidesProjectH2.current[0],
                textSlidesProjectPara.current[0],
                Array.from(linksProject.current[0].childNodes),
                prevCount
            );
        } else if (count === -1) {
            animateTextProject(
                textSlidesProjectH2.current[4],
                textSlidesProjectPara.current[4],
                Array.from(linksProject.current[4].childNodes),
                prevCount
            );
        } else {
            animateTextProject(
                textSlidesProjectH2.current[count],
                textSlidesProjectPara.current[count],
                Array.from(linksProject.current[count].childNodes),
                prevCount
            );
        }
    };

    const changeSlideProject = (args) => {
        const [leftArrow, rightArrow] = args;

        leftArrow.current.addEventListener('click', () => {
            if (allowClick.current && slideCountProject.current > 0) {
                allowClick.current = !allowClick.current;

                slideCountProject.current--;

                selectTextProject(
                    slideCountProject.current,
                    slideCountProject.current + 1
                );

                if (slideCountProject.current <= -1) {
                    slideCountProject.current = 4;
                }

                imageSliderProject.current.style.transform = `translateX(-${
                    imageSliderWidth.current * slideCountProject.current
                }px)`;

                window.matchMedia('(min-width: 769px)').matches
                    ? (textSliderProject.current.style.transform = `translateY(-${
                          textSliderHeight.current * slideCountProject.current
                      }px)`)
                    : (textSliderProject.current.style.transform = `translateX(-${
                          textSliderWidth.current * slideCountProject.current
                      }px)`);

                setTimeout(() => {
                    allowClick.current = !allowClick.current;
                }, 1100);
            }
        });

        rightArrow.current.addEventListener('click', () => {
            if (allowClick.current && slideCountProject.current < 4) {
                allowClick.current = !allowClick.current;

                slideCountProject.current++;

                selectTextProject(
                    slideCountProject.current,
                    slideCountProject.current - 1
                );

                if (slideCountProject.current >= 5) {
                    slideCountProject.current = 0;
                }

                imageSliderProject.current.style.transform = `translateX(-${
                    imageSliderWidth.current * slideCountProject.current
                }px)`;

                window.matchMedia('(min-width: 769px)').matches
                    ? (textSliderProject.current.style.transform = `translateY(-${
                          textSliderHeight.current * slideCountProject.current
                      }px)`)
                    : (textSliderProject.current.style.transform = `translateX(-${
                          textSliderWidth.current * slideCountProject.current
                      }px)`);

                setTimeout(() => {
                    allowClick.current = !allowClick.current;
                }, 1100);
            }
        });
    };

    // lazy loading
    useEffect(() => {
        const imageProject = window.document.querySelectorAll('.image-project');

        imageProject.forEach((image) => {
            image.addEventListener('load', () => {
                const loaderCircles = image.previousElementSibling.childNodes;

                // props.theme
                //     ? loaderCircles.forEach((circle) => {
                //           setTimeout(() => {
                //               circle.style.backgroundColor = '#A13251';
                //           }, 75);
                //       })
                //     : loaderCircles.forEach((circle) => {
                //           setTimeout(() => {
                //               circle.style.backgroundColor = '#008F96';
                //           }, 75);
                //       });

                image.style.opacity = '1';

                setTimeout(() => {
                    image.previousElementSibling.style.display = 'none';
                }, 500);
            });
        });
    }, []);

    useEffect(() => {
        changeSlideProject([leftArrowProject, rightArrowProject]);

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

    return (
        <div className="container-project container" data-section="project">
            <div className="heading-project">
                <h1 ref={headingProject}>Project</h1>

                <span ref={lineProject} className="line-project"></span>
            </div>

            <div ref={leftContainerProject} className="left-container-project">
                <div
                    ref={leftArrowProject}
                    className="left-arrow-container-project"
                >
                    <Arrow className="left-arrow-project" />
                </div>

                <div
                    ref={rightArrowProject}
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
