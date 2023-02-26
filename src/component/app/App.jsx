import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Home from '../home/Home';
import About from '../about/About';
import Skill from '../skill/Skill';
import Project from '../project/Project';
import Contact from '../contact/Contact';

import './App.scss';

const App = () => {
    return (
        <ReactFullpage
            licenseKey={'YOUR_KEY_HERE'}
            scrollingSpeed={1000} /* Options here */
            anchors={['home', 'about', 'skill', 'project', 'contact']}
            // onLeave={(data) => console.log('onLeave', { data })}
            // afterLoad={(data) => console.log('afterLoad', { data })}
            // afterSlideLoad={(data) => console.log('afterSlideLoad', { data })}
            dragAndMove
            navigation
            render={({ state, fullpageApi }) => {
                console.log('app', { state, fullpageApi });

                return (
                    <ReactFullpage.Wrapper>
                        <section className="section">
                            <Home />
                        </section>
                        <section className="section">
                            <About />
                        </section>
                        <section className="section">
                            <Skill />
                        </section>
                        <section className="section">
                            <Project />
                        </section>
                        <section className="section">
                            <Contact />
                        </section>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
};

export default App;
