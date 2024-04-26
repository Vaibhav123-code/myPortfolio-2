import { createContext } from "react";

export const ProjectContext = createContext();

export function ProjectProvider({children}) {
    const projects = [
        {
          id: 1,
          title: "Crypto tracker",
          description: "The project is a comprehensive Crypto Tracker designed to monitor various cryptocurrencies worldwide. Utilizing React and Material-UI, it offers users an intuitive interface for tracking and analyzing different cryptocurrencies.",
          image: "https://cdn.dribbble.com/users/5029699/screenshots/15747468/frame_3_4x.png",
          liveDemoLink: "https://v-crypto-tracker.netlify.app/",
          github:"https://github.com/Vaibhav123-code/crypto-tracker",
          moreDetails: "Our Crypto Tracker is like a smart helper for keeping tabs on different cryptocurrencies. It's built to work smoothly on any device, whether you're using a computer, tablet, or phone. The design is made to look nice and engaging, with cool animations that make using it fun.Inside, there's a Dashboard where you can easily search for cryptocurrencies and browse through them page by page. You can see detailed charts and information about each one, helping you understand how they're doing.One cool thing is the Comparison Page, where you can pick two cryptocurrencies and see how they stack up against each other. You can play around with different settings to see how they've changed over time.And for those coins you really like, there's a Watchlist feature. It's like having a favorites list, so you can keep track of them easily. Everything is designed to be easy to use and enjoy, making it simple for anyone to keep up with the world of cryptocurrencies.",
          feature1: "Real-time cryptocurrency data tracking with Responsive design",
          feature2: "Interactive charts for insightful analysis, complete with sorting and filtering capabilities.",
          feature3: "Compare coins and watchlist features,to manage your portfolio effortlessly.",
          tech: [
            { name: "HTML", url: "https://tsigmjcet.in/img/html.png" },
            { name: "CSS", url: "https://bing.com/th?id=OIP.o_SrIhvXiTzHFz9VG1nATQAAAA" },
            { name: "JavaScript", url: "https://vectorified.com/images/javascript-icon-36.png" },
            { name: "React", url: "https://clouddevs.com/wp-content/uploads/2018/08/react-logo-transparent-350x350.png" },
            { name: "MUI", url: "https://www.bing.com/th?id=OIP.o2RZphFQEP_Ry5J6RotJngAAAA&w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" },
        ]
        },
        {
          id: 2,
          title: "Financely",
          description: "Financely : Your personal finance tracker, built with React.js and Firebase, provides users with seamless income and expense tracking capabilities. Offering features such as sorting, searching, and CSV import/export, it streamlines financial management. ",
          image: "https://wallpaper.dog/large/11047151.jpg",
          liveDemoLink: "https://finacely-your-personal-financetracker.netlify.app/",
          moreDetails: "Introducing Financely – your ultimate solution for hassle-free finance management. Powered by React.js, Firebase, and Ant Design, this responsive web application simplifies income and expense tracking with real-time updates. Its intuitive interface guides you through signup and login, leading to a dynamic dashboard for secure data storage and user authentication. With Financely, you can easily input, categorize, and analyze your financial transactions, thanks to advanced features like sorting, searching, and CSV import/export. The app's interactive graphs and pie charts, crafted with Ant Design components, offer insightful analytics, helping you understand your spending habits and make informed financial decisions. Whether you're budgeting, investing, or simply keeping track of your money, Financely is designed to streamline your financial journey.",
          github:"https://github.com/Vaibhav123-code/finacely",
          feature1: "Real-time data storage and user authentication,user-friendly signup and login processes",
          feature2: "manage financial transactions with advanced features like sorting, searching",
          feature3: "CSV import/export and Implemented data visualization techniques.",
          tech: [
            { name: "HTML", url: "https://tsigmjcet.in/img/html.png" },
            { name: "CSS", url: "https://bing.com/th?id=OIP.o_SrIhvXiTzHFz9VG1nATQAAAA" },
            { name: "JavaScript", url: "https://vectorified.com/images/javascript-icon-36.png" },
            { name: "React", url: "https://clouddevs.com/wp-content/uploads/2018/08/react-logo-transparent-350x350.png" },
            { name: "Firebase", url: "https://pluspng.com/img-png/firebase-logo-png-firebase-google-icon-512x512.png" },
        ]
        },
        {
          id: 3,
          title: "keep Notes",
          description: "Description of Project 1",
          image: "https://cdn.neow.in/news/images/uploaded/2018/09/1537445970_keep_notes_story.jpg",
          liveDemoLink: "https://example.com/live-demo-1",
          moreDetails: "More details about Project 1.",
          feature1: "Real-time cryptocurrency data tracking with Responsive design",
          feature2: "Interactive charts for insightful analysis, complete with sorting and filtering capabilities.",
          feature3: "Compare coins and watchlist features,to manage your portfolio effortlessly.",
          tech: [
            { name: "HTML", url: "https://tsigmjcet.in/img/html.png" },
            { name: "CSS", url: "https://bing.com/th?id=OIP.o_SrIhvXiTzHFz9VG1nATQAAAA" },
            { name: "JavaScript", url: "https://vectorified.com/images/javascript-icon-36.png" },
            { name: "React", url: "https://clouddevs.com/wp-content/uploads/2018/08/react-logo-transparent-350x350.png" },
            { name: "MUI", url: "https://www.bing.com/th?id=OIP.o2RZphFQEP_Ry5J6RotJngAAAA&w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" },
        ]
        },
        {
          id: 4,
          title: "Tic-Tac-Toe",
          description: "Description of Project 1",
          image: "https://i.etsystatic.com/18390435/r/il/afc0b9/2230101434/il_fullxfull.2230101434_tsnw.jpg",
          liveDemoLink: "https://example.com/live-demo-1",
          moreDetails: "More details about Project 1.",
          feature1: "Real-time cryptocurrency data tracking with Responsive design",
          feature2: "Interactive charts for insightful analysis, complete with sorting and filtering capabilities.",
          feature3: "Compare coins and watchlist features,to manage your portfolio effortlessly.",
          tech: [
            { name: "HTML", url: "https://tsigmjcet.in/img/html.png" },
            { name: "CSS", url: "https://bing.com/th?id=OIP.o_SrIhvXiTzHFz9VG1nATQAAAA" },
            { name: "JavaScript", url: "https://vectorified.com/images/javascript-icon-36.png" },
            { name: "React", url: "https://clouddevs.com/wp-content/uploads/2018/08/react-logo-transparent-350x350.png" },
            { name: "MUI", url: "https://www.bing.com/th?id=OIP.o2RZphFQEP_Ry5J6RotJngAAAA&w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" },
        ]
        },
        {
          id: 5,
          title: "Weather App",
          description: "Description of Project 1",
          image: "https://wallpapercave.com/wp/8juvAu0.jpg",
          liveDemoLink: "https://example.com/live-demo-1",
          moreDetails: "More details about Project 1.",
          feature1: "Real-time cryptocurrency data tracking with Responsive design",
          feature2: "Interactive charts for insightful analysis, complete with sorting and filtering capabilities.",
          feature3: "Compare coins and watchlist features,to manage your portfolio effortlessly.",
          tech: [
            { name: "HTML", url: "https://tsigmjcet.in/img/html.png" },
            { name: "CSS", url: "https://bing.com/th?id=OIP.o_SrIhvXiTzHFz9VG1nATQAAAA" },
            { name: "JavaScript", url: "https://vectorified.com/images/javascript-icon-36.png" },
            { name: "React", url: "https://clouddevs.com/wp-content/uploads/2018/08/react-logo-transparent-350x350.png" },
            { name: "MUI", url: "https://www.bing.com/th?id=OIP.o2RZphFQEP_Ry5J6RotJngAAAA&w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" },
        ]
        },
        {
          id: 6,
          title: "TODO App",
          description: "Description of Project 1",
          image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1995344.jpg",
          liveDemoLink: "https://example.com/live-demo-1",
          moreDetails: "More details about Project 1.",
          feature1: "Real-time cryptocurrency data tracking with Responsive design",
          feature2: "Interactive charts for insightful analysis, complete with sorting and filtering capabilities.",
          feature3: "Compare coins and watchlist features,to manage your portfolio effortlessly.",
          tech: [
            { name: "HTML", url: "https://tsigmjcet.in/img/html.png" },
            { name: "CSS", url: "https://bing.com/th?id=OIP.o_SrIhvXiTzHFz9VG1nATQAAAA" },
            { name: "JavaScript", url: "https://vectorified.com/images/javascript-icon-36.png" },
            { name: "React", url: "https://clouddevs.com/wp-content/uploads/2018/08/react-logo-transparent-350x350.png" },
            { name: "MUI", url: "https://www.bing.com/th?id=OIP.o2RZphFQEP_Ry5J6RotJngAAAA&w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" },
        ]
        },
        {
          id: 7,
          title: "Watchify+",
          description: "Description of Project 1",
          image: "https://wallpaperaccess.com/full/2772922.png",
          liveDemoLink: "",
          github: "https://github.com/Vaibhav123-code/netflic-clone",
          moreDetails: "Welcome to Waychify+ -  designed and developed a stunning landing page using HTML, CSS, and JavaScript, ensuring a visually appealing and user-friendly experience. ",
          feature1: "Designed and developed a Netflix clone’s main landing page utilizing HTML and CSS",
          feature2: "Leveraged JavaScript for interactive elements, enhancing user engagement and providing a dynamic browsing",
          feature3: "",
          tech: [
            { name: "HTML", url: "https://tsigmjcet.in/img/html.png" },
            { name: "CSS", url: "https://bing.com/th?id=OIP.o_SrIhvXiTzHFz9VG1nATQAAAA" },
            { name: "JavaScript", url: "https://vectorified.com/images/javascript-icon-36.png" },
        ]
        },
        {
          id: 8,
          title: "Stopwatch App",
          description: "Description of Project 1",
          image: "https://wallpaper.dog/large/20490573.jpg",
          liveDemoLink: "https://example.com/live-demo-1",
          moreDetails: "More details about Project 1.",
          feature1: "Real-time cryptocurrency data tracking with Responsive design",
          feature2: "Interactive charts for insightful analysis, complete with sorting and filtering capabilities.",
          feature3: "Compare coins and watchlist features,to manage your portfolio effortlessly.",
          tech: [
            { name: "HTML", url: "https://tsigmjcet.in/img/html.png" },
            { name: "CSS", url: "https://bing.com/th?id=OIP.o_SrIhvXiTzHFz9VG1nATQAAAA" },
            { name: "JavaScript", url: "https://vectorified.com/images/javascript-icon-36.png" },
            { name: "React", url: "https://clouddevs.com/wp-content/uploads/2018/08/react-logo-transparent-350x350.png" },
            { name: "MUI", url: "https://www.bing.com/th?id=OIP.o2RZphFQEP_Ry5J6RotJngAAAA&w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" },
        ]
        },
        {
          id: 9,
          title: "Photo Gallery",
          description: "Description of Project 1",
          image: "https://colorlib.com/wp/wp-content/uploads/sites/2/free-gallery-wordpress-themes.jpg",
          liveDemoLink: "https://example.com/live-demo-1",
          moreDetails: "More details about Project 1.",
          feature1: "Real-time cryptocurrency data tracking with Responsive design",
          feature2: "Interactive charts for insightful analysis, complete with sorting and filtering capabilities.",
          feature3: "Compare coins and watchlist features,to manage your portfolio effortlessly.",
          tech: [
            { name: "HTML", url: "https://tsigmjcet.in/img/html.png" },
            { name: "CSS", url: "https://bing.com/th?id=OIP.o_SrIhvXiTzHFz9VG1nATQAAAA" },
            { name: "JavaScript", url: "https://vectorified.com/images/javascript-icon-36.png" },
            { name: "React", url: "https://clouddevs.com/wp-content/uploads/2018/08/react-logo-transparent-350x350.png" },
            { name: "MUI", url: "https://www.bing.com/th?id=OIP.o2RZphFQEP_Ry5J6RotJngAAAA&w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" },
        ]
        },
        {
          id: 10,
          title: "Calculator",
          description: "Description of Project 1",
          image: "https://i.ytimg.com/vi/PGCwVJ-2ovc/maxresdefault.jpg",
          liveDemoLink: "https://example.com/live-demo-1",
          moreDetails: "More details about Project 1.",
          feature1: "Real-time cryptocurrency data tracking with Responsive design",
          feature2: "Interactive charts for insightful analysis, complete with sorting and filtering capabilities.",
          feature3: "Compare coins and watchlist features,to manage your portfolio effortlessly.",
          tech: [
            { name: "HTML", url: "https://tsigmjcet.in/img/html.png" },
            { name: "CSS", url: "https://bing.com/th?id=OIP.o_SrIhvXiTzHFz9VG1nATQAAAA" },
            { name: "JavaScript", url: "https://vectorified.com/images/javascript-icon-36.png" },
            { name: "React", url: "https://clouddevs.com/wp-content/uploads/2018/08/react-logo-transparent-350x350.png" },
            { name: "MUI", url: "https://www.bing.com/th?id=OIP.o2RZphFQEP_Ry5J6RotJngAAAA&w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" },
        ]
        }
    
      ]
    return(
      <ProjectContext.Provider value={projects}>
         {children}
      </ProjectContext.Provider>
    )
}