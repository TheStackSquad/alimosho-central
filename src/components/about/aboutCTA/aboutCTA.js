// src/components/about/aboutCTA/aboutCTA.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, X } from "lucide-react";
import { useFadeIn, animationVariants } from "@/animation/aboutAnimate";

export default function AboutCTA() {
  const [containerRef, isVisible] = useFadeIn();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    interest: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Us",
      value: "info@alimoshocentral.org",
      link: "mailto:info@alimoshocentral.org",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+234 XXX XXX XXXX",
      link: "tel:+234XXXXXXX",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "123 Community Road, Alimosho, Lagos",
      link: "https://maps.google.com",
    },
    {
      icon: Clock,
      label: "Office Hours",
      value: "Mon - Fri: 8AM - 6PM\nSat: 9AM - 2PM",
      link: null,
    },
  ];

  const interestOptions = [
    { value: "general", label: "General Inquiry" },
    { value: "volunteer", label: "Volunteer Opportunity" },
    { value: "partnership", label: "Partnership" },
    { value: "suggestion", label: "Suggestion" },
    { value: "complaint", label: "Complaint" },
    { value: "other", label: "Other" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "", interest: "general" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeStatus = () => setSubmitStatus(null);

  return (
    <div ref={containerRef} className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Join us in building a better community. Whether you want to volunteer,
          partner with us, or just learn more, we&apos;d love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          variants={animationVariants.container}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-white font-montserrat">
            Get In Touch
          </h3>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                variants={animationVariants.item}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">
                    {item.label}
                  </h4>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-blue-100 hover:text-white transition-colors duration-300 whitespace-pre-line"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-blue-100 whitespace-pre-line">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Media Links */}
          <motion.div
            variants={animationVariants.item}
            className="p-4 bg-white/10 backdrop-blur-sm rounded-xl"
          >
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { name: "Facebook", color: "hover:text-blue-400" },
                { name: "Twitter", color: "hover:text-blue-300" },
                { name: "Instagram", color: "hover:text-pink-400" },
                { name: "LinkedIn", color: "hover:text-blue-500" },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
                  className={`w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white ${social.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-sm font-semibold">
                    {social.name[0]}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={animationVariants.container}
          initial="hidden"
          animate="visible"
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-montserrat mb-6">
            Send us a Message
          </h3>

          {/* Status Messages */}
          <AnimatePresence>
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-4 mb-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle
                      size={20}
                      className="text-green-600 dark:text-green-400"
                    />
                    <span className="text-green-800 dark:text-green-200">
                      Message sent successfully! We&apos;ll get back to you soon.
                    </span>
                  </div>
                  <button
                    onClick={closeStatus}
                    className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                  >
                    <X size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg p-4 mb-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <X size={20} className="text-red-600 dark:text-red-400" />
                    <span className="text-red-800 dark:text-red-200">
                      Something went wrong. Please try again.
                    </span>
                  </div>
                  <button
                    onClick={closeStatus}
                    className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                  >
                    <X size={16} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={animationVariants.item}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                />
              </motion.div>

              <motion.div variants={animationVariants.item}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </motion.div>
            </div>

            <motion.div variants={animationVariants.item}>
              <label
                htmlFor="interest"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                I&apos;m interested in *
              </label>
              <select
                id="interest"
                name="interest"
                required
                value={formData.interest}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              >
                {interestOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </motion.div>

            <motion.div variants={animationVariants.item}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell us how we can help you..."
              />
            </motion.div>

            <motion.div variants={animationVariants.item}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </motion.div>

            <motion.p
              variants={animationVariants.item}
              className="text-xs text-gray-500 dark:text-gray-400 text-center"
            >
              * Required fields. We respect your privacy and will never share
              your information.
            </motion.p>
          </form>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center pt-8 border-t border-white/20"
      >
        <h3 className="text-xl font-semibold text-white mb-6">Quick Actions</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            {
              label: "Become a Volunteer",
              color: "bg-green-500 hover:bg-green-600",
            },
            {
              label: "Make a Donation",
              color: "bg-purple-500 hover:bg-purple-600",
            },
            {
              label: "Report an Issue",
              color: "bg-orange-500 hover:bg-orange-600",
            },
            { label: "Join Community", color: "bg-pink-500 hover:bg-pink-600" },
          ].map((action, index) => (
            <motion.button
              key={action.label}
              className={`${action.color} text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {action.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
