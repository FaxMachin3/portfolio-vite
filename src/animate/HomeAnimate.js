import { gsap, Power2 } from 'gsap';

const homeAnimate = (args) => {
    if (args.length === 0) return;

    const [arrow, buttonHome, rightContainerHome, textHome] = args;

    const timelineHome = gsap.timeline({
        defaults: {
            duration: 1,
            opacity: 0,
            ease: Power2.easeInOut,
            pointerEvents: 'none',
        },
    });

    timelineHome
        .from(textHome.current, {
            delay: 0.5,
            y: 100,
            stagger: { each: 1 },
        })
        .from(rightContainerHome.current, { y: -100 })
        .from(arrow.current, { y: -100 }, '-=1')
        .from(buttonHome.current, { y: 100 }, '-=1');

    gsap.to(arrow.current, {
        delay: timelineHome.duration(),
        duration: 1,
        yPercent: 20,
        yoyo: true,
        repeat: -1,
        ease: 'slow(0.5, 0.4, false)',
    });
};

export default homeAnimate;
