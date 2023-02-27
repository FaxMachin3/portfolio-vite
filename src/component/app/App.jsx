import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
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

import './App.scss';

const App = () => {
    const [theme, setTheme] = useState(THEME.DARK);
    const [destination, setDestination] = useState(ANCHORS[0]);
    const [sectionRefs, setSectionRefs] = useState(DEFAULT_SECTION_REFS);

    useTheme(theme);
    useArrowNavigation(setDestination);
    useAnimate(destination, sectionRefs);

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
            <ReactFullpage
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={SLIDE_DELAY}
                anchors={ANCHORS}
                onLeave={(_origin, destination, _direction) =>
                    setDestination(destination.anchor)
                }
                dragAndMove
                render={(rfpProps) => (
                    <ReactFullpage.Wrapper>
                        {SECTIONS.map(({ Component, anchor }) => (
                            <section key={anchor} className="section">
                                <Component
                                    destination={destination}
                                    setSectionRefs={setSectionRefs}
                                    {...rfpProps}
                                />
                            </section>
                        ))}
                    </ReactFullpage.Wrapper>
                )}
            />
        </Error>
    );
};

export default App;
