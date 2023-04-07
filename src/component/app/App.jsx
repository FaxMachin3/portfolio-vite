import React, { useState, useEffect } from 'react';
import {
    SECTIONS,
    SLIDE_DELAY,
    ANCHORS,
    THEME,
    DEFAULT_SECTION_REFS,
} from '../../common/constants';
import Error from '../error/Error';
import Indicators from '../indicators/Indicators';
import Navbar from '../navbar/Navbar';
import useAnimate from '../../hooks/useAnimate';
import useTheme from '../../hooks/useTheme';
import useArrowNavigation from '../../hooks/useArrowNavigation';
import useLoader from '../../hooks/useLoader';
import fullpage from 'fullpage.js';

import './App.scss';

const App = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('current-theme') ?? THEME.LIGHT
    );
    const [destination, setDestination] = useState(ANCHORS[0]);
    const [sectionRefs, setSectionRefs] = useState(DEFAULT_SECTION_REFS);

    useTheme(theme);
    useArrowNavigation(setDestination);
    useAnimate(destination, sectionRefs);
    useLoader();

    useEffect(() => {
        new fullpage('#fullpage', {
            autoScrolling: true,
            scrollHorizontally: true,
            licenseKey: 'YOUR_KEY_HERE',
            scrollingSpeed: SLIDE_DELAY,
            anchors: ANCHORS,
            onLeave: (_origin, destination, _direction) =>
                setDestination(destination.anchor),
            easingcss3: 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
            dragAndMove: true,
        });
    }, []);

    return (
        <Error>
            <Navbar
                destination={destination}
                setDestination={setDestination}
                theme={theme}
                setTheme={setTheme}
            />
            <Indicators
                destination={destination}
                setDestination={setDestination}
            />
            <div id="fullpage">
                {SECTIONS.map(({ Component, anchor }) => (
                    <section key={anchor} className="section">
                        <Component
                            destination={destination}
                            setSectionRefs={setSectionRefs}
                        />
                    </section>
                ))}
            </div>
        </Error>
    );
};

export default App;
