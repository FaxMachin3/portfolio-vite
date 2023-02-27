import { useEffect } from 'react';
import { ANCHORS, SLIDE_DELAY } from '../common/constants';
import { throttle } from '../utils/common';

const useArrowNavigation = (setDestination) => {
    useEffect(() => {
        const onArrowClick = throttle((event) => {
            if (event.keyCode === 38) {
                setDestination((prevDest) => {
                    const newDest = ANCHORS[ANCHORS.indexOf(prevDest) - 1];
                    window.location.hash = `#${newDest}`;
                    return newDest;
                });
            } else if (event.keyCode === 40) {
                setDestination((prevDest) => {
                    const newDest = ANCHORS[ANCHORS.indexOf(prevDest) + 1];
                    window.location.hash = `#${newDest}`;
                    return newDest;
                });
            }
        }, SLIDE_DELAY);

        window.addEventListener('keydown', onArrowClick);

        return () => {
            window.removeEventListener('keydown', onArrowClick);
        };
    }, []);
};

export default useArrowNavigation;
