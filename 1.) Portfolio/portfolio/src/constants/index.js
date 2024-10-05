export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  // export const clientReviews = [
  //   {
  //     id: 1,
  //     name: 'Priya Sharma',
  //     position: 'Marketing Director at EcoLife',
  //     img: 'assets/review1.png',
  //     review:
  //       'Working with Shardendu was an outstanding experience. He completely revamped our website, making it modern and highly responsive. His attention to detail and dedication to quality are unparalleled. Highly recommend him for web development projects.',
  //   },
  //   {
  //     id: 2,
  //     name: 'Amit Verma',
  //     position: 'Founder of TechMart',
  //     img: 'assets/review2.png',
  //     review:
  //       'Shardendu’s expertise in web development is remarkable. He built a scalable and efficient platform for our e-commerce business, and our online traffic and sales have grown significantly. A true professional!',
  //   },
  //   {
  //     id: 3,
  //     name: 'Ravi Kumar',
  //     position: 'Project Manager at UrbanTech Solutions',
  //     img: 'assets/review3.png',
  //     review:
  //       'I can’t praise Shardendu enough. He handled our complex project with ease and turned our vision into a smooth, functional website. His problem-solving skills are exceptional.',
  //   },
  //   {
  //     id: 4,
  //     name: 'Neha Kapoor',
  //     position: 'CEO of Star Innovations',
  //     img: 'assets/review4.png',
  //     review:
  //       'Shardendu was a pleasure to work with. He perfectly understood our needs and delivered a website that surpassed all our expectations. His skills in both frontend and backend development are extraordinary.',
  //   },
  // ];
  
  
  export const myProjects = [
    {
      title: 'Project Management System',
      desc: 'A Comprehensive Solution for Efficiently Managing Projects, Facilitating Collaboration, and Tracking Progress in Real-Time.',
      subdesc: 'This application allows users to create, update, and track project statuses while facilitating team collaboration and real-time updates.',
      href: 'https://project-management-shardendumishra.onrender.com',
      texture: '/textures/project/project-management-system.png',
      logo: '/assets/project-management-logo.png',
      logoStyle: {
        backgroundColor: '#4CAF50',
        border: '0.2px solid #388E3C',
        boxShadow: '0px 0px 60px 0px #4CAF504D',
      },
      spotlight: '/assets/spotlightmanagement.png',
      tags: [
        { id: 1, name: 'Vite', path: '/assets/vite.svg' },
        { id: 2, name: 'React', path: '/assets/react.svg' },
        { id: 3, name: 'Tailwind CSS', path: '/assets/tailwind.svg' },
        { id: 4, name: 'Bootstrap', path: '/assets/bootstrap.svg' },
        { id: 5, name: 'Apollo Client', path: '/assets/apollo.svg' },
        { id: 6, name: 'GraphQL', path: '/assets/graphql.svg' },
        { id: 7, name: 'Express.js', path: '/assets/express.svg' },
      ],
    },
    {
      title: 'Anonymous Feedback Application',
      desc: 'Welcome to the **Anonymous Feedback Application**! This production-grade app allows users to give and receive anonymous feedback seamlessly.',
      subdesc: 'The Anonymous Feedback Application is a sophisticated platform designed to facilitate the exchange of anonymous feedback between users. This application combines cutting-edge web technologies with AI capabilities to provide a seamless, secure, and engaging user experience.',
      href: 'https://shardendu-mishra-secret-message-application.vercel.app/',
      texture: '/textures/project/anonymous-feedback.png',
      logo: '/assets/anonymous-feedback-logo.png',
      logoStyle: {
        backgroundColor: '#4CAF50',
        border: '0.2px solid #388E3C',
        boxShadow: '0px 0px 60px 0px #4CAF504D',
      },
      spotlight: '/assets/spotlightanonymousfeedback.png',
      tags: [
        { id: 1, name: 'Next.js', path: '/assets/next.svg' },
        { id: 2, name: 'React', path: '/assets/react.svg' },
        { id: 3, name: 'Tailwind CSS', path: '/assets/tailwind.svg' },
        { id: 4, name: 'ShadCN', path: '/assets/shadcn.svg' },
        { id: 5, name: 'TypeScript', path: '/assets/typescript.svg' },
        { id: 6, name: 'JWT', path: '/assets/jwt.svg' },
      ],
    },
    {
      title: 'Dragon Ball API Documentation',
      desc: 'Documentation for the Dragon Ball API, detailing its features and how to use it.',
      subdesc: 'This documentation provides an overview of the API, including its endpoints and functionalities.',
      href: 'https://shardendu-mishra-documentation-dragon-ball-api.vercel.app/',
      texture: '/textures/project/dragon-ball-documentation.png',
      logo: '/assets/documentation-logo.png',
      logoStyle: {
        backgroundColor: '#FF9800',
        border: '0.2px solid #F57C00',
        boxShadow: '0px 0px 60px 0px #FF98004D',
      },
      spotlight: '/assets/spotlightdragonballdoc.png',
      tags: [
        { id: 1, name: 'Nextra', path: '/assets/nextra.svg' },
        { id: 2, name: 'Next.js', path: '/assets/next.svg' },
      ],
    },
    {
      title: 'WhatsGram',
      desc: 'WhatsGram is a real-time chat application where users can connect and chat with others on the platform. It provides a seamless experience for sending and receiving messages in real-time.',
      subdesc: 'This application features real-time messaging powered by Socket.IO and is built using React for the front-end and Express for the back-end.',
      href: 'https://whatsgram-jm9c.onrender.com',
      texture: '/textures/project/whatsgram.png',
      logo: '/assets/whatsgram-logo.png',
      logoStyle: {
        backgroundColor: '#25D366',
        border: '0.2px solid #128C7E',
        boxShadow: '0px 0px 60px 0px #25D3664D',
      },
      spotlight: '/assets/spotlightwhatsgram.png',
      tags: [
        { id: 1, name: 'React', path: '/assets/react.svg' },
        { id: 2, name: 'Socket.IO', path: '/assets/socketio.svg' },
        { id: 3, name: 'Express', path: '/assets/express.svg' },
        { id: 4, name: 'Tailwind CSS', path: '/assets/tailwind.svg' },
        { id: 5, name: 'Node.js', path: '/assets/nodejs.svg' },
      ],
    },
    {
      title: 'Dragon Ball API',
      desc: 'Love Dragon Ball? This API is made for all Dragon Ball fans! Access, update, and manage your favorite Dragon Ball data with our custom-built API.',
      subdesc: 'Built with Express.js and TypeScript, this API supports CRUD operations and secure authentication.',
      href: 'https://dragon-ball-api-grlr.onrender.com/',
      texture: '/textures/project/dragonball-api.png',
      logo: '/assets/dragon-ball-logo.png',
      logoStyle: {
        backgroundColor: '#F5B8A0',
        border: '0.2px solid #C7545D',
        boxShadow: '0px 0px 60px 0px #F5B8A04D',
      },
      spotlight: '/assets/spotlightdragonball.png',
      tags: [
        { id: 1, name: 'Express.js', path: '/assets/express.svg' },
        { id: 2, name: 'TypeScript', path: '/assets/typescript.svg' },
        { id: 3, name: 'MongoDB', path: '/assets/mongodb.svg' },
        { id: 4, name: 'JWT', path: '/assets/jwt.svg' },
        { id: 5, name: 'Nextra', path: '/assets/nextra.svg' },
      ],
    },
    {
      title: 'API Hub',
      desc: 'API Hub is a comprehensive application that showcases two different types of APIs: a Project Management System using SOAP and a Dragon Ball API using REST.',
      subdesc: 'This project demonstrates the versatility of working with both SOAP and REST APIs in a single application.',
      href: 'https://api-documentation-sharde-git-42d7c4-shardendu-mishra-s-projects.vercel.app/',
      texture: '/textures/project/api-hub.png',
      logo: '/assets/api-hub-logo.png',
      logoStyle: {
        backgroundColor: '#3F51B5',
        border: '0.2px solid #283593',
        boxShadow: '0px 0px 60px 0px #3F51B54D',
      },
      spotlight: '/assets/spotlightapi.png',
      tags: [
        { id: 1, name: 'Next.js', path: '/assets/next.svg' },
        { id: 2, name: 'SOAP', path: '/assets/soap.svg' },
        { id: 3, name: 'REST', path: '/assets/rest.svg' },
        { id: 4, name: 'GraphQL', path: '/assets/graphql.svg' },
        { id: 5, name: 'TypeScript', path: '/assets/typescript.svg' },
        { id: 6, name: 'Express.js', path: '/assets/express.svg' },
      ],
    },
    {
      title: 'React-Projects',
      desc: 'A repository dedicated to documenting my progress as I dive deep into React.js and build exciting projects along the way.',
      subdesc: 'Explore React fundamentals, mini-projects, code snippets, and best practices to master modern web development.',
      href: 'https://github.com/MishraShardendu22/React-Projects/blob/main/README.md',
      texture: '/textures/project/react-projects.png',
      logo: '/assets/react-logo.png',
      logoStyle: {
        backgroundColor: '#61DAFB',
        border: '0.2px solid #21B1F3',
        boxShadow: '0px 0px 60px 0px #61DAFB4D',
      },
      spotlight: '/assets/spotlightreactprojects.png',
      tags: [
        { id: 1, name: 'React.js', path: '/assets/react.svg' },
        { id: 2, name: 'Vite', path: '/assets/vite.svg' },
        { id: 3, name: 'CSS', path: '/assets/css.svg' },
        { id: 4, name: 'HTML', path: '/assets/html.svg' },
      ],
    },
  ];

  
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Devforces',
      pos: 'Front End Developer',
      duration: '2024 - Present',
      title: "At Devforces, I work as a Front End Developer alongside two other interns. This experience has significantly enhanced my front-end skills and taught me the importance of teamwork in a development environment.",
      icon: '/assets/devforces.svg', // Replace with the actual path to the icon if available
      animation: 'bounce', // You can change this to your preferred animation
    },
    {
      id: 2,
      name: 'Velocity IIIT DWD',
      pos: 'Co-Lead',
      duration: '2024 - Present',
      title: "I serve as the Co-Lead of the Primary Development Club at IIIT DWD, where I have helped create the college website and the hackathon website, as well as manage Velocity events.",
      icon: '/assets/velocity.svg', // Replace with the actual path to the icon if available
      animation: 'fade', // You can change this to your preferred animation
    },
  ];
  