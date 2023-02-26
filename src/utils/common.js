export function throttle(fn, delay, context) {
    let run = true;

    return (...args) => {
        if (run) {
            console.log('ran', { run });
            fn.apply(context, args);
            run = false;
            setTimeout(() => {
                console.log('changed', { run });
                run = true;
            }, delay);
        }
    };
}
