import React, { useRef, useEffect, useState } from 'react';
import useProjectSlideAnimate from '../../hooks/useProjectSlideAnimate';
import useThrottle from '../../hooks/useThrottle';
import { ANCHORS, PROJECTS, SLIDE_DELAY } from '../../common/constants';
import ProjectSVGCode from './ProjectSVGCode';
import ProjectSVGWebsite from './ProjectSVGWebsite';
import Arrow from '../../common/Arrow';

import './ProjectStyle.scss';

const Project = ({ setSectionRefs }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(0);
    const [arrowClicked, setArrowClicked] = useState(false);

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
            setCurrentSlide((prevCount) => {
                const newCount = prevCount + inc;

                if (newCount < 0) return 0;
                if (newCount >= PROJECTS.length) return PROJECTS.length - 1;
                setArrowClicked(true);
                setPrevSlide(prevCount);

                const offset = newCount * (100 / PROJECTS.length);
                imageSliderProject.current.style.transform = `translateX(-${offset}%)`;

                window.matchMedia('(min-width: 769px)').matches
                    ? (textSliderProject.current.style.transform = `translateY(-${offset}%)`)
                    : (textSliderProject.current.style.transform = `translateX(-${
                          newCount * 315
                      }px)`);

                return newCount;
            });
        }, 2 * SLIDE_DELAY);
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
                    {PROJECTS.map(({ imageDetails }, index) => (
                        <div
                            key={imageDetails.alt}
                            ref={(el) =>
                                (imageSlidesProject.current[index] = el)
                            }
                            className="image-container-project"
                        >
                            <img
                                ref={(el) => (imageProject.current[index] = el)}
                                className="image-project"
                                loading="lazy"
                                {...imageDetails}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div
                ref={rightContainerProject}
                className="right-container-project"
            >
                <div ref={textSliderProject} className="text-slider-project">
                    {PROJECTS.map(
                        (
                            { projectDetails: { heading, description, links } },
                            index
                        ) => (
                            <div
                                key={heading}
                                ref={(el) =>
                                    (textSlidesProject.current[index] = el)
                                }
                                className="text-slide-project"
                            >
                                <h2
                                    ref={(el) =>
                                        (textSlidesProjectH2.current[index] =
                                            el)
                                    }
                                >
                                    {heading}
                                </h2>

                                <p
                                    ref={(el) =>
                                        (textSlidesProjectPara.current[index] =
                                            el)
                                    }
                                >
                                    {description}
                                </p>

                                <div
                                    ref={(el) =>
                                        (linksProject.current[index] = el)
                                    }
                                    className="links-project"
                                >
                                    {!!links.code && (
                                        <div>
                                            <a
                                                href={links.code}
                                                target="__blank"
                                            >
                                                <ProjectSVGCode />
                                            </a>
                                        </div>
                                    )}
                                    {!!links.website && (
                                        <div>
                                            <a
                                                href={links.website}
                                                target="__blank"
                                            >
                                                <ProjectSVGWebsite />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    )}
                </div>

                <div ref={blockProject} className="block-project"></div>
            </div>
        </div>
    );
};

export default Project;
