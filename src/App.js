import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion"; // For animations
import {
  Home, User, Code, Book, Award, Send, 
  Linkedin, MapPin, Mail, Phone, Briefcase, Trophy, Globe, ChevronRight, Github, GraduationCap, BarChart2, ChevronLeft
} from 'lucide-react';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import Confetti from "react-confetti";

// NavigationMenu Component
const NavigationMenu = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { icon: Home, label: "Home", section: "home" },
    { icon: User, label: "About", section: "about" },
    { icon: Book, label: "Skills", section: "skills" },
    { icon: Code, label: "Projects", section: "projects" },
    { icon: Award, label: "Achievements", section: "achievements" },
    { icon: Trophy, label: "Quiz", section: "quiz" },
    { icon: Globe, label: "Blog", section: "blog" },
    { icon: Send, label: "Contact", section: "contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleOverlayClick = (e) => {
    // Only close menu if the click is outside the menu content
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white z-50">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Portfolio</h1>
        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleOverlayClick}
          ></div>

          {/* Slide-in Menu */}
          <div
            ref={menuRef}
            className="fixed top-0 right-0 h-full w-2/3 bg-blue-800 shadow-lg transform translate-x-0 z-50 transition-transform duration-300 md:hidden"
          >
            <div className="flex justify-between items-center p-4">
              <h2 className="text-lg font-bold">Menu</h2>
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
                aria-label="Close Menu"
              >
                ✕
              </button>
            </div>
            <ul className="flex flex-col space-y-4 p-4">
              {menuItems.map((item) => (
                <li key={item.section}>
                  <button
                    onClick={() => {
                      setActiveSection(item.section);
                      setIsMenuOpen(false); // Close menu on selection
                    }}
                    className="flex items-center space-x-3 text-left w-full text-white hover:bg-blue-700 p-3 rounded-md"
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex md:items-center md:space-x-6">
        <ul className="flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.section}>
              <button
                onClick={() => setActiveSection(item.section)}
                className={`flex items-center space-x-2 p-3 text-white hover:bg-blue-700 rounded-md transition ${activeSection === item.section ? "bg-blue-600" : ""
                  }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// HomePage Component
const HomePage = ({ setActiveSection }) => {
  const [chartData, setChartData] = useState([]);

  // Simulate dynamic data for the chart
  useEffect(() => {
    const data = Array.from({ length: 10 }, (_, i) => ({
      time: `Week ${i + 1}`,
      value: Math.floor(Math.random() * 100),
    }));
    setChartData(data);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-blue-200 min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="absolute top-0 right-0 animate-spin-slow opacity-30"
          width="500"
          height="500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="250" fill="#3b82f6" />
        </svg>
        <svg
          className="absolute bottom-0 left-0 animate-pulse opacity-20"
          width="400"
          height="400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="400" fill="#6366f1" />
        </svg>
      </div>

      <div className="bg-white p-12 rounded-2xl shadow-2xl max-w-4xl w-full relative">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <img
            src={process.env.PUBLIC_URL + "/pic.jpeg"}
            alt="Profile"
            className="w-40 h-40 rounded-full shadow-lg animate-fade-in"
          />
          <div>
            <h1 className="text-4xl font-extrabold text-blue-900 mb-2">
              Maimouna BA
            </h1>
            <p className="text-lg text-blue-700 mb-2">
              Data Analyst & Engineer
            </p>
            <p className="text-gray-600 leading-relaxed">
              Turning data into actionable insights through advanced
              statistical analysis, machine learning, and data visualization.
            </p>
          </div>
        </div>

        {/* Graph Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            Dynamic Insights
          </h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ r: 5 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f3f4f6",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
                cursor={{ stroke: "#2563eb", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Call-to-Actions */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href={process.env.PUBLIC_URL + "/CV_Maimouna_Ba.pdf"}
            download
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 flex items-center gap-2"
          >
            Download CV
          </a>
          <a
            onClick={() => setActiveSection("contact")}
            className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 hover:shadow-lg transition duration-300 flex items-center gap-2 cursor-pointer"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition duration-300"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition duration-300"
          >
            <Github size={28} />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-red-500 hover:text-red-700 transition duration-300"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};


// AboutPage Component

const AboutPage = () => {
  const timeline = [
    {
      title: "Data Engineering Studies",
      date: "2024 - Present",
      description: "Focused on advanced data engineering concepts.",
      icon: GraduationCap,
    },
    {
      title: "Internship at SISTA",
      date: "2024",
      description: "Worked on real-world data analysis problems.",
      icon: Briefcase,
    },
    {
      title: "Professional Bachelor Degree in Statistics",
      date: "2021 - 2024",
      description: "Graduated top of my class.",
      icon: Book,
    }
  ];

  const stats = [
    { label: "Years of Experience", value: 2 },
    { label: "Projects Completed", value: 15 },
    { label: "Certifications", value: 10 },
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white min-h-screen py-12 px-6">
      {/* Header */}
      <motion.h2
        className="text-4xl font-extrabold text-blue-900 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Statistics Section */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Quick Stats</h3>
          <ul className="space-y-6">
            {stats.map((stat, index) => (
              <motion.li
                key={index}
                className="text-center text-lg text-gray-700 flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-4xl font-extrabold text-blue-600">
                  {stat.value}
                </span>
                <span>{stat.label}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Timeline Section */}
        <div className="col-span-2 relative">
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                {/* Connector Line */}
                <div
                  className={`hidden md:block h-0.5 w-full bg-blue-300 ${index % 2 === 0 ? "ml-16" : "mr-16"
                    }`}
                ></div>

                {/* Icon */}
                <div className="absolute md:relative -left-10 md:-translate-x-0 md:translate-y-0 bg-blue-600 text-white p-3 rounded-full shadow-md">
                  <item.icon size={24} />
                </div>

                {/* Card */}
                <div
                  className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 w-full max-w-md ${index % 2 === 0 ? "ml-auto" : "mr-auto"
                    }`}
                >
                  <h3 className="text-2xl font-semibold text-blue-700 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-blue-500 mb-2">{item.date}</p>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative SVG */}
      <svg
        className="absolute bottom-0 left-0 w-64 h-64 opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20l9-5-9-5-9 5 9 5z" />
        <path d="M12 4l9 5-9 5-9-5 9-5z" />
      </svg>
    </div>
  );
};



