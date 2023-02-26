import { useCallback } from 'react';
import { throttle } from '../utils/common';

const useThrottle = (fn, delay, context = {}) => {
    const throttleMemo = useCallback(throttle(fn, delay, context), []);

    return throttleMemo;
};

export default useThrottle;
