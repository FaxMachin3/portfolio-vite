import { useEffect } from 'react';
import { gsap, Power2 } from 'gsap';

const useSkillSlideAnimate = (
    currentSlide,
    slidesSkillH2,
    slidesSkillPara,
    blockSkill,
    arrowClicked
) => {
    useEffect(() => {
        const heading = slidesSkillH2.current[currentSlide];
        const para = Array.from(
            slidesSkillPara.current[currentSlide].childNodes
        );

        const gsapContext = gsap.context(() => {
            if (arrowClicked) {
                const timelineText = gsap.timeline({
                    defaults: {
                        opacity: 0,
                        duration: 0.75,
                        ease: Power2.easeInOut,
                    },
                });

                gsap.to(blockSkill.current, {
                    duration: 0.15,
                    x: -5,
                    ease: Power2.easeOut,
                });

                gsap.to(blockSkill.current, {
                    duration: 0.15,
                    x: 0,
                    delay: 0.15,
                    ease: Power2.easeOut,
                });

                timelineText.from(heading, { delay: 0.3 }).from(
                    para,
                    {
                        y: 100,
                        stagger: {
                            each: 0.05,
                        },
                    },
                    '-=0.65'
                );
            }
        });

        return () => gsapContext.revert();
    }, [currentSlide,arrowClicked]);
};

export default useSkillSlideAnimate;
