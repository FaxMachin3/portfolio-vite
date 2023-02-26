import { useEffect } from 'react';
import gsap from 'gsap';
import { SECTION_ANIMATE, SLIDE_DELAY } from '../common/constants';

const useAnimate = (destination, sectionRefs) => {
    useEffect(() => {
        console.log({ destination, sectionRefs });

        const gsapContext = gsap.context(() => {
            SECTION_ANIMATE[destination]?.(sectionRefs?.[destination]);
        });

        return () => {
            setTimeout(() => {
                gsapContext?.revert();
            }, SLIDE_DELAY);
        };
    }, [destination, sectionRefs]);
};

export default useAnimate;
