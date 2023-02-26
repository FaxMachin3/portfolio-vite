import { gsap, Power2 } from 'gsap';

const skillAnimate = (args) => {
    if (args.length === 0) return;

    const [
        slidesSkillH2,
        slidesSkillPara,
        blockSkill,
        imgSkill,
        headingSkill,
        lineSkill,
        leftArrowSkill,
        rightArrowSkill,
        rightContainerSkill,
    ] = args;

    const xTrans =
        rightContainerSkill.current.getBoundingClientRect().width - 50;

    const timelineSkill = gsap.timeline({
        defaults: {
            duration: 1,
            autoAlpha: 0,
            ease: Power2.easeInOut,
            pointerEvents: 'none',
        },
    });

    window.matchMedia('(min-width: 769px)').matches
        ? timelineSkill
              .from(imgSkill.current, { scale: 0 })
              .from(
                  slidesSkillH2.current,
                  { y: 100, stagger: { each: 0.1 } },
                  '-=1'
              )
              .from(
                  slidesSkillPara.current,
                  { y: 100, stagger: { each: 0.1 } },
                  '-=1.3'
              )
              .from(blockSkill.current, { x: xTrans, scaleX: 0 }, '-=0.8')
        : timelineSkill
              .from(lineSkill.current, { x: 100 })
              .from(headingSkill.current, {}, '-=1')
              .from(imgSkill.current, { scale: 0 }, '-=1')
              .from(
                  slidesSkillH2.current,
                  { y: 100, stagger: { each: 0.1 } },
                  '-=1'
              )
              .from(
                  slidesSkillPara.current,
                  { y: 100, stagger: { each: 0.1 } },
                  '-=1.2'
              )
              .from(blockSkill.current, { x: xTrans, scaleX: 0 }, '-=0.8')
              .from(
                  [leftArrowSkill.current, rightArrowSkill.current],
                  {},
                  '-=1'
              );
};

export default skillAnimate;
