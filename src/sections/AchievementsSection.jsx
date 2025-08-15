import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Award, TrendingUp, Users, Target } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Academic Excellence Award",
      organization: "Maharaja Agrasen Institute",
      year: "2024",
      description:
        "Recognized for outstanding academic performance and consistent high grades in Computer Applications program.",
      icon: Trophy,
      category: "Academic",
      color: "text-yellow-400",
    },
    {
      title: "Best Project Award",
      organization: "College Tech Fest",
      year: "2024",
      description:
        "Won first place for developing the StudyBuddy E-Learning Platform with innovative features and clean code.",
      icon: Award,
      category: "Project",
      color: "text-blue-400",
    },
    {
      title: "HackerRank Certifications",
      organization: "HackerRank",
      year: "2024",
      description:
        "Earned JavaScript (Basic) and SQL (Basic) certificates demonstrating strong programming fundamentals.",
      icon: Star,
      category: "Certification",
      color: "text-purple-400",
    },
    {
      title: "Problem Solving Champion",
      organization: "College Coding Club",
      year: "2023",
      description:
        "Recognized for exceptional problem-solving skills and helping peers with debugging and code optimization.",
      icon: TrendingUp,
      category: "Skills",
      color: "text-green-400",
    },
    {
      title: "Team Collaboration Award",
      organization: "Group Project Competition",
      year: "2023",
      description:
        "Awarded for excellent teamwork and communication skills while working on collaborative development projects.",
      icon: Users,
      category: "Leadership",
      color: "text-pink-400",
    },
    {
      title: "Innovation in Learning",
      organization: "Student Developer Community",
      year: "2023",
      description:
        "Recognized for creating innovative learning tools and sharing knowledge with fellow students.",
      icon: Target,
      category: "Innovation",
      color: "text-orange-400",
    },
  ];

  const metrics = [
    {
      number: "3+",
      label: "Projects Built",
      description: "Full-stack applications with modern technologies",
      icon: "🚀",
    },
    {
      number: "5+",
      label: "Technologies Learned",
      description: "React, Node.js, Express, MySQL, MongoDB",
      icon: "💻",
    },
    {
      number: "2",
      label: "Certifications",
      description: "HackerRank JavaScript and SQL certificates",
      icon: "🏆",
    },
    {
      number: "100%",
      label: "Passionate",
      description: "Dedicated to learning and improving skills",
      icon: "🔥",
    },
    {
      number: "4.0",
      label: "GPA",
      description: "Strong academic performance in BCA program",
      icon: "📚",
    },
    {
      number: "24/7",
      label: "Learning Mode",
      description: "Always eager to learn new technologies",
      icon: "⚡",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      position: "BCA Student, Classmate",
      content:
        "Anmol is an amazing study partner! He helped me understand React.js concepts and always explains complex topics in a simple way. His projects are really impressive.",
      rating: 5,
    },
    {
      name: "Rahul Kumar",
      position: "BCA Student, Project Partner",
      content:
        "Working with Anmol on our group project was great. He's very organized, writes clean code, and always meets deadlines. His debugging skills are excellent!",
      rating: 5,
    },
    {
      name: "Neha Patel",
      position: "BCA Student, Coding Club Member",
      content:
        "Anmol is always willing to help others learn. He shares his knowledge freely and creates really useful tools. His passion for coding is inspiring!",
      rating: 5,
    },
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Achievements & Recognition"
          subtitle="Academic achievements, certifications, and recognition from my learning journey"
        />

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="h-full">
                  <div className="text-3xl mb-2">{metric.icon}</div>
                  <div className="text-2xl font-bold text-primary-400 mb-1">
                    {metric.number}
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-secondary-400">
                    {metric.description}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Awards & Recognition
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg bg-secondary-800/30 border border-secondary-700/30 hover:border-primary-500/30 transition-colors duration-300"
                >
                  <div className="flex items-start space-x-3 mb-4">
                    <achievement.icon
                      className={`w-8 h-8 ${achievement.color} flex-shrink-0`}
                    />
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {achievement.title}
                      </h4>
                      <div className="flex items-center space-x-2 text-sm text-secondary-400 mb-2">
                        <span>{achievement.organization}</span>
                        <span>•</span>
                        <span>{achievement.year}</span>
                      </div>
                      <span className="px-2 py-1 bg-primary-900/20 text-primary-400 text-xs rounded-full border border-primary-500/30">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-secondary-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              College Student Testimonials
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 inline mx-1"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <blockquote className="text-secondary-300 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-secondary-400">
                      {testimonial.position}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Additional Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Learning Journey Highlights
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Academic Activities
                </h4>
                <ul className="space-y-3">
                  {[
                    "Active member of College Coding Club",
                    "Participated in inter-college tech competitions",
                    "Completed online courses on React and Node.js",
                    "Mentored junior students in programming",
                  ].map((event, index) => (
                    <motion.li
                      key={event}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-2"
                    >
                      <span className="text-primary-400 mt-1">•</span>
                      <span className="text-secondary-300">{event}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Skills Development
                </h4>
                <ul className="space-y-3">
                  {[
                    "Self-taught modern web technologies",
                    "Built practical projects for portfolio",
                    "Learned version control with Git",
                    "Developed problem-solving abilities",
                  ].map((pub, index) => (
                    <motion.li
                      key={pub}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-2"
                    >
                      <span className="text-primary-400 mt-1">•</span>
                      <span className="text-secondary-300">{pub}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
