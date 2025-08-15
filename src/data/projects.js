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
        github: "https://github.com/CORA-HEAD/StudyBuddy",
        featured: true
    },
    {
        id: 2,
        title: "Password Generator",
        description:
            "A simple, responsive password generator built with React, Vite, and Tailwind CSS. Users can adjust length, include numbers and special characters, see real-time strength feedback, and copy with one click.",
        image: "/project2.png",
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
        image: "/project3.png",
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
      }
      
];

export const projectCategories = [
    "All",
    "Full Stack",
    "Frontend",
    "AI/ML"
]; 