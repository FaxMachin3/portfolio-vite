import { useState, useRef, useEffect } from "react";
import { gsap, Power2 } from "gsap";
import { LINK, SLIDE_DELAY } from "../../common/constants";
import useThrottle from "../../hooks/useThrottle";
import ToggleButton from "../button/ToggleButton";

import "./NavbarStyle.scss";

let hamOpen = false;

const Navbar = ({ destination, setDestination, theme, setTheme }) => {
  const navCircleRef = useRef(null);
  const upperLayerRef = useRef(null);
  const middleLayerRef = useRef(null);
  const lowerLayerRef = useRef(null);
  const linksRef = useRef(new Array(LINK.length));
  const toggleRef = useRef(null);

  const navCircleGsap = useRef(null);
  const upperLayerGsap = useRef(null);
  const middleLayerGsap = useRef(null);
  const lowerLayerGsap = useRef(null);
  const linksGsap = useRef(null);
  const toggleGsap = useRef(null);

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      navCircleGsap.current = gsap.to(navCircleRef.current, {
        duration: 0.5,
        ease: Power2.easeOut,
        x: -200,
        y: 250,
      });
      middleLayerGsap.current = gsap.to(middleLayerRef.current, {
        duration: 0.5,
        ease: Power2.easeInOut,
        x: 100,
        alpha: 0,
      });
      upperLayerGsap.current = gsap.to(upperLayerRef.current, {
        duration: 0.5,
        ease: Power2.easeInOut,
        y: "1rem",
        rotate: "45deg",
      });
      lowerLayerGsap.current = gsap.to(lowerLayerRef.current, {
        duration: 0.5,
        ease: Power2.easeInOut,
        y: "-1rem",
        rotate: "-45deg",
      });
      linksGsap.current = gsap.to(linksRef.current, {
        ease: Power2.easeInOut,
        y: 0,
        opacity: 1,
        pointerEvents: "all",
        stagger: { each: 0.03 },
      });
      toggleGsap.current = gsap.to(toggleRef.current, {
        duration: 0.5,
        ease: Power2.easeInOut,
        x: 0,
        pointerEvents: "all",
        opacity: 1,
      });

      navCircleGsap.current.pause();
      middleLayerGsap.current.pause();
      upperLayerGsap.current.pause();
      lowerLayerGsap.current.pause();
      linksGsap.current.pause();
      toggleGsap.current.pause();
    });

    return () => {
      gsapContext?.revert();
    };
  }, []);

  const toggleNav = (isHamOpen = true) => {
    if (isHamOpen) {
      navCircleGsap.current.play();
      middleLayerGsap.current.play();
      upperLayerGsap.current.play();
      lowerLayerGsap.current.play();
      linksGsap.current.play();
      toggleGsap.current.play();
    } else {
      navCircleGsap.current.reverse();
      middleLayerGsap.current.reverse();
      upperLayerGsap.current.reverse();
      lowerLayerGsap.current.reverse();
      linksGsap.current.reverse();
      toggleGsap.current.reverse();
    }
  };

  const onLinkClick = useThrottle((e) => {
    const anchor = e.target.dataset.section ?? "";

    if (anchor.length < 1) return;

    setDestination(anchor);
    toggleNav(false);
    window.location.hash = `#${anchor}`;
  }, SLIDE_DELAY);

  const onHamburgerClick = (e) => {
    hamOpen = !hamOpen;
    toggleNav(hamOpen);
  };

  return (
    <nav className="nav-bar">
      <h1 className="logo">
        <a href="#home">SR</a>
      </h1>

      <div
        data-nav-circle="nav-circle"
        ref={navCircleRef}
        className="nav-circle"
      ></div>
      <div className="hamburger" onClick={onHamburgerClick}>
        <div ref={upperLayerRef} className="ham upper-layer"></div>
        <div ref={middleLayerRef} className="ham middle-layer"></div>
        <div ref={lowerLayerRef} className="ham lower-layer"></div>
      </div>

      <ul className="nav-links" onClick={onLinkClick}>
        {LINK.map(({ text, anchor }, index) => (
          <li ref={(el) => (linksRef.current[index] = el)} key={anchor}>
            <a
              className={`${anchor} link ${
                destination === anchor ? "active" : ""
              }`}
              data-section={anchor}
            >
              {text}
            </a>
          </li>
        ))}

        <li ref={toggleRef} className="toggle-button">
          <ToggleButton toggleNav={toggleNav} theme={theme} setTheme={setTheme} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
