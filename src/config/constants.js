// Social Media Links
export const SOCIAL_LINKS = {
    email: 'prashanth.konda.sde@gmail.com',
    linkedin: 'https://www.linkedin.com/in/prashanthkonda',
    github: 'https://github.com/prashanthkondasde',
    //instagram: 'https://www.instagram.com/iamsouviki',
};

// Personal Information
export const PERSONAL_INFO = {
    name: 'Prashanth Konda',
    title: 'Full-Stack Developer & AI Developer',
    tagline: 'Building Scalable Solutions with Modern Technologies',
    professionDetails: `Full-Stack Developer specializing in Web Development, with expertise in Javascript, React.js, Node.js, PHP, and PostgreSQL/MySQL.  Experienced in developing end-to-end applications across healthcare, inventory, billing, e-commerce, and enterprise domains. Currently, I’m strengthening my skills in system design, application architecture, and cloud deployment to build scalable applications and take greater ownership of the end-to-end development lifecycle..`,
    imagePath: '/assets/images/prashanthkonda.png',
    // Google Drive link for CV - opens in new tab for viewing/downloading
    resumeUrl: 'https://drive.google.com/file/d/1Omfy4Cfrs7Fgkmp6FhQAhu58YGn-jBcQ/view',
    location: 'Hyderabad, India',
    contact: '+91 99490 47142',
    yearsOfExperience: '6+',
};

// About Section
export const ABOUT = {
    whoAmI: `A passionate Full-Stack Developer with expertise in building modern web applications. I specialize in creating seamless user experiences with cutting-edge technologies and translating complex business requirements into reliable technical solutions.

Technical Expertise:
• Backend:  Node.js, Express.js, REST API Development, JWT Authentication, Middleware, PHP
• Frontend:  React.js, JavaScript (ES6+), TypeScript, Redux Toolkit, React Router, HTML5, CSS3, Tailwind CSS, Bootstrap, Responsive Web Design
• Architecture & Patterns:  Micro Frontend, Module Federation, Shared Module Integration, Component-Based Architecture, Protected Routing
• Database:  PostgreSQL, MySQL - Schema Design, Indexing, Relational Modeling
• Cloud & DevOps:  Docker, CI/CD (Bitbucket Pipelines), AWS (EC2, S3), Linux, Git,Bitbucket
• Performance:  Webpack, Vite, Bundle Optimization, Lazy Loading
• Tools & Project Management:  Jira, Trello, Swagger, Postman

What I Do:
I have expertise across multiple domains and turn ideas into reality by building scalable, high-performance applications that solve real-world problems. From robust backend systems to responsive, user-friendly frontends, I deliver end-to-end solutions that align with business needs.

Mission:
Leveraging the power of AI and modern development practices to create innovative solutions that make a difference.`,
};

// Services Offered (from LinkedIn)
export const SERVICES = [
    {
        icon: '🎨',
        title: 'Web Design',
        description: 'Creating stunning, user-friendly interfaces with modern design principles',
    },
    {
        icon: '💻',
        title: 'Web Development',
        description: 'Building responsive, performant web applications with React and modern frameworks',
    },
    {
        icon: '🔌',
        title: 'API Development',
        description: 'Building secure, scalable RESTful APIs with authentication, database integration, and comprehensive API documentation.'
    },
    {
        icon: '🔧',
        title: 'IT Consulting',
        description: 'Providing expert technical guidance and architecture solutions',
    },
    {
        icon: '📊',
        title: 'Project Management',
        description: 'Leading development teams and delivering projects on time',
    },
    {
        icon: '🤖',
        title: 'AI Integration',
        description: 'Exploring AI-powered tools and capabilities to enhance application functionality and developer productivity.'
    }
];

