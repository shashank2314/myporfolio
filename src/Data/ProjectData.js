import studynotion from "../assets/studynotion.png";
import myportfolio from "../assets/myporfolio.png";
import shopapp from "../assets/shopapp.png";
import HelloHii from "../assets/HelloHii.png";
import ExpenseTracker from "../assets/ExpenseTracker.png";

export const myprojects = [
    {
        id: 1,
        name: "StudyNotion",
        description: [
            "A comprehensive e-learning platform that allows users to create, consume, and review educational content.",
            "Developed with a modern tech stack, the platform ensures a seamless user experience and scalable performance."
        ],
        usedTech: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "Tailwind CSS"],
        link: "https://study-notion-app-two.vercel.app/",
        codelink: "https://github.com/shashank2314/StudyNotion-App",
        image: studynotion
    },
    {
        id: 2,
        name: "HelloHii",
        description: [
            "A feature-rich social networking platform supporting post sharing, user authentication, and real-time messaging.",
            "Includes a dynamic feed, user follow functionality, and seamless communication using WebSockets."
        ],
        usedTech: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "Socket.io", "Tailwind CSS"],
        link: "https://hellohi-three.vercel.app/",
        codelink: "https://github.com/shashank2314/Hellohi/",
        image: HelloHii
    },
    {
        id: 3,
        name: "Expense Tracker",
        description: [
            "A robust personal finance management tool designed to help users track and categorize expenses efficiently.",
            "Provides intuitive data visualization and real-time updates to enhance financial awareness and budgeting."
        ],
        usedTech: ["ReactJS", "Redux", "NodeJS", "MongoDB", "ExpressJS", "Tailwind CSS"],
        link: "https://expense-tracker-kappa-neon.vercel.app/",
        codelink: "https://github.com/shashank2314/Expense-Tracker",
        image: ExpenseTracker
    },
    {
        id: 4,
        name: "MyPortfolio",
        description: [
            "A personal portfolio showcasing technical expertise, projects, and professional achievements.",
            "Designed with a clean, responsive interface to provide an engaging user experience."
        ],
        usedTech: ["ReactJS", "Next.js", "Tailwind CSS"],
        link: "https://myporfolio-phi.vercel.app/",
        codelink: "https://github.com/shashank2314/myporfolio",
        image: myportfolio
    },
    {
        id: 5,
        name: "Shopapp",
        description: [
            "An interactive e-commerce frontend application with a modern and visually appealing UI.",
            "Offers a seamless browsing experience with optimized performance and accessibility."
        ],
        usedTech: ["ReactJS", "Tailwind CSS", "ReduxJS"],
        link: "https://shoping-app-1.vercel.app/",
        codelink: "https://github.com/shashank2314/shoping-app",
        image: shopapp
    }
];
