import { useState } from 'react';
import { INDICATORS } from '../../common/constants';
import { SLIDE_DELAY } from '../../common/constants';
import useThrottle from '../../hooks/useThrottle';

import './IndicatorsStyle.scss';

const Indicators = ({ destination, setDestination }) => {
    const onIndicatorClick = useThrottle((e) => {
        const anchor = e.target.dataset.section ?? '';

        if (anchor.length < 1) return;

        setDestination(anchor);
        window.location.hash = `#${anchor}`;
    }, SLIDE_DELAY);

    return (
        <ul className="indicators" onClick={onIndicatorClick}>
            {INDICATORS.map((ind) => (
                <li
                    key={ind}
                    className={`bar ${destination === ind ? 'active' : ''}`}
                    data-section={ind}
                ></li>
            ))}
        </ul>
    );
};

export default Indicators;
