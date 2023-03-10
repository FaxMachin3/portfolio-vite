import { useState } from 'react';
import { LINK, SLIDE_DELAY } from '../../common/constants';
import useThrottle from '../../hooks/useThrottle';
import ToggleButton from '../button/ToggleButton';

import './NavbarStyle.scss';

const Navbar = ({ destination, setDestination, theme, setTheme }) => {
    const [hamOpen, setHamOpen] = useState(false);

    const onLinkClick = useThrottle((e) => {
        const anchor = e.target.dataset.section ?? '';

        if (anchor.length < 1) return;
        setDestination(anchor);
        setHamOpen((prevState) => !prevState);
        window.location.hash = `#${anchor}`;
    }, SLIDE_DELAY);

    const onHamburgerClick = () => {
        setHamOpen((prevState) => !prevState);
    };

    return (
        <nav className="nav-bar">
            <h1 className={`logo  ${hamOpen ? 'animate-hamburger' : ''}`}>
                <a href="#home">SR</a>
            </h1>

            <div className="hamburger" onClick={onHamburgerClick}>
                <div
                    className={`nav-circle ${
                        hamOpen ? 'animate-hamburger' : ''
                    }`}
                ></div>
                <div
                    className={`ham upper-layer ${
                        hamOpen ? 'animate-hamburger' : ''
                    }`}
                ></div>
                <div
                    className={`ham middle-layer ${
                        hamOpen ? 'animate-hamburger' : ''
                    }`}
                ></div>
                <div
                    className={`ham lower-layer ${
                        hamOpen ? 'animate-hamburger' : ''
                    }`}
                ></div>
            </div>

            <ul
                className={`nav-links  ${hamOpen ? 'animate-hamburger' : ''}`}
                onClick={onLinkClick}
            >
                {LINK.map(({ text, anchor }) => (
                    <li
                        className={`${hamOpen ? 'animate-hamburger' : ''}`}
                        key={anchor}
                    >
                        <a
                            className={`${anchor} link ${
                                destination === anchor ? 'active' : ''
                            }`}
                            data-section={anchor}
                        >
                            {text}
                        </a>
                    </li>
                ))}

                <li
                    className={`toggle-button ${
                        hamOpen ? 'animate-hamburger' : ''
                    }`}
                >
                    <ToggleButton
                        setHamOpen={setHamOpen}
                        theme={theme}
                        setTheme={setTheme}
                    />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
