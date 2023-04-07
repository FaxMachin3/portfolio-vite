import React, { useRef, useEffect, useState } from 'react';
import useThrottle from '../../hooks/useThrottle';
import {
    ANCHORS,
    SECTION_ANIMATE,
    SKILLS,
    SLIDE_DELAY,
} from '../../common/constants';
import SkillSVG from './SkillSVG';
import Arrow from '../../common/Arrow';
import useSkillSlideAnimate from '../../hooks/useSkillSlideAnimate';

import './SkillStyle.scss';

const Skill = ({ setSectionRefs }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [arrowClicked, setArrowClicked] = useState(false);

    const lineSkill = useRef(null);
    const headingSkill = useRef(null);
    const leftArrowSkill = useRef(null);
    const rightArrowSkill = useRef(null);
    const sliderSkill = useRef(null);
    const slidesSkill = useRef(new Array(4));
    const slidesSkillH2 = useRef(new Array(4));
    const slidesSkillPara = useRef(new Array(4));
    const rightContainerSkill = useRef(null);
    const blockSkill = useRef(null);
    const imgSkill = useRef(null);

    useEffect(() => {
        setSectionRefs((prevSectionRefs) => ({
            ...prevSectionRefs,
            [ANCHORS[2]]: SECTION_ANIMATE[ANCHORS[2]]([
                slidesSkillH2,
                slidesSkillPara,
                blockSkill,
                imgSkill,
                headingSkill,
                lineSkill,
                leftArrowSkill,
                rightArrowSkill,
                rightContainerSkill,
            ]),
        }));
    }, []);

    useSkillSlideAnimate(
        currentSlide,
        slidesSkillH2,
        slidesSkillPara,
        blockSkill,
        arrowClicked
    );

    const onArrowClick = (inc) => {
        return useThrottle((_e) => {
            setArrowClicked(true);
            setCurrentSlide((prevCount) => {
                const newCount = prevCount + inc;

                if (newCount < 0) return 0;
                if (newCount >= SKILLS.length) return SKILLS.length - 1;

                return newCount;
            });
        }, SLIDE_DELAY);
    };

    return (
        <div className="container-skill container" data-section="skill">
            <div className="heading-skill">
                <h1 ref={headingSkill}>Skill</h1>

                <span ref={lineSkill} className="line-skill"></span>
            </div>

            <div ref={imgSkill} className="left-container-skill">
                <SkillSVG />
            </div>

            <div ref={rightContainerSkill} className="right-container-skill">
                <div
                    ref={leftArrowSkill}
                    onClick={onArrowClick(-1)}
                    className="left-arrow-container-skill"
                >
                    <Arrow className="left-arrow-skill" />
                </div>

                <div
                    ref={rightArrowSkill}
                    onClick={onArrowClick(1)}
                    className="right-arrow-container-skill"
                >
                    <Arrow className="right-arrow-skill" />
                </div>

                <div
                    ref={sliderSkill}
                    style={{
                        transform: `translateX(${
                            currentSlide * (-100 / SKILLS.length)
                        }%)`,
                    }}
                    className="slider-skill"
                >
                    {SKILLS.map(({ heading, technologies }, index) => (
                        <div
                            key={heading}
                            ref={(el) => (slidesSkill.current[index] = el)}
                            className="slide-skill"
                        >
                            <h2
                                ref={(el) =>
                                    (slidesSkillH2.current[index] = el)
                                }
                            >
                                {heading}
                            </h2>
                            <p
                                ref={(el) =>
                                    (slidesSkillPara.current[index] = el)
                                }
                            >
                                {technologies.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </p>
                        </div>
                    ))}
                </div>
                <div ref={blockSkill} className="block-skill"></div>
            </div>
        </div>
    );
};

export default Skill;
