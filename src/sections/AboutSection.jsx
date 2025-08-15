import React from "react";
import { motion } from "framer-motion";
import { Users, Code, Cloud, Award, Clock, MapPin } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";

const AboutSection = () => {
  const stats = [
    {
      icon: Code,
      number: "8+",
      label: "Projects Built",
      color: "text-primary-400",
    },
    {
      icon: Cloud,
      number: "15+",
      label: "Technologies",
      color: "text-accent-400",
    },
    {
      icon: Award,
      number: "2",
      label: "Certificates",
      color: "text-primary-400",
    },
    {
      icon: Users,
      number: "100%",
      label: "Passionate",
      color: "text-accent-400",
    },
  ];

  const expertise = [
    {
      title: "Frontend Development",
      description:
        "Skilled in React.js, HTML, CSS, and Tailwind CSS. Building responsive and modern user interfaces.",
      icon: "💻",
    },
    {
      title: "Backend Development",
      description:
        "Experience with Node.js, Express.js, and building RESTful APIs. Database management with MySQL and MongoDB.",
      icon: "⚙️",
    },
    {
      title: "Problem Solving",
      description:
        "Strong debugging skills and ability to solve complex technical challenges with attention to detail.",
      icon: "🔧",
    },
    {
      title: "Team Collaboration",
      description:
        "Effective communication skills and eagerness to learn new technologies while working in team environments.",
      icon: "🤝",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="Enthusiastic fresher developer passionate about building innovative web solutions"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary-500/30 shadow-2xl">
                <img
                  src="/anmol-profile.jpg"
                  alt="Anmol Futela"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Full Stack Web Developer
              </h3>

              <p className="text-secondary-300 leading-relaxed">
                I'm an enthusiastic fresher developer with a strong foundation
                in modern web technologies. I specialize in React.js, Node.js,
                and full-stack development, with hands-on experience in building
                responsive web applications and RESTful APIs.
              </p>

              <p className="text-secondary-300 leading-relaxed">
                My journey in web development started with learning the
                fundamentals of HTML, CSS, and JavaScript. I've since expanded
                my skills to include React.js for frontend development, Node.js
                and Express.js for backend services, and database management
                with both MySQL and MongoDB.
              </p>

              <p className="text-secondary-300 leading-relaxed">
                I'm passionate about learning new technologies and contributing
                to innovative AI-driven solutions. I believe in writing clean,
                maintainable code and always strive to improve my skills through
                continuous learning and practical projects.
              </p>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-secondary-300">Yamunanagar, Haryana</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-400" />
                <span className="text-secondary-300">
                  Available for opportunities
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center"
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className={`text-3xl font-bold ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-secondary-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Expertise Cards */}
            <div className="space-y-4">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-4 rounded-lg border border-secondary-700/30"
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-secondary-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <Card className="text-center">
            <h4 className="text-xl font-semibold text-white mb-3">
              Technical Skills
            </h4>
            <p className="text-secondary-400">
              React.js, Node.js, Express.js, MySQL, MongoDB, JavaScript, HTML,
              CSS, and Tailwind CSS.
            </p>
          </Card>

          <Card className="text-center">
            <h4 className="text-xl font-semibold text-white mb-3">
              Soft Skills
            </h4>
            <p className="text-secondary-400">
              Problem-solving, attention to detail, strong communication, team
              collaboration, and eagerness to learn.
            </p>
          </Card>

          <Card className="text-center">
            <h4 className="text-xl font-semibold text-white mb-3">Learning</h4>
            <p className="text-secondary-400">
              Continuously learning new technologies and best practices to stay
              updated with the latest industry trends.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
