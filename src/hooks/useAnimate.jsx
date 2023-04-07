import { useEffect } from 'react';
import gsap from 'gsap';
import { SECTION_ANIMATE, SLIDE_DELAY } from '../common/constants';

const useAnimate = (destination, sectionRefs) => {
    useEffect(() => {
        console.log('mounted', {
            destination,
            sectionRefs,
            ref: sectionRefs[destination],
            resume: sectionRefs[destination]?.resume,
        });
        sectionRefs[destination]?.resume?.(true);

        return () => {
            console.log('unmounted', {
                sectionRefs,
                ref: sectionRefs[destination],
            });
            sectionRefs[destination]?.restart?.();
            sectionRefs[destination]?.pause?.();
        };
    }, [destination, sectionRefs]);
};

export default useAnimate;
