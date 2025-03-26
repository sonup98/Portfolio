import { meta,  } from "../assets/images";
import {
    
    contact,
    css,
    
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Associate Software developer",
        company_name: "Vanilla Networks Pvt Ltd",
        icon: react,
        iconBg: "#accbe1",
        date: "Sept 2022 - July 2024",
        points: [
            "Provided end-to-end web development services for clients and in-house projects, including front-end ,back-end, and ensuring seamless deployment and project efficiency",
            "Played a pivotal role in the development of a complete admin dashboard for a client, spearheading both frontend and backend tasks, encompassing State management and REST API integration",
            "Contributed to the front-end development of a fullscale e-commerce website, converting Figma designs into responsive React Components",
            "Developed a React Native mobile app utilizing Firebase for medication reminders, ensuring timely notifications for patients",
            "Implemented Stripe payment gateways seamlessly into an established e-commerce website, enhancing its payment processing capabilities",
            "Handled Dockerization, database schema design, and NoSQL implementation across various client projects",
            "Worked on a project implementing functionality to retrieve, store, update, and delete components using Vue 3 as the frontend and Laravel for the backend with REST APIs, allowing users to directly access component code in various languages like React, Vue, vanilla HTML, and Angular"

        ],
    },
    {
        title: "Associate Trainee",
        company_name: "Vanilla Network Pvt Ltd",
        icon: react,
        iconBg: "#fbc3bc",
        date: "June 2022 - sept 2022",
        points: [
            "Training on MERN Stack and Advance JavaScript",
            "Training in core PHP, jQuery and MySQL",
            "Training In MVC architecture and Laravel framework"
        ],
    },
        {
        title: "Front End Developer",
        company_name: "VenQ",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "April 2022 - May 2022",
        points: [
            "It was a 1-month Internship where I worked in frontend development using react.js"
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sonup98',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Nike',
        description: 'Developed a responsive front-end UI for a Nike-themed website using Tailwind CSS to explore and demonstrate its capabilities. Implemented a modern, user-friendly design inspired by Adrian Hajdin’s UI while ensuring full responsiveness across various devices.',
        link: 'https://sonup98.github.io/nike/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Article Hub – Next.js Web Application',
        description: 'Developed a dynamic article-sharing platform to enhance expertise in Next.js, focusing on SSR, CSR, and PPR handling. Integrated Sanity as a headless CMS for content management and Sentry for error monitoring. Implemented a real-time article view counter to track engagement. Deployed the application on Vercel for seamless performance and scalability',
        link: 'https://article-psi-dusky.vercel.app/',
    },
    
];