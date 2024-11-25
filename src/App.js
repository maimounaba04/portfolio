import React, { useState, useRef } from 'react';
import {
  Home, User, Code, Book, Award, Send,
  Linkedin, MapPin, Mail, Phone, Briefcase
} from 'lucide-react';

const PROFILE_IMAGE = '/pic.jpeg';
const PROJECT_IMAGES = [
  '/project.jpeg',
  '/projet2.jpg',
  '/projet2.jpg'
];


const NavigationMenu = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { icon: Home, label: 'Home', section: 'home' },
    { icon: User, label: 'About', section: 'about' },
    { icon: Code, label: 'Projects', section: 'projects' },
    { icon: Book, label: 'Skills', section: 'skills' },
    { icon: Award, label: 'Achievements', section: 'achievements' },
    { icon: Send, label: 'Contact', section: 'contact' }
  ];

  return (
    <nav className="fixed left-0 top-0 h-full w-16 md:w-20 bg-gradient-to-b from-blue-900 to-blue-700 flex flex-col items-center py-8 space-y-4 z-50">
      {menuItems.map((item) => (
        <button
          key={item.section}
          onClick={() => setActiveSection(item.section)}
          className={`p-2 md:p-3 rounded-lg transition-all duration-300 ${activeSection === item.section
              ? 'bg-blue-600 text-white scale-110'
              : 'text-blue-200 hover:bg-blue-700 hover:text-white'
            }`}
          aria-label={item.label}
        >
          <item.icon size={20} className="mx-auto" />
          <span className="text-xs block mt-1 hidden md:block">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

const SocialLinks = () => (
  <div className="flex space-x-4 justify-center mt-4">
    <a
      href="https://www.linkedin.com/in/maimouna-ba-a24559254"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 transition-colors"
    >
      <Linkedin size={24} />
    </a>
    <a href="https://www.linkedin.com/in/maimouna-ba-a24559254"target="_blank"rel="noopener noreferrer"className="text-gray-800 hover:text-gray-600 transition-colors">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 15.13V19" />
      </svg>
    </a>
    <a
      href="https://www.linkedin.com/in/maimouna-ba-a24559254"
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-600 hover:text-pink-800 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    </a>
  </div>
);

const HomePage = () => (
  <div className="bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen flex items-center justify-center text-center p-4">
    <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl max-w-2xl w-full relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
      <img
        src={PROFILE_IMAGE}
        alt="Maimouna Ba"
        className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500 shadow-lg"
      />
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Maimouna Ba</h1>
      <p className="text-lg md:text-xl text-blue-700 mb-6">
        Data Science & Statistics Engineering Student
      </p>
      <p className="text-gray-600 mb-6">
        Passionate about transforming data into meaningful insights,
        with expertise in statistical analysis and data engineering.
      </p>
      <SocialLinks />
    </div>
  </div>
);

const AboutPage = () => (
  <div className="bg-white p-12">
    <h2 className="text-3xl font-bold text-blue-900 mb-8">About Me</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Education</h3>
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h4 className="font-bold">École Supérieure Polytechnique</h4>
          <p>Data Statistics & Data Engineering</p>
          <p className="text-gray-600">Oct 2024 - Present</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h4 className="font-bold">Institut Supérieur des Métiers de la Statistique</h4>
          <p>Professional License in Statistics (Top of Class)</p>
          <p className="text-gray-600">Oct 2021 - Jul 2024</p>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Personal Statement</h3>
        <p className="text-gray-700 leading-relaxed">
          As a dedicated data science student, I combine technical skills with analytical thinking
          to solve complex problems. My background in statistics and passion for data-driven
          decision-making drives me to explore innovative solutions in data engineering and analysis.
        </p>
      </div>
    </div>
  </div>
);

const SkillsPage = () => {
  const skillCategories = [
    {
      name: 'Programming Languages',
      skills: ['Python', 'R', 'SQL', 'LaTeX']
    },
    {
      name: 'Data Tools',
      skills: ['SPSS', 'Stata', 'CSPro', 'KoboCollect', 'Sphinx']
    },
    {
      name: 'Office Tools',
      skills: ['Microsoft Office', 'Odoo']
    },
    {
      name: 'Soft Skills',
      skills: ['Team Collaboration', 'Communication', 'Project Management']
    }
  ];

  return (
    <div className="bg-blue-50 p-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Skills & Expertise</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div key={category.name} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      name: 'Teacher Management Database',
      description: 'Developed an application for managing teacher records and tracking attendance',
      technologies: ['Database Design', 'Application Development'],
      image: PROJECT_IMAGES[0]
    },
    {
      name: 'Sociological Survey Analysis',
      description: 'Conducted research on gender dynamics, collecting and analyzing data using Stata and SPSS',
      technologies: ['Data Collection', 'Statistical Analysis'],
      image: PROJECT_IMAGES[1]
    },
    {
      name: 'Rural Education Impact Study',
      description: 'Performed econometric modeling to provide recommendations on rural education challenges',
      technologies: ['Econometric Modeling', 'Data Interpretation'],
      image: PROJECT_IMAGES[2]
    }
  ];

  return (
    <div className="p-6 md:p-12 bg-blue-50 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Projects & Research</h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2">
          <img
            src={projects[selectedProject].image}
            alt={projects[selectedProject].name}
            className="w-full rounded-xl shadow-lg transform transition-transform hover:scale-105"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-2xl font-semibold text-blue-700">
            {projects[selectedProject].name}
          </h3>
          <p className="text-gray-600">
            {projects[selectedProject].description}
          </p>
          <div className="flex flex-wrap gap-2">
            {projects[selectedProject].technologies.map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex space-x-2 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedProject(index)}
                className={`w-3 h-3 rounded-full ${selectedProject === index
                    ? 'bg-blue-600'
                    : 'bg-blue-200 hover:bg-blue-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AchievementsPage = () => {
  const achievements = [
    {
      title: 'UN Future Summit Youth Representative',
      description: 'Represented Mauritanian youth at the United Nations Summit of the Future Action Days in New York',
      date: 'September 2024'
    },
    {
      title: 'Top Graduate',
      description: 'Graduated top of the class from Institut Supérieur des Métiers de la Statistique',
      date: 'July 2024'
    }
  ];

  return (
    <div className="bg-white p-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Achievements & Honors</h2>
      <div className="space-y-6">
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="bg-blue-50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{achievement.title}</h3>
            <p className="text-gray-600 mb-2">{achievement.description}</p>
            <span className="text-sm text-blue-500">{achievement.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

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

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'skills': return <SkillsPage />;
      case 'projects': return <ProjectsPage />;
      case 'achievements': return <AchievementsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="flex">
      <NavigationMenu
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="ml-16 md:ml-20 w-full">
        {renderSection()}
      </main>
    </div>
  );
};

export default Portfolio;
