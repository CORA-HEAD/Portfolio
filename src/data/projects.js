export const projects = [
    {
        id: 1,
        title: "StudyBuddy E-Learning Platform",
        description: "Developed a full-stack e-learning platform with Passport.js for secure authentication and session management. Integrated Stripe for payments and Nodemailer/Twilio for OTP verification.",
        image: "/projects/studybuddy_project.png",
        technologies: ["Node.js", "Express.js", "Passport.js", "Stripe", "Nodemailer", "Twilio", "Fuse.js"],
        category: "Full Stack",
        year: 2024,
        teamSize: 1,
        role: "Full Stack Developer",
        highlights: [
            "Implemented secure authentication with Passport.js",
            "Integrated Stripe for secure payment processing",
            "Added OTP verification with Nodemailer and Twilio",
            "Implemented Google reCAPTCHA for bot protection",
            "Fast course search using Fuse.js with AJAX"
        ],
        github: "https://github.com/CORA-HEAD/StudyBuddy",
        featured: true
    },
    {
        id: 2,
        title: "Password Generator",
        description:
            "A simple, responsive password generator built with React, Vite, and Tailwind CSS. Users can adjust length, include numbers and special characters, see real-time strength feedback, and copy with one click.",
        image: "/projects/password_generator_project.png",
        technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
        category: "Frontend",
        year: 2025,
        teamSize: 1,
        role: "Frontend Developer",
        highlights: [
            "Adjustable password length",
            "Toggle numbers and special characters",
            "Real-time password strength indicator",
            "Copy-to-clipboard functionality",
            "Responsive, mobile-friendly UI"
        ],
        github: "https://github.com/CORA-HEAD/password_generator",
        live: "https://password-generator-mauve-beta.vercel.app/",
        featured: true
    },{
        id: 3,
        title: "SmartQuiz AI",
        description:
          "A full-stack quiz application built with React and Tailwind CSS that generates MCQs using the OpenAI API. Features Google Sign-In authentication and secure score tracking via Firebase Firestore.",
        image: "/projects/smartquiz_ai_project.png",
        technologies: [
          "React",
          "Vite",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "OpenAI API",
          "Firebase Authentication",
          "Firebase Firestore",
          "Google Sign-In"
        ],
        category: "AI/ML",
        year: 2025,
        teamSize: 1,
        role: "Full Stack Developer",
        highlights: [
          "AI-generated multiple-choice questions via OpenAI API",
          "Google Sign-In using Firebase Authentication",
          "Secure score storage and tracking in Firebase Firestore",
          "Shows correct and incorrect answers after submission",
          "Frontend deployed on Vercel, backend on Render"
        ],
        github: "https://github.com/CORA-HEAD/SmartQuiz-AI",
        live: "https://smart-quiz-ai.vercel.app/",
        featured: true
      },{
        "id": 4,
        "title": "Simple Weather App",
        "description": "A basic React weather app built with Vite that lets you check the current weather of any city using the OpenWeatherMap API. Displays temperature, weather condition, and humidity, and handles errors like city not found.",
        "image": "/projects/weather_project.png",
        "technologies": [
          "React",
          "Vite",
          "CSS",
          "OpenWeatherMap API"
        ],
        "category": "Web Development",
        "year": 2025,
        "teamSize": 1,
        "role": "Frontend Developer",
        "highlights": [
          "Search weather by city name",
          "Displays temperature, weather, and humidity",
          "Handles errors like city not found"
        ],
        "github": "https://github.com/CORA-HEAD/Weather-app",
        "live": "https://weather-app-coral-one-19.vercel.app/",
        "featured": true
      },{
        "id": 5,
        "title": "Anmol – Portfolio",
        "description": "A modern, responsive portfolio website showcasing my expertise in full stack development, AI-powered applications, and clean, modern UI/UX design.",
        "image": "/projects/portfolio_project.png",
        "technologies": [
          "React 18",
          "Vite",
          "Tailwind CSS",
          "Framer Motion",
          "Lucide React",
          "Inter (Google Fonts)",
          "JetBrains Mono"
        ],
        "category": "Frontend",
        "year": 2025,
        "teamSize": 1,
        "role": "Full Stack Developer",
        "highlights": [
          "Modern dark theme design with gradient backgrounds and glass morphism",
          "Responsive layout optimized for mobile, tablet, and desktop",
          "Smooth animations with Framer Motion",
          "Interactive components including project filters, testimonials, contact form, and animated skill bars",
          "Professional content showcasing projects, skills, and experience",
          "Performance optimized with Vite, code splitting, and optimized images"
        ],
        "github": "https://github.com/CORA-HEAD/Portfolio",
        "live": "https://portfolio-seven-nu-76.vercel.app/",
        "featured": true
      },{
        "id": 6,
        "title": "Currency Converter",
        "description": "A simple, modern currency converter built using React, Tailwind CSS, and a public currency API. Supports real-time exchange rates, swapping currencies, and converting between any available currencies.",
        "image": "/projects/currency_converter_project.png",
        "technologies": [
          "React.js",
          "Tailwind CSS",
          "fawazahmed0/currency-api",
          "React Hooks (useState, useEffect)"
        ],
        "category": "Frontend",
        "year": 2025,
        "teamSize": 1,
        "role": "Frontend Developer",
        "highlights": [
          "Real-time currency conversion",
          "Swap between 'From' and 'To' currencies",
          "Auto-updates based on user input",
          "Clean, responsive UI built with Tailwind CSS",
          "Loading animation using react-spinners"
        ],
        "github": "https://github.com/CORA-HEAD/Currency-converter",
        "live": "https://currency-converter.netlify.app/",
        "featured": true
      },{
        "id": 7,
        "title": "URL Shortener",
        "description": "A simple URL shortener service built with Node.js, Express, and MongoDB. Generate short URLs for long URLs, redirect short URLs to the original, and track visit history.",
        "technologies": [
          "Node.js",
          "Express",
          "MongoDB",
          "Mongoose"
        ],
        "category": "Backend",
        "year": 2024,
        "teamSize": 1,
        "role": "Backend Developer",
        "highlights": [
          "Generate short URLs from long URLs",
          "Redirect short URLs to original URLs",
          "Track visit history for each short URL",
          "RESTful API built with Express",
          "MongoDB used for persistent storage"
        ],
        "github": "https://github.com/CORA-HEAD/URL-Shortner",
        "live": "",
        "featured": true
      },{
        "id": 8,
        "title": "Taskify - To-Do List App",
        "description": "Taskify is a minimalist To-Do List application built using HTML, JavaScript, and Tailwind CSS. Manage daily tasks efficiently by adding, editing, completing, and deleting tasks seamlessly.",
        "image": "/projects/taskify_project.png",
        "technologies": [
          "HTML",
          "JavaScript",
          "Tailwind CSS"
        ],
        "category": "Frontend",
        "year": 2025,
        "teamSize": 1,
        "role": "Frontend Developer",
        "highlights": [
          "Add, edit, and delete tasks easily",
          "Mark tasks as completed and undo if needed",
          "Responsive UI optimized for mobile and desktop",
          "Clean modern design using Tailwind CSS",
          "Intuitive interface for better task management"
        ],
        "github": "https://github.com/CORA-HEAD/Taskify",
        "live": "https://taskify-rcoz.vercel.app/",
        "featured": true
      }
      
      
      
      
      
      
];

export const projectCategories = [
    "All",
    "Full Stack",
    "Frontend",
    "Backend",
    "AI/ML",
   
]; 