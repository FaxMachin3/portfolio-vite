import { useEffect } from 'react';
import { THEME } from '../common/constants';

const useLoader = () => {
    useEffect(() => {
        const locData = localStorage.getItem('current-theme');
        const loaderContainer =
            window.document.querySelector('.loader-container');
        loaderContainer.classList.add('fade-loader');
        const circleLoaders =
            window.document.querySelectorAll('.circle-loader');
        const colorBG = locData === THEME.DARK ? '#A13251' : '#008F96';
        circleLoaders.forEach((circle) => {
            setTimeout(() => {
                circle.style.backgroundColor = colorBG;
            }, 75);
        });
    }, []);
};

export default useLoader;
