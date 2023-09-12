import Home from '../component/home/Home';
import About from '../component/about/About';
import Skill from '../component/skill/Skill';
import Project from '../component/project/Project';
import Contact from '../component/contact/Contact';
import homeAnimate from '../animate/HomeAnimate';
import aboutAnimate from '../animate/AboutAnimate';
import skillAnimate from '../animate/SkillAnimate';
import projectAnimate from '../animate/ProjectAnimate';
import contactAnimate from '../animate/ContactAnimate';

import DarkWeather from '../assests/images/dark-weather.jpg';
import Socialize from '../assests/images/socialize.jpg';
import GetYourDreamJob from '../assests/images/get-your-dream-job.jpg';
import MyPortfolio from '../assests/images/my-portfolio.jpg';
import BookMyEvent from '../assests/images/book-my-event.jpg';
import APS from '../assests/images/arizona-public-service.jpg';

import ContactSVGInstagram from '../component/contact/ContactSVGInstagram';
import ContactSVGLinkedin from '../component/contact/ContactSVGLinkedin';
import ContactSVGFacebook from '../component/contact/ContactSVGFacebook';
import ContactSVGGithub from '../component/contact/ContactSVGGithub';

export const SLIDE_DELAY = 1000;

export const THEME = {
    DARK: 'DARK',
    LIGHT: 'LIGHT',
};

export const ANCHORS = ['home', 'about', 'skill', 'project', 'contact'];
export const INDICATORS = ANCHORS;

export const SECTION_ANIMATE = {
    home: homeAnimate,
    about: aboutAnimate,
    skill: skillAnimate,
    project: projectAnimate,
    contact: contactAnimate,
};

export const SECTIONS = [
    {
        anchor: 'home',
        Component: Home,
    },
    {
        anchor: 'about',
        Component: About,
    },
    {
        anchor: 'skill',
        Component: Skill,
    },
    {
        anchor: 'project',
        Component: Project,
    },
    {
        anchor: 'contact',
        Component: Contact,
    },
];

export const LINK = [
    { text: 'Home', anchor: 'home' },
    { text: 'About', anchor: 'about' },
    { text: 'Skill', anchor: 'skill' },
    { text: 'Project', anchor: 'project' },
    { text: 'Contact', anchor: 'contact' },
];

export const DEFAULT_SECTION_REFS = {
    home: [],
    about: [],
    skill: [],
    project: [],
    contact: [],
};

export const THEME_STYLE = {
    [THEME.DARK]:
        '--background: #121212; background-color: #121212; --primary: #DADADA;--secondary: #A13251',
    [THEME.LIGHT]:
        '--background: #E1E1E1; background-color: #E1E1E1; --primary: #333333;--secondary: #008F96',
};

export const SKILLS = [
    {
        heading: 'Programming Languages',
        technologies: ['Javascript/ Typescript', 'C#', 'Python'],
    },
    {
        heading: 'Backend',
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', '.Net'],
    },
    {
        heading: 'Frontend',
        technologies: ['React', 'Preact', 'Next.js', 'React Query', 'Zustand'],
    },
    {
        heading: 'Dev Tools & Other Skills',
        technologies: [
            'Git/ Github (Version Control)',
            'Figma/ Adobe XD (Design)',
        ],
    },
];

export const PROJECTS = [
    {
        imageDetails: { src: Socialize, alt: 'socialize' },
        projectDetails: {
            heading: 'Socialize',
            description:
                'Responsive, full stack, social-networking web app built using MERN stack with love.',
            links: {
                code: 'https://github.com/FaxMachin3/socialize',
                website: 'http://mighty-meadow-58912.herokuapp.com',
            },
        },
    },
    {
        imageDetails: { src: GetYourDreamJob, alt: 'get your dream job' },
        projectDetails: {
            heading: 'Get Your Dream Job',
            description:
                'MERN stack application for job seekers. Also used React Query and Zustand.',
            links: {
                code: 'https://github.com/FaxMachin3/get-your-dream-job-vite-full',
                website: 'https://getyourdreamjob.onrender.com/',
            },
        },
    },
    {
        imageDetails: { src: MyPortfolio, alt: 'portfolio' },
        projectDetails: {
            heading: 'My Portfolio',
            description:
                'I made this to improve and practice my front-end skills in 2020. This was made using React.js (Hooks). In 2023; refactored code, fixed some bugs and used Vite instead of Webpack.',
            links: {
                code: 'https://github.com/FaxMachin3/portfolio-vite',
                website: 'https://subhamraj.dev/',
            },
        },
    },
    {
        imageDetails: { src: APS, alt: 'arizona public service' },
        projectDetails: {
            heading: 'Arizona Public Service',
            description:
                "Cross-platform mobile app built using Xamarin native. I worked on Xamarin iOS front-end and integration; and integration of Microsoft's App Center.",
            links: {
                website:
                    'https://play.google.com/store/apps/details?id=com.aps.apsconsumerapp',
            },
        },
    },
    {
        imageDetails: { src: DarkWeather, alt: 'dark weather' },
        projectDetails: {
            heading: 'Dark Weather',
            description:
                "A small dark themed weather app built using Python's tkinter Library. Just enter a city or a country name to get the weather report.",
            links: {
                code: 'https://github.com/FaxMachin3/weather',
            },
        },
    },
    {
        imageDetails: { src: BookMyEvent, alt: 'book my event' },
        projectDetails: {
            heading: 'Book My Event',
            description:
                'This is pure, non-responsive-spaghetti code as this was the first college project I just made to have a taste of web development.',
            links: {
                code: 'https://github.com/FaxMachin3/BookMyEvent',
            },
        },
    },
];

export const CONTACTS = [
    {
        name: 'GitHub',
        Icon: ContactSVGGithub,
        website: 'https://github.com/FaxMachin3',
    },
    {
        name: 'Instagram',
        Icon: ContactSVGInstagram,
        website: 'https://www.instagram.com/subhamraj.dev',
    },
    {
        name: 'LinkedIn',
        Icon: ContactSVGLinkedin,
        website: 'https://www.linkedin.com/in/subhamraj',
    },
    {
        name: 'Facebook',
        Icon: ContactSVGFacebook,
        website: 'https://www.facebook.com/F4xMachin3',
    },
];
