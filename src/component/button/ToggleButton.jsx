import React from 'react';
import { THEME } from '../../common/constants';
import './ToggleButton.scss';

const ToggleButton = ({ setHamOpen, theme, setTheme }) => {
    const onToggleClick = () => {
        setHamOpen(false);
        setTheme((prevTheme) =>
            prevTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK
        );
    };

    return (
        <div className="outer" onClick={onToggleClick}>
            <div className={`inner ${theme === THEME.LIGHT ? 'circle' : ''}`} />
        </div>
    );
};

export default ToggleButton;
