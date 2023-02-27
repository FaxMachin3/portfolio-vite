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
