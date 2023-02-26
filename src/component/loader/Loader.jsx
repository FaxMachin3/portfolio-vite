import React from 'react';
import './LoaderStyle.scss';

const miniCircles = ['mini-circle1', 'mini-circle2', 'mini-circle3'];

const Loader = () => {
    return (
        <div className="mini-loader-container">
            {miniCircles.map((circle) => (
                <div
                    key={circle}
                    className={`mini-loader mini-${circle}`}
                ></div>
            ))}
        </div>
    );
};

export default Loader;
