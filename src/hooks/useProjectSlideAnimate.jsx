import { useEffect, useRef } from 'react';
import { gsap, Power2 } from 'gsap';

const useProjectSlideAnimate = (
    currentSlide,
    textSlidesProjectH2,
    textSlidesProjectPara,
    linksProject,
    blockProject,
    arrowClicked,
    prevSlide
) => {
    const large = useRef(window.matchMedia('(min-width: 769px)').matches);

    useEffect(() => {
        const heading = textSlidesProjectH2.current[currentSlide];
        const para = textSlidesProjectPara.current[currentSlide];
        const links = Array.from(linksProject.current[currentSlide].childNodes);
        const prevCount = prevSlide;

        const gsapContext = gsap.context(() => {
            if (arrowClicked) {
                const timelineText = gsap.timeline({
                    defaults: {
                        opacity: 0,
                        duration: 0.75,
                        ease: Power2.easeInOut,
                    },
                });

                const prevH2 = textSlidesProjectH2.current[prevCount];
                const prevPara = textSlidesProjectPara.current[prevCount];
                const prevLink = Array.from(
                    linksProject.current[prevCount].childNodes
                );

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
                          .to(
                              prevPara,
                              { duration: 0.5, y: -100, opacity: 0 },
                              '-=0.4'
                          )
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
            }
        });

        return () => gsapContext.revert();
    }, [currentSlide, arrowClicked, prevSlide]);
};

export default useProjectSlideAnimate;
