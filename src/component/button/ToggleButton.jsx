import React, { useState, useEffect, useRef, useContext } from 'react';
import './ToggleButton.scss';

const ToggleButton = () => {
    let toggleButton = useRef(null);
    let toggleButtonCircle = useRef(null);

    // change background
    useEffect(() => {
        toggleButton.current.addEventListener('click', () => {
            changeTheme((prevState) => (prevState = !prevState));
        });

        return () => {
            toggleButton.current.removeEventListener('click', () => {
                changeTheme((prevState) => (prevState = !prevState));
            });
        };
    }, []);

    return (
        <div className="outer" ref={toggleButton}>
            <div className="inner" ref={toggleButtonCircle}></div>
        </div>
    );
};

export default ToggleButton;
