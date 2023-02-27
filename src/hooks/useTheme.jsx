import { useEffect } from 'react';
import { THEME_STYLE } from '../common/constants';

const useTheme = (theme) => {
    useEffect(() => {
        document.documentElement.setAttribute('style', THEME_STYLE[theme]);
    }, [theme]);
};

export default useTheme;
