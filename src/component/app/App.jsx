import React, { useState, useRef, useEffect } from 'react';

import ThemeContext from '../../common/ThemeContext';

import './App.scss';

import Home from '../home/Home';
import About from '../about/About';
import Skill from '../skill/Skill';
import Project from '../project/Project';
import Contact from '../contact/Contact';
import Navbar from '../navbar/Navbar';
import Indicators from '../indicators/Indicators';
import Error from '../error/Error';

import { smoothScroll } from './SmoothScroll';

const App = () => {
    const animationDuration = useRef(500);
    let lastTime = useRef(0);
    let position = useRef(0);
    let scrolled = useRef(true);
    let hashTimer = useRef(null);
    let hashCheck = useRef(true);
    const disableScroll = useRef(true); // scroll interval of 1000ms
    const allowScroll = useRef(true); // stops user to scroll when the ham-menu is open
    const [currentPage, changeCurrentPage] = useState('.home');
    const [theme, changeTheme] = useState(true);
    const prevDelta = useRef(0);
    let timer; // on scroll (wheel)
    const pages = {
        '.home': {
            prev: '.home',
            next: '.about',
        },
        '.about': {
            prev: '.home',
            next: '.skill',
        },
        '.skill': {
            prev: '.about',
            next: '.project',
        },
        '.project': {
            prev: '.skill',
            next: '.contact',
        },
        '.contact': {
            prev: '.project',
            next: '.contact',
        },
    };

    const themeStyle = {
        dark: {
            background: '#121212',
            primary: '#DADADA',
            secondary: '#A13251',
        },
        light: {
            background: '#E1E1E1',
            primary: '#333333',
            secondary: '#008F96',
        },
    };

    let currentTheme = theme === true ? themeStyle.dark : themeStyle.light;

    const smoothScrollWheel = (event) => {
        const currentTime = new Date().getTime();
        clearTimeout(timer);
        timer = setTimeout(() => {
            prevDelta.current = 0;
        }, 100);
        if (currentTime - lastTime.current < animationDuration.current) {
            return false;
        } else {
            if (event.deltaY > 0 && event.deltaY > prevDelta.current) {
                changeCurrentPage(
                    (prevPage) => (prevPage = pages[prevPage].next)
                );
            } else if (event.deltaY < 0 && event.deltaY < prevDelta.current) {
                changeCurrentPage(
                    (prevPage) => (prevPage = pages[prevPage].prev)
                );
            }
            prevDelta.current = event.deltaY;
            lastTime.current = currentTime;
        }
    };

    const smoothScrollArrow = (event) => {
        if (scrolled.current) {
            scrolled.current = !scrolled.current;
            if (event.keyCode === 40) {
                changeCurrentPage(
                    (prevPage) => (prevPage = pages[prevPage].next)
                );
            } else if (event.keyCode === 38) {
                changeCurrentPage(
                    (prevPage) => (prevPage = pages[prevPage].prev)
                );
            }
            setTimeout(() => {
                scrolled.current = !scrolled.current;
            }, 750);
        }
    };

    const handleTouchStart = (event) => {
        if (scrolled.current && event.touches.length === 1) {
            position.current = event.changedTouches[0].clientY;
        }
    };
    const handleTouchMove = (event) => {
        if (scrolled.current && event.touches.length === 1) {
            position.current -= event.changedTouches[0].clientY;
            scrolled.current = !scrolled.current;
        }
    };
    const handleTouchEnd = (event) => {
        if (!scrolled.current) {
            scrolled.current = !scrolled.current;
            if (position.current > 0) {
                changeCurrentPage(
                    (prevPage) => (prevPage = pages[prevPage].next)
                );
            } else if (position.current < 0) {
                changeCurrentPage(
                    (prevPage) => (prevPage = pages[prevPage].prev)
                );
            }
        }
    };

    // preloader and local storage thingy
    useEffect(() => {
        const locData = JSON.parse(localStorage.getItem('current-theme'));
        if (!locData) {
            changeTheme(locData);
        }
        const loaderContainer =
            window.document.querySelector('.loader-container');
        loaderContainer?.classList.add('fade-loader');
        const circleLoaders =
            window.document.querySelectorAll('.circle-loader');
        const colorBG = locData ? '#A13251' : '#008F96';
        circleLoaders?.forEach((circle) => {
            setTimeout(() => {
                circle.style.backgroundColor = colorBG;
            }, 75);
        });

        setTimeout(() => {
            if (loaderContainer) loaderContainer.style.display = 'none';
        }, 2000);
        // eslint-disable-next-line
    }, []);

    // hashchange
    useEffect(() => {
        window.addEventListener('hashchange', () => {
            const getHash = window.location.hash.split('#')[1];
            Object.keys(pages).forEach((page) => {
                if (`.${getHash}` === page && hashCheck.current) {
                    changeCurrentPage(`.${getHash}`);
                }
            });
        });
        // eslint-disable-next-line
    }, []);

    // setting session storage for currentPage
    useEffect(() => {
        const getSession = JSON.parse(sessionStorage.getItem('current-page'));
        if (getSession === null) {
            sessionStorage.setItem('current-page', JSON.stringify(currentPage));
        } else {
            hashCheck.current = false;
            clearTimeout(hashTimer.current);
            changeCurrentPage(getSession);
            hashTimer.current = setTimeout(() => {
                hashCheck.current = true;
            }, 1000);
        }
        // eslint-disable-next-line
    }, []);

    // setting local storage for currentTheme and metaTheme change
    useEffect(() => {
        localStorage.setItem('current-theme', JSON.stringify(theme));

        const metaTheme = window.document.querySelector(
            "meta[name='theme-color']"
        );

        if (metaTheme) metaTheme.content = theme ? '#121212' : '#E1E1E1';
    }, [theme]);

    // mobile smoothscroll
    useEffect(() => {
        const sections = window.document.querySelectorAll('section');

        sections.forEach((section) => {
            section.addEventListener(
                'touchstart',
                (event) => {
                    if (disableScroll.current) {
                        allowScroll.current && handleTouchStart(event);
                    }
                },
                {
                    passive: false,
                }
            );
        });

        sections.forEach((section) => {
            section.addEventListener(
                'touchmove',
                (event) => {
                    if (disableScroll.current) {
                        allowScroll.current && handleTouchMove(event);
                    }
                },
                {
                    passive: false,
                }
            );
        });

        sections.forEach((section) => {
            section.addEventListener(
                'touchend',
                (event) => {
                    if (disableScroll.current) {
                        hashCheck.current = false;
                        clearTimeout(hashTimer.current);
                        allowScroll.current && handleTouchEnd(event);
                        disableScroll.current = !disableScroll.current;
                        hashTimer.current = setTimeout(() => {
                            hashTimer.current = true;
                        }, 1000);
                        setTimeout(() => {
                            disableScroll.current = !disableScroll.current;
                        }, 1000);
                    }
                },
                {
                    passive: false,
                }
            );
        });

        // unsubscribing on unmount
        return () => {
            window.removeEventListener(
                'touchstart',
                (event) => {
                    handleTouchStart(event);
                },
                {
                    passive: false,
                }
            );
            window.removeEventListener(
                'touchmove',
                (event) => {
                    handleTouchMove(event);
                },
                {
                    passive: false,
                }
            );
            window.removeEventListener(
                'touchend',
                (event) => {
                    handleTouchEnd(event);
                },
                {
                    passive: false,
                }
            );
        };
        // eslint-disable-next-line
    }, []);

    // desktop smoothscroll
    useEffect(() => {
        const sections = window.document.querySelectorAll('section');

        window.document.addEventListener('keydown', (event) => {
            hashCheck.current = false;
            clearTimeout(hashTimer.current);
            smoothScrollArrow(event);
            hashTimer.current = setTimeout(() => {
                hashCheck.current = true;
            }, 1000);
        });

        sections.forEach((section) => {
            section.addEventListener(
                'wheel',
                (event) => {
                    hashCheck.current = false;
                    clearTimeout(hashTimer.current);
                    smoothScrollWheel(event);
                    hashTimer.current = setTimeout(() => {
                        hashCheck.current = true;
                    }, 1000);
                },
                {
                    passive: false,
                }
            );
        });

        // unsubscribing on unmount
        return () => {
            sections.forEach((section) => {
                section.removeEventListener(
                    'wheel',
                    (event) => smoothScrollWheel(event),
                    {
                        passive: false,
                    }
                );
            });
        };
        // eslint-disable-next-line
    }, []);

    // smooth scroll
    useEffect(() => {
        smoothScroll(currentPage);

        // setting current-page on session storage
        sessionStorage.setItem('current-page', JSON.stringify(currentPage));
    }, [currentPage]);

    // body bg change on theme change
    useEffect(() => {
        window.document.body.style.backgroundColor = currentTheme.background;
    }, [currentTheme]);

    // intersection observer
    useEffect(() => {
        const intersectingDivs =
            window.document.querySelectorAll('.intersecting-div');
        const bars = window.document.querySelectorAll('.bar');

        // setting actual height onLoad
        window.document.documentElement.style.setProperty(
            '--actual-height',
            `${window.innerHeight}px`
        );

        // setting actual height onResize
        window.addEventListener('resize', () => {
            window.document.documentElement.style.setProperty(
                '--actual-height',
                `${window.innerHeight}px`
            );
        });

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    let scale = '';
                    const newHash = entry.target.getAttribute('data-section');

                    window.location.hash = newHash;

                    if (window.matchMedia('(max-width: 768px)').matches) {
                        scale = 'scaleY';
                    } else {
                        scale = 'scaleX';
                    }

                    bars.forEach((bar) => {
                        const section = bar.getAttribute('data-section');
                        if (section === newHash) {
                            bar.style.transform = `${scale}(1)`;
                        } else {
                            bar.style.transform = `${scale}(0.5)`;
                        }
                    });
                }
            }, options);
        });

        intersectingDivs.forEach((iDiv) => {
            observer.observe(iDiv);
        });

        window.document.body.style.backgroundColor = currentTheme.background;

        return () => {
            observer.disconnect();
        };
        // eslint-disable-next-line
    }, []);

    return (
        <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
            <Navbar
                currentPage={currentPage}
                changePage={changeCurrentPage}
                scroll={allowScroll}
                hashCheck={hashCheck}
            />
            <Error>
                <Indicators />
                <Home />
                <About theme={theme} />
                <Skill />
                <Project theme={theme} />
                <Contact />
            </Error>
        </ThemeContext.Provider>
    );
};

export default App;
