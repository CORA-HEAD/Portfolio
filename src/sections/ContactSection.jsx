import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import Button from "../components/Button";
import { sendEmail, validateForm } from "../utils/emailService";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const validation = validateForm(formData);
    if (!validation.isValid) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "anmolfutela94@gmail.com",
      link: "mailto:anmolfutela94@gmail.com",
      description: "Send me an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9817219375",
      link: "tel:+919817219375",
      description: "Call me during business hours",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Yamunanagar, Haryana",
      link: null,
      description: "Available for remote & on-site opportunities",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/CORA-HEAD",
      icon: Github,
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/anmolfutela",
      icon: Linkedin,
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Ready to discuss your next project or opportunity? Let's connect!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-primary-400" />
                Send Message
              </h3>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg"
                >
                  <p className="text-green-400 text-center">
                    Thank you! Your message has been sent successfully. I'll get
                    back to you soon.
                  </p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg"
                >
                  <p className="text-red-400 text-center">
                    Failed to send message. Please try again or contact me
                    directly at anmolfutela94@gmail.com
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-secondary-800/50 border border-secondary-700/30 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-secondary-800/50 border border-secondary-700/30 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary-800/50 border border-secondary-700/30 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-secondary-800/50 border border-secondary-700/30 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:border-primary-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={Send}
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary-900/20 rounded-lg">
                        <info.icon className="w-6 h-6 text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-secondary-300">{info.value}</p>
                        )}
                        <p className="text-sm text-secondary-400 mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <Card>
              <h3 className="text-xl font-bold text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-secondary-800/50 border border-secondary-700/30 rounded-lg text-secondary-400 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </Card>

            {/* Availability Status */}
            <Card>
              <h3 className="text-xl font-bold text-white mb-4">
                Current Status
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">
                    Available for opportunities
                  </span>
                </div>
                <p className="text-secondary-400 text-sm">
                  I'm currently open to new opportunities, internships, and
                  entry-level positions. Whether you need a passionate developer
                  for your team or want to collaborate on interesting projects,
                  I'd love to discuss how I can contribute and grow with your
                  organization.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card>
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-secondary-400 mb-6 max-w-2xl mx-auto">
              Let's discuss how my passion for web development, problem-solving
              skills, and eagerness to learn can contribute to your team and
              help achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                icon={Mail}
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Start a Conversation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon={Send}
                onClick={() =>
                  window.open("/anmol_futela_resume.pdf", "_blank")
                }
              >
                Download Resume
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
