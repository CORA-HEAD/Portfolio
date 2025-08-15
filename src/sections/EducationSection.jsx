import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen, Award } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { education } from "../data/education";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education"
          subtitle="My academic journey and qualifications"
        />

        <div className="mt-16 space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline connector */}
              {index < education.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-primary-400 to-secondary-600"></div>
              )}

              <div className="flex items-start space-x-6">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <GraduationCap className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="flex-1 glass p-6 rounded-xl border border-secondary-700/30">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg font-semibold text-primary-400 mb-2">
                        {edu.institution}
                      </h4>
                    </div>
                    <div className="flex items-center space-x-2 text-secondary-400 text-sm mt-2 lg:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-secondary-400 text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>

                  <p className="text-secondary-300 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Award className="w-4 h-4 text-accent-400" />
                      <h5 className="font-semibold text-white">
                        Key Achievements
                      </h5>
                    </div>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-secondary-400 flex items-start space-x-2"
                        >
                          <span className="text-accent-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Relevant Courses */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <BookOpen className="w-4 h-4 text-primary-400" />
                      <h5 className="font-semibold text-white">
                        Relevant Courses
                      </h5>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-secondary-800/50 border border-secondary-600 rounded-full text-xs text-secondary-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status */}
                  <div className="mt-4 flex items-center space-x-2">
                    <span className="text-sm text-secondary-400">Status:</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.gpa === "In Progress"
                          ? "bg-yellow-900/30 text-yellow-400 border border-yellow-600/30"
                          : "bg-green-900/30 text-green-400 border border-green-600/30"
                      }`}
                    >
                      {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
