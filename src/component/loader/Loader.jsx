import React, { useContext } from 'react';
import ThemeContext from '../../common/ThemeContext';
import './LoaderStyle.scss';

const miniCircles = ['mini-circle1', 'mini-circle2', 'mini-circle3'];

const Loader = () => {
    const { currentTheme } = useContext(ThemeContext);

    const { secondary } = currentTheme;

    const borderColor = {
        borderColor: secondary,
    };

    return (
        <div className="mini-loader-container">
            {miniCircles.map((circle) => (
                <div key={circle}
                    style={borderColor}
                    className={`mini-loader mini-${circle}`}
                ></div>
            ))}
        </div>
    );
};

export default Loader;
