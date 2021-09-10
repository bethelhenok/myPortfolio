import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bethel | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello my name is',
  name: 'Bethel',
  subtitle: "I'm a computer science student",
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hey',
  paragraphTwo: 'Beth',
  paragraphThree: 'Me',
  resume:
    'https://docs.google.com/document/d/1aJ1w31Xv7BUw71qKaNGtvBTy497KfNF2/edit?usp=sharing&ouid=117610390018384376765&rtpof=true&sd=true', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'portfolio.png',
    title: 'My Online Portfolio',
    info: 'Online portfolio made using Gatsby',
    info2: '',
    url: '/',
    repo: 'https://github.com/bethelHenok/myPortfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'communityCen.png',
    title: 'Community Center Volunteering',
    info: 'I volunteered here',
    info2: '',
    url: 'https://www.montgomerycountymd.gov/rec/facilities/recreationcenters/praisner.html',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'bethelhenok155@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/bethelhenok/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/bethelhenok',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
