# Alex Rodriguez - Senior Software Engineer Portfolio

A modern, responsive portfolio website showcasing 15+ years of experience in software development, team leadership, and cloud architecture.

## 🚀 Features

- **Modern Design**: Dark theme with gradient backgrounds and glass morphism effects
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Components**: Dynamic skill bars, project filters, and contact forms
- **Professional Content**: Comprehensive showcase of senior-level experience and achievements
- **Performance Optimized**: Fast loading with optimized assets and code splitting

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
portfolio/
│
├── public/                     # Public assets
│   ├── favicon.ico
│   ├── preview.png
│   └── index.html
│
├── src/
│   ├── assets/                  # Images/icons
│   │   ├── profile.jpg
│   │   └── project1.png
│   │
│   ├── components/              # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── SectionTitle.jsx
│   │
│   ├── sections/                # Portfolio sections
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── AchievementsSection.jsx
│   │   └── ContactSection.jsx
│   │
│   ├── data/                    # Static data
│   │   ├── skills.js
│   │   ├── projects.js
│   │   └── experience.js
│   │
│   ├── styles/                  # Tailwind/global CSS
│   │   └── globals.css
│   │
│   ├── utils/                   # Helper functions
│   │   └── emailService.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── router.jsx               # If using multiple pages
│
├── .env                         # API keys (for EmailJS, etc.)
├── package.json
└── tailwind.config.js
```

## 🎨 Design System

### Colors

- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Secondary**: Slate grays (#0f172a to #64748b)
- **Accent**: Purple gradient (#d946ef to #c026d3)
- **Background**: Dark gradient with glass morphism effects

### Typography

- **Primary Font**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono
- **Responsive**: Fluid typography with clamp()

### Components

- **Cards**: Glass morphism with hover effects
- **Buttons**: Multiple variants with animations
- **Skill Bars**: Animated progress indicators
- **Timeline**: Custom timeline for experience section

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/sections/HeroSection.jsx`)

   - Name, title, description
   - Social media links
   - Call-to-action buttons

2. **About Section** (`src/sections/AboutSection.jsx`)

   - Personal description
   - Stats and expertise areas

3. **Skills** (`src/data/skills.js`)

   - Technical skills with proficiency levels
   - Leadership skills
   - Certifications

4. **Projects** (`src/data/projects.js`)

   - Project details, technologies, achievements
   - GitHub and live demo links

5. **Experience** (`src/data/experience.js`)

   - Work history with achievements
   - Education and languages

6. **Contact** (`src/sections/ContactSection.jsx`)
   - Contact information
   - Social media links

### Styling

- **Colors**: Update `tailwind.config.js` for custom color scheme
- **Fonts**: Modify `src/styles/globals.css` for different typography
- **Animations**: Adjust Framer Motion settings in components

### Email Integration

To enable contact form functionality:

1. **Set up EmailJS** (recommended)

   ```bash
   npm install emailjs-com
   ```

2. **Configure environment variables**
   Create `.env` file:

   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_USER_ID=your_user_id
   ```

3. **Update email service** (`src/utils/emailService.js`)
   Uncomment and configure EmailJS integration

## 🎯 Key Features Explained

### Hero Section

- Animated text rotation for roles
- Floating background elements
- Interactive stats display
- Smooth scroll navigation

### Skills Section

- Categorized skill tabs
- Animated progress bars
- Leadership and technical skills
- Certification showcase

### Projects Section

- Filterable project categories
- Modal project details
- Technology tags
- GitHub and live demo links

### Experience Timeline

- Chronological work history
- Achievement highlights
- Technology stacks
- Education and languages

### Contact Form

- Form validation
- Email integration ready
- Social media links
- Availability status

## 🌟 Performance Optimizations

- **Code Splitting**: Automatic with Vite
- **Image Optimization**: Use WebP format for images
- **Font Loading**: Optimized Google Fonts loading
- **Animation Performance**: Hardware-accelerated animations
- **Bundle Size**: Tree-shaking and minification

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Adaptive layouts for medium screens
- **Desktop**: Full-featured desktop experience
- **Touch Friendly**: Optimized for touch interactions

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- ESLint configuration included
- Prettier formatting
- Consistent component structure
- TypeScript ready (can be added)

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository
2. Vercel will auto-detect Vite configuration
3. Deploy with one click

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy from Git

### Other Platforms

- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Configure for static site
- **AWS S3**: Upload dist folder

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support:

- Email: alex.rodriguez@email.com
- GitHub Issues: [Create an issue](https://github.com/yourusername/portfolio/issues)

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Lucide React** for beautiful icons
- **Vite** for fast development experience

---

**Built with ❤️ by Alex Rodriguez**
