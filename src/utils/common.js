export function throttle(fn, delay, context) {
    let run = true;

    return (...args) => {
        if (run) {
            fn.apply(context, args);
            run = false;
            setTimeout(() => {
                run = true;
            }, delay);
        }
    };
}
