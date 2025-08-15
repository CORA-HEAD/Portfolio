import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Target,
  ExternalLink,
  Eye,
  Medal, 
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "3rd Position - Quiz Competition",
      organization: "College Cultural Fest",
      year: "2023",
      description:
        "Secured third position in the Inter-College Quiz Competition, showcasing quick thinking and broad general knowledge.",
      icon: Medal,
      category: "Competition",
      color: "text-purple-400",
      certificate: null,
      certificateLink: null,
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
      certificate: null,
      certificateLink: null,
    },
  ];

  const metrics = [
    {
      number: "8+",
      label: "Projects Built",
      description:
        "Taskify, StudyBuddy, Currency Converter, Portfolio, SmartQuiz AI, Weather App, Password Generator, and URL Shortener",
      icon: "🚀",
    },
    {
      number: "15+",
      label: "Technologies Mastered",
      description:
        "C, C++, Core Java, Node.js, Express.js, React.js, HTML, CSS, Tailwind CSS, Bootstrap, MongoDB, MySQL, Linux, Firebase, Firestore, and more",
      icon: "💻",
    },
    {
      number: "5",
      label: "Certifications",
      description: "HackerRank certifications in JavaScript and SQL",
      icon: "🏆",
    },
    {
      number: "100%",
      label: "Passion for Development",
      description: "Fully committed to continuous learning and building impactful projects",
      icon: "🔥",
    },
    {
      number: "71.2%",
      label: "GPA",
      description: "Consistent academic performance in BCA program",
      icon: "📚",
    },
  ];

  const testimonials = [
    {
      name: "Sidak Singh",
      position: "BCA Student, Classmate",
      content:
        "Anmol is an amazing study partner! He explains complex topics in a simple and easy-to-understand way. His projects are really impressive.",
      rating: 4,
    },
    {
      name: "Rahul Kumar",
      position: "BCA Student, Peer Learner",
      content:
        "Anmol’s guidance has helped me improve my coding skills tremendously. He’s patient, explains concepts clearly, and always brings innovative ideas to the table.",
      rating: 5,
    },
    {
      name: "Raman Dhiman",
      position: "BCA Student, Node.js Project Collaborator",
      content:
        "I worked with Anmol on a Node.js backend project, and his knowledge of APIs, Express, and database integration was outstanding. He made the development process smooth and efficient.",
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="h-full p-6 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-3">{metric.icon}</div>
                  <div className="text-3xl font-bold text-primary-400 mb-2">
                    {metric.number}
                  </div>
                  <div className="text-sm font-semibold text-white mb-2">
                    {metric.label}
                  </div>
                  <div className="text-xs text-secondary-400 leading-relaxed">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg bg-secondary-800/30 border border-secondary-700/30 hover:border-primary-500/30 hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div
                      className={`p-3 rounded-lg bg-primary-900/20 ${achievement.color} bg-opacity-20`}
                    >
                      <achievement.icon
                        className={`w-6 h-6 ${achievement.color} flex-shrink-0`}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-2 text-lg">
                        {achievement.title}
                      </h4>
                      <div className="flex items-center space-x-2 text-sm text-secondary-400 mb-3">
                        <span className="font-medium">
                          {achievement.organization}
                        </span>
                        <span>•</span>
                        <span>{achievement.year}</span>
                      </div>
                      <span className="px-3 py-1 bg-primary-900/20 text-primary-400 text-xs rounded-full border border-primary-500/30 font-medium">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-secondary-400 leading-relaxed mb-4">
                    {achievement.description}
                  </p>

                  {/* Certificate Display */}
                  {achievement.certificate && (
                    <div className="mt-4">
                      <div className="relative group">
                        <img
                          src={achievement.certificate}
                          alt={`${achievement.title} Certificate`}
                          className="w-full h-32 object-cover rounded-lg border border-secondary-600/30 hover:border-primary-500/50 transition-colors duration-300"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                          <div className="flex space-x-2">
                            <motion.button
                              onClick={() =>
                                window.open(achievement.certificate, "_blank")
                              }
                              className="p-2 bg-primary-500/80 rounded-full text-white hover:bg-primary-400 transition-colors duration-300"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Eye className="w-4 h-4" />
                            </motion.button>
                            {achievement.certificateLink && (
                              <motion.a
                                href={achievement.certificateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-accent-500/80 rounded-full text-white hover:bg-accent-400 transition-colors duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <ExternalLink className="w-4 h-4" />
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-secondary-400">
                          Certificate
                        </span>
                        {achievement.certificateLink && (
                          <a
                            href={achievement.certificateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary-400 hover:text-primary-300 transition-colors duration-300 flex items-center space-x-1"
                          >
                            <span>View Certificate</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
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
          className="mb-16"
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
                  className="text-center p-6 rounded-lg bg-secondary-800/20 border border-secondary-700/30 hover:border-primary-500/30 transition-all duration-300"
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
                  <blockquote className="text-secondary-300 mb-6 italic leading-relaxed text-base">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-white text-lg">
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
        >
          <Card>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Learning Journey Highlights
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6 p-6 rounded-lg bg-secondary-800/20 border border-secondary-700/30">
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <span className="text-primary-400 mr-3">📚</span>
                  Academic Activities
                </h4>
                <ul className="space-y-4">
                  {[
                    "Participated in college tech competitions",
                    "Completed online courses on React and Node.js",
                    "Mentored junior students in programming",
                  ].map((event, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <span className="text-primary-400 mt-1 text-lg">•</span>
                      <span className="text-secondary-300 leading-relaxed">
                        {event}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 p-6 rounded-lg bg-secondary-800/20 border border-secondary-700/30">
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <span className="text-primary-400 mr-3">🚀</span>
                  Skills Development
                </h4>
                <ul className="space-y-4">
                  {[
                    "Self-taught modern web technologies",
                    "Built practical projects for portfolio",
                    "Learned version control with Git",
                    "Developed problem-solving abilities",
                  ].map((pub, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <span className="text-primary-400 mt-1 text-lg">•</span>
                      <span className="text-secondary-300 leading-relaxed">
                        {pub}
                      </span>
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
