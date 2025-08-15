export const projects = [
    {
        id: 1,
        title: "StudyBuddy E-Learning Platform",
        description: "Developed a full-stack e-learning platform with Passport.js for secure authentication and session management. Integrated Stripe for payments and Nodemailer/Twilio for OTP verification.",
        image: "/project1.png",
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
        github: "https://github.com/anmolfutela/studybuddy",
        live: "https://studybuddy-demo.com",
        featured: true
    },
    {
        id: 2,
        title: "Password Generator",
        description: "Built a responsive password generator using React, Vite, and Tailwind CSS. Includes customizable options for length, numbers, and special characters with real-time strength indicator.",
        image: "/project2.png",
        technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
        category: "Frontend",
        year: 2024,
        teamSize: 1,
        role: "Frontend Developer",
        highlights: [
            "Customizable password length and character types",
            "Real-time password strength indicator",
            "Clipboard copy functionality",
            "Responsive and mobile-friendly design",
            "Clean and modern UI/UX"
        ],
        github: "https://github.com/anmolfutela/password-generator",
        live: "https://password-generator-demo.com",
        featured: true
    },
    {
        id: 3,
        title: "SmartQuiz AI",
        description: "A React-based quiz app with AI-generated MCQs using OpenAI API. Implemented Google Sign-In and stored user scores securely in Firebase Firestore.",
        image: "/project3.png",
        technologies: ["React", "Tailwind CSS", "Node.js", "Express", "OpenAI API", "Firebase", "Google Sign-In"],
        category: "AI/ML",
        year: 2024,
        teamSize: 1,
        role: "Full Stack Developer",
        highlights: [
            "AI-generated MCQs using OpenAI API",
            "Google Sign-In authentication",
            "Secure score storage in Firebase Firestore",
            "Deployed on Vercel and Render",
            "Modern React with Tailwind CSS"
        ],
        github: "https://github.com/anmolfutela/smartquiz-ai",
        live: "https://smartquiz-ai.vercel.app",
        featured: true
    }
];

export const projectCategories = [
    "All",
    "Full Stack",
    "Frontend",
    "AI/ML"
]; 