// Certifications
export const CERTIFICATIONS = [
    {
        name: 'Generative AI Leader Certification',
        issuer: 'Google',
        date: 'Date issued: December 03, 2025 | Expires: December 03, 2028',
        credentialUrl: 'https://www.credly.com/badges/1752e0b7-85a2-4a4b-bc4f-f33162dd6529/linked_in_profile',
        logo: '/assets/images/google-ai-cert.png',
        description: 'Advanced certification in Generative AI technologies and leadership',
    },
];

// Education
export const EDUCATION = [
    {
        degree: 'Bachelor of Technology in Computer Science & Engineering (2009-2013)',
        institution: 'Tudi Ram Reddy Institute of Technology & Sciences (TRRIT)',
        //score: 'DGPA: 62',
    },
    // {
    //     degree: '12th Grade',
    //     institution: 'Katwa Bharati Bhaban',
    //     score: 'Percentage: 73.6%',
    // },
    // {
    //     degree: '10th Grade',
    //     institution: 'Purulia Mahendra Vidyapith',
    //     score: 'Percentage: 85.71%',
    // },
];

// Skills (categorized for better organization)
export const SKILLS = [
    { name: 'HTML5', percentage: 95, category: 'Frontend' },
    { name: 'CSS', percentage: 95, category: 'Frontend' },
    { name: 'Bootstrap', percentage: 95, category: 'Frontend' },
    { name: 'Responsive Design', percentage: 95, category: 'Frontend' },
    { name: 'Javascript', percentage: 95, category: 'Backend' },
    { name: 'Node.js', percentage: 90, category: 'Backend' },
    { name: 'React.js', percentage: 88, category: 'Frontend' },
    { name: 'Tailwind CSS', percentage: 85, category: 'Frontend' },
    { name: 'MySQL', percentage: 85, category: 'Database' },
    { name: 'PostgreSQL', percentage: 85, category: 'Database' },
    { name: 'RESTful APIs', percentage: 92, category: 'Backend' },
    { name: 'AI Agent Integration', percentage: 80, category: 'AI' },
    { name: 'Git & GitHub', percentage: 90, category: 'DevOps' },
    { name: 'Bitbucket', percentage: 90, category: 'DevOps' },
    { name: 'AWS', percentage: 85, category: 'Cloud' },
    { name: 'Docker', percentage: 75, category: 'DevOps' },
];

// Get unique skill categories
export const SKILL_CATEGORIES = [...new Set(SKILLS.map(skill => skill.category))];

// Experience
export const EXPERIENCES = [
    {
        companyLogo: '/assets/images/man.png',
        companyName: 'Career Break & Professional Development',
        role: 'Skill Enhancement & Self-Directed Learning',
        description: `Took a planned career break to manage personal responsibilities and focus on professional development.
Strengthened my full-stack development skills and explored modern technologies, including TypeScript, and AI integration.
Now focused on returning to a full-time software development role and delivering impactful solutions.`,
        duration: 'July 2016 - Present',
        achievements: [
            `Strengthened Full-Stack Development Skills`,
            'Built React & TypeScript Practice Projects',
            'Focused on Technical Upskilling & Career Readiness',
        ],
    },
    {
        companyLogo: '/assets/images/dwlogo.png',
        companyName: 'Dot Logic Web Solutions Private Limited (DOTWEB)',
        role: 'Full-Stack Developer',
        description: `Designed, developed, and deployed 20+ web applications across multiple domains using React.js, Node.js, PHP, and PostgreSQL/MySQL.
Architected RESTful APIs, optimized application performance, and built reusable frontend components to deliver reliable, maintainable full-stack solutions.
Implemented Docker-based containerization and CI/CD pipelines using Bitbucket, streamlined deployments, and mentored junior developers while collaborating with cross-functional teams.`,
        duration: 'July 2016 - Sep 2024',
        achievements: [
            'Delivered 20+ enterprise-grade applications',
            'Improved system performance by 60%',
            'Led team of 3 developers',
        ],
    },
    {
        companyLogo: '/assets/images/dwlogo.png',
        companyName: 'Dot Logic Web Solutions Private Limited (DOTWEB)',
        role: 'Intern',
        description: `Built mobile-optimized responsive pages compatible with cross-browser using HTML5, CSS3 and Bootstrap. Customized WordPress themes and integrated third-party plugins to meet client requirements.`,
        duration: 'January 2016 - June 2016',
        achievements: [
            'Improved user satisfaction by 50%'
        ],
    },
];