// Continue in the same way for SkillsPage, ProjectsPage, QuizPage, etc.
// SkillsPage Component
const SkillsPage = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90, description: "Data analysis, ML, web development" },
        { name: "R", level: 85, description: "Statistical analysis, data visualization" },
        { name: "SQL", level: 80, description: "Database design, query optimization" },
        { name: "JavaScript", level: 70, description: "Frontend development, APIs" },
      ],
    },
    {
      category: "Data Science Tools",
      icon: BarChart2,
      skills: [
        { name: "SPSS", level: 85, description: "Statistical modeling, survey analysis" },
        { name: "Tableau", level: 80, description: "Data visualization, dashboards" },
        { name: "Power BI", level: 75, description: "Business intelligence reports" },
      ],
    },
    {
      category: "Soft Skills",
      icon: User,
      skills: [
        { name: "Project Management", level: 90, description: "Team coordination, delivery" },
        { name: "Communication", level: 85, description: "Technical writing, presentations" },
        { name: "Team Leadership", level: 88, description: "Mentorship, task delegation" },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen p-12">
      <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
        Skills & Expertise
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Category Header */}
            <div className="flex items-center space-x-4 mb-6">
              <category.icon size={32} className="text-blue-600" />
              <h3 className="text-2xl font-semibold text-blue-700">
                {category.category}
              </h3>
              <span className="text-blue-500 text-sm">
                ({category.skills.length} skills)
              </span>
            </div>

            {/* Skills */}
            {category.skills.map((skill, i) => (
              <motion.div
                key={i}
                className="mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-blue-600">{skill.level}%</span>
                </div>
                <div className="relative w-full h-2 bg-blue-100 rounded-full">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ProjectsPage Component
const ProjectsPage = () => {
  const projects = [
    {
      name: "Teacher Management System",
      description:
        "A modular database solution for managing teachers’ records and tracking attendance.",
      technologies: ["Python", "SQL", "Database Design"],
      problem: "Schools struggled with inefficient record-keeping.",
      approach: "Built a real-time, modular database management system.",
      results: ["Reduced administrative workload by 50%", "Improved data accuracy significantly"],
      githubLink: "https://github.com/your-repo",
      image: "",
    },
    {
      name: "Rural Education Impact Study",
      description: "An econometric analysis of rural education challenges.",
      technologies: ["R", "SPSS", "Stata"],
      problem: "Limited insights into educational barriers in rural regions.",
      approach: "Surveyed rural schools, applied advanced statistical modeling.",
      results: ["Published actionable insights", "Identified key intervention strategies"],
      githubLink: "https://github.com/your-repo",
      image: "",
    },
    {
      name: "Sales Forecasting Model",
      description: "Developed a predictive model to forecast sales using machine learning.",
      technologies: ["Python", "Scikit-Learn", "Pandas"],
      problem: "Inaccurate sales predictions leading to overstocking.",
      approach: "Analyzed historical data, built and tuned predictive models.",
      results: ["Increased forecasting accuracy by 30%", "Optimized inventory management"],
      githubLink: "https://github.com/your-repo",
      image: "/sales-forecast.png",
    },
    {
      name: "Customer Segmentation Analysis",
      description: "Performed clustering analysis to identify customer segments.",
      technologies: ["Python", "KMeans", "Matplotlib"],
      problem: "Lack of targeted marketing strategies.",
      approach: "Used unsupervised learning to segment customers based on behavior.",
      results: ["Improved marketing ROI by 25%", "Enhanced customer engagement"],
      githubLink: "https://github.com/your-repo",
      image: "/customer-segmentation.png",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen p-6 md:p-12">
      <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
        Projects & Research
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Conditional Image Rendering */}
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-blue-200 flex items-center justify-center text-blue-600 font-bold">
                No Image Available
              </div>
            )}
            <div className="p-6 flex-grow">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold text-blue-600">Technologies Used:</h4>
                <p className="text-gray-600">{project.technologies.join(", ")}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  <Github size={20} className="mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};



// AchievementsPage Component
const AchievementsPage = () => {
  const achievements = [
    {
      title: "UN Future Summit Youth Representative",
      description: "Represented Mauritania at the United Nations Summit in New York.",
      date: "September 2024",
    },
    {
      title: "Top Graduate in Statistics",
      description: "Graduated with honors, ranking top of the class.",
      date: "July 2024",
    },
    {
      title: "Published Research Paper",
      description: "Authored a paper on econometric modeling for rural education.",
      date: "March 2023",
    },
    {
      title: "Volunteer Data Analyst",
      description: "Provided statistical insights for local NGO campaigns.",
      date: "December 2022",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-12 px-6">
      <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
        Achievements
      </h2>

      {/* Timeline Container */}
      <div className="relative mx-auto max-w-6xl">
        {/* Central Line (Desktop Only) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full"></div>

        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              } mb-12`}
          >
            {/* Connector Dot */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full z-10 ${index % 2 === 0 ? "md:-ml-2" : "md:ml-2"
                }`}
            ></div>

            {/* Vertical Line on Mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-300 h-full md:hidden"></div>

            {/* Achievement Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-md z-20 ${index % 2 === 0 ? "md:ml-12 text-left" : "md:mr-12 text-right"
                }`}
            >
              <h3 className="text-xl font-semibold text-blue-700">{achievement.title}</h3>
              <p className="text-gray-600 mt-2">{achievement.description}</p>
              <p className="text-sm text-blue-500 mt-2">{achievement.date}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
// BlogPage Component
const BlogPage = () => {
  const blogPosts = [
    {
      title: "Data Science in Practice",
      excerpt: "Exploring real-world applications of machine learning.",
      tags: ["Data Science", "Machine Learning"],
      readTime: "5 min",
      image: process.env.PUBLIC_URL + "/images/datascience.jpg",
      content:
        "In this post, we explore practical use cases of machine learning in industries like healthcare, finance, and retail. Learn how data scientists solve real-world problems.",
    },
    {
      title: "Effective Data Visualization",
      excerpt: "How to tell compelling stories with your data.",
      tags: ["Data Visualization", "Analytics"],
      readTime: "7 min",
      image: process.env.PUBLIC_URL + "/images/datavisualization.jpg",
      content:
        "Visualization is a critical part of analytics. Discover tools and techniques to create compelling data narratives that drive decision-making.",
    },
  ];

  const galleryImages = [
    { src: process.env.PUBLIC_URL + "/1.jpg", alt: "Slide 1" },
    { src: process.env.PUBLIC_URL + "/2.jpg", alt: "Slide 2" },
    { src: process.env.PUBLIC_URL + "/3.jpg", alt: "Slide 3" },
    { src: process.env.PUBLIC_URL + "/4.jpg", alt: "Slide 4" },
    { src: process.env.PUBLIC_URL + "/5.jpg", alt: "Slide 5" },
    { src: process.env.PUBLIC_URL + "/6.jpg", alt: "Slide 6" },
    { src: process.env.PUBLIC_URL + "/7.jpg", alt: "Slide 7" },
    { src: process.env.PUBLIC_URL + "/8.jpg", alt: "Slide 8" },
    { src: process.env.PUBLIC_URL + "/9.jpg", alt: "Slide 9" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically cycle through slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === galleryImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [galleryImages.length]);

  const nextSlide = () =>
    setCurrentSlide((prevSlide) =>
      prevSlide === galleryImages.length - 1 ? 0 : prevSlide + 1
    );

  const prevSlide = () =>
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? galleryImages.length - 1 : prevSlide - 1
    );

  return (
    <div className="bg-blue-50 min-h-screen py-12 px-6">
      <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
        Blog & Events
      </h2>

      {/* Event Gallery Section */}
      <div className="relative max-w-6xl mx-auto mb-12">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={galleryImages[currentSlide].src}
            alt={galleryImages[currentSlide].alt}
            className="w-full h-[500px] object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
          <p className="absolute bottom-4 left-4 text-white text-lg font-semibold">
            {galleryImages[currentSlide].alt}
          </p>
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-4 bg-white p-2 rounded-full shadow hover:shadow-md"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-4 bg-white p-2 rounded-full shadow hover:shadow-md"
        >
          <ChevronRight size={24} />
        </button>
      </div>


      {/* Blog Posts Section */}
      <div className="grid gap-8 md:grid-cols-2">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-800">{post.title}</h3>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-gray-500 text-sm">{post.readTime}</span>
            </div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Read More
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}; 

const SkillsQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  const questions = [
    {
      question: "What is my main programming language?",
      options: ["Python", "Java", "C++", "JavaScript"],
      correctAnswer: "Python",
    },
    {
      question: "Which tool do I use for statistical analysis?",
      options: ["SPSS", "Excel", "R", "Tableau"],
      correctAnswer: "SPSS",
    },
    {
      question: "Which visualization tool am I proficient in?",
      options: ["Power BI", "Excel", "Tableau", "Matplotlib"],
      correctAnswer: "Tableau",
    },
    {
      question: "What is the main focus of data engineering?",
      options: [
        "Building models",
        "Cleaning data",
        "Optimizing data pipelines",
        "Visualizing insights",
      ],
      correctAnswer: "Optimizing data pipelines",
    },
    {
      question: "Which library is used for deep learning in Python?",
      options: ["NumPy", "Pandas", "TensorFlow", "Matplotlib"],
      correctAnswer: "TensorFlow",
    },
  ];

  const handleAnswer = (answer) => {
    if (answered) return; // Prevent multiple clicks

    setAnswered(true);

    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setAnswered(false);
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }, 1000); // Delay to show feedback
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
  };

  const calculateProgress = () => ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="p-12 bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen flex flex-col items-center justify-center relative">
      {/* Confetti Celebration */}
      {showResult && score === questions.length && <Confetti />}

      {!showResult ? (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
          {/* Progress Bar */}
          <div className="relative w-full bg-gray-200 h-2 rounded-full mb-6">
            <motion.div
              className="absolute top-0 left-0 h-2 bg-blue-600 rounded-full"
              style={{ width: `${calculateProgress()}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${calculateProgress()}%` }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>

          {/* Question */}
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-semibold text-blue-800 mb-6"
          >
            {questions[currentQuestion].question}
          </motion.h2>

          {/* Options */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAnswer(option)}
                className={`w-full py-3 px-4 rounded-lg text-white font-medium ${answered
                  ? option === questions[currentQuestion].correctAnswer
                    ? "bg-green-500"
                    : "bg-red-500"
                  : "bg-blue-600 hover:bg-blue-700"
                  } transition duration-300`}
                disabled={answered}
              >
                {option}
              </motion.button>
            ))}
          </motion.div>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-semibold text-blue-800"
          >
            Quiz Completed!
          </motion.h2>

          {/* Score Display */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-center"
          >
            <p className="text-lg text-gray-600">
              Your Score:{" "}
              <span className="text-blue-700 font-bold">
                {score} / {questions.length}
              </span>
            </p>
          </motion.div>

          {/* Celebration Animation */}
          {score === questions.length ? (
            <motion.div
              className="mt-6 text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-green-500 font-bold text-lg">
                🎉 Perfect Score! You nailed it! 🎉
              </p>
            </motion.div>
          ) : score >= questions.length * 0.7 ? (
            <p className="text-yellow-500 font-bold text-lg">
              🌟 Great Job! Keep it up! 🌟
            </p>
          ) : (
            <p className="text-red-500 font-bold text-lg">
              Keep practicing, you’ll do better next time!
            </p>
          )}

          {/* Restart Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={restartQuiz}
            className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Restart Quiz
          </motion.button>
        </div>
      )}
    </div>
  );
};


// ContactPage Component
const ContactPage = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission
    alert('Message sent! (This is a demo)');
    formRef.current.reset();
  };

  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Contact Me</h2>

        <div className="space-y-4 mb-8">
          <div className="flex items-center">
            <Mail className="mr-4 text-blue-700" />
            <span>Maimounaab04@gmail.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="mr-4 text-blue-700" />
            <span>+222 33 89 50 04 / 43 07 87 09</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-4 text-blue-700" />
            <span>Nouakchott, Mauritania</span>
          </div>
          <div className="flex items-center">
            <Briefcase className="mr-4 text-blue-700" />
            <a
              href="https://www.linkedin.com/in/maimouna-ba-a24559254"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            required
            rows="4"
            className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};



const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    console.log("Active Section:", activeSection); // Debugging
    switch (activeSection) {
      case 'home':
        return <HomePage setActiveSection={setActiveSection} />;
      case 'about':
        return <AboutPage />;
      case 'skills':
        return <SkillsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'achievements':
        return <AchievementsPage />;
      case 'blog':
        return <BlogPage />;
      case 'quiz':
        return <SkillsQuiz />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };


  return (
    <div className="flex">
      <NavigationMenu
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="w-full mt-[4rem]">{renderSection()}</main>
    </div>
  );
};

export default App;
