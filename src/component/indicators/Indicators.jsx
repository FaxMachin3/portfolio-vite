import React, { useContext } from 'react';

import './IndicatorsStyle.scss';

const Indicators = () => {
    return (
        <ul className="indicators">
            <li className="bar" data-section="home"></li>
            <li className="bar" data-section="about"></li>
            <li className="bar" data-section="skill"></li>
            <li className="bar" data-section="project"></li>
            <li className="bar" data-section="contact"></li>
        </ul>
    );
};

export default Indicators;
