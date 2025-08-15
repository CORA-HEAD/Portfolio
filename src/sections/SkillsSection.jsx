import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { skills, certifications } from "../data/skills";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { key: "frontend", name: "Frontend", icon: "🎨" },
    { key: "backend", name: "Backend", icon: "⚙️" },
    { key: "cloud", name: "Cloud & DevOps", icon: "☁️" },
    { key: "devops", name: "DevOps", icon: "🔄" },
  ];

  const SkillBar = ({ skill, index }) => {
    const [skillRef, skillInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <motion.div
        ref={skillRef}
        initial={{ opacity: 0, x: -20 }}
        animate={skillInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="mb-6"
      >
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-lg">{skill.icon}</span>
            <span className="font-medium text-white">{skill.name}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-secondary-400">
            <span>{skill.level}%</span>
            <span>•</span>
            <span>{skill.years} years</span>
          </div>
        </div>
        <div className="skill-bar">
          <motion.div
            className="skill-progress"
            initial={{ width: 0 }}
            animate={skillInView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technical skills and soft skills developed through learning and project work"
        />

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.key
                  ? "bg-primary-500 text-white shadow-lg"
                  : "bg-secondary-800/50 text-secondary-300 hover:bg-secondary-700/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-2xl font-bold text-white mb-6">
                Technical Skills
              </h3>
              <div>
                {skills.technical[activeCategory].map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Leadership Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-2xl font-bold text-white mb-6">
                Leadership & Soft Skills
              </h3>
              <div className="space-y-6">
                {skills.leadership.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-primary-400">
                        {skill.level}%
                      </span>
                    </div>
                    <p className="text-sm text-secondary-400">
                      {skill.description}
                    </p>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Additional Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-3 rounded-lg bg-secondary-800/30 border border-secondary-700/30"
                >
                  <span className="text-secondary-300 text-sm">{skill}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Certifications */}
        {/* Certifications */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  viewport={{ once: true }}
  className="mt-16"
>
  <Card>
    <h3 className="text-2xl font-bold text-white mb-8 text-center">
      Certifications & Achievements
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {certifications.map((cert, index) => {
        // If no link, clicking image will open full-size image
        const clickTarget = cert.link || cert.image;

        return (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden bg-secondary-800/30 border border-secondary-700/30 hover:border-primary-500/50 transition-colors duration-300 shadow-lg"
          >
            <a
              href={clickTarget}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {/* Certificate Image */}
              {cert.image && (
                <div className="overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}

              {/* Certificate Details */}
              <div className="p-5">
                <h4 className="text-lg font-semibold text-white mb-1">{cert.name}</h4>
                <p className="text-sm text-secondary-400 mb-1">{cert.issuer}</p>
                <p className="text-xs text-primary-400">{cert.year}</p>

                {/* Description for all certificates */}
                {cert.description && (
                  <p className="mt-2 text-xs text-secondary-300">
                    {cert.description}
                  </p>
                )}
              </div>
            </a>
          </motion.div>
        );
      })}
    </div>
  </Card>
</motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;