// Projects
export const PROJECTS = [
    {
        name: 'E-Commerce Platform — Micro Frontend Architecture',
        logo: '/assets/images/iv.png',
        description: [
            `Architected a scalable micro frontend system using Vite Module Federation by separating authentication, products,cart, and admin modules into independently managed applications.`,
            `Built secure JWT-based authentication with protected routes, shared auth handling, reusable API layers, and centralized state management using Redux Toolkit.`,
            `Optimized frontend performance through lazy loading, route-level code splitting, shared dependency management, and Docker-based modular deployment setup.`
        ],
        technologies: ['React.js', 'Vite', 'Module Federation', 'Node.js', 'Express.js', 'PostgreSQL', 'Redux Toolkit', 'Docker'],
        url: '#',
        featured: true,
    },
    {
        name: 'InvalUmetrics — ESG and SDG Research Platform',
        logo: '',
        description: [
            `Architected a configurable ESG and SDG scoring engine with sector-based indicators and formula-driven computation,enabling dynamic score calculation based on client inputs`,
            `Designed a normalized PostgreSQL schema for sectors, companies, indicators, and financial year-wise data, supporting scalable and structured data ingestion.`,
            `Built RESTful APIs and optimized performance using indexed queries to ingest, validate, and aggregate multi-source ESG data, reducing manual processing time by ˜60%.`

],
        technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker'],
        url: '#',
        featured: false,
    },
    {
        name: 'Rental App — Rental Property Management System',
        logo: '',
        description: [
            `Designed end-to-end rental workflows and translated requirements into system design and wireframes.`,
            `Designed a multi-role platform (landlords, managers, agents, vendors, tenants) covering property listing, viewing
scheduling, tenant onboarding, inspections, and tenancy lifecycle.`,
            `Modeled complex relational schemas for properties, tenants, viewings, inspections, and vendor workflows, ensuring
data consistency and efficient query performance.`

],
        technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker'],
        url: '#',
        featured: false,
    },
    {
        name: 'MR Polymers — Inventory Management System',
        logo: '',
        description: [
            `Built a barcode-driven inventory system to track slitted rolls from vendor purchase to dispatch, enabling end-to-end
stock traceability`,
            `Implemented parent–child inventory modeling by generating unique IDs and barcodes for each slitted roll, enabling
granular stock tracking and eliminating manual stock errors, improving stock accuracy from 25% to 98%+`,
            `Implemented a scanner-driven invoicing workflow with auto-fetch of item details, reducing data-entry time by ˜80%
and cutting billing time from ˜20 minutes to under 2 minutes.`
        ],
        technologies: ['PHP', 'JavaScript,', 'Angular.js', 'MySQL'],
        url: '#',
        featured: true,
    },
    {
        name: 'Transcend IT Solutions — Employee & Client Management System',
        logo: '',
        description: [
            `Architected and developed an employee and client management system supporting assignments, timesheets, invoicing,
and reporting across 100+ employees and 50+ clients.`,
            `Implemented role-based authentication and authorization to manage permissions across employees, managers, and
admins.`,
            `Modeled normalized relational schemas for employees, clients, assignments, and timesheets; documented all endpoints
with Swagger for seamless API integration.`
        ],
        technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker'],
        url: '#',
        featured: false,
    },
];

// Stats for homepage
export const STATS = [
    { label: 'Years Experience', value: '8' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Technologies', value: '15+' },
   { label: 'Industry Domains', value: '6+' },
];

// Routes
export const ROUTES = {
    splash: '/splash',
    home: '/',
    about: '/about',
    experience: '/experience',
    projects: '/projects',
    services: '/services',
};
