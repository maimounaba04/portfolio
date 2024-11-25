import React, { useState } from 'react';
import { Home, User, Code, Book, Award, Send } from 'lucide-react';

// Mock profile image - replace with actual image path
const PROFILE_IMAGE = 'pic.jpeg';

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
    <nav className="fixed left-0 top-0 h-full w-20 bg-blue-900 flex flex-col items-center py-8 space-y-6">
      {menuItems.map((item) => (
        <button
          key={item.section}
          onClick={() => setActiveSection(item.section)}
          className={`p-3 rounded-lg ${activeSection === item.section
              ? 'bg-blue-600 text-white'
              : 'text-blue-200 hover:bg-blue-700'
            }`}
        >
          <item.icon size={24} />
          <span className="text-xs block mt-1">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

const HomePage = () => (
  <div className="bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen flex items-center justify-center text-center">
    <div className="bg-white p-12 rounded-xl shadow-2xl max-w-2xl">
      <img
        src={PROFILE_IMAGE}
        alt="Maimouna Ba"
        className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500"
      />
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Maimouna Ba</h1>
      <p className="text-xl text-blue-700 mb-6">
        Data Science & Statistics Engineering Student
      </p>
      <p className="text-gray-600">
        Passionate about transforming data into meaningful insights,
        with expertise in statistical analysis and data engineering.
      </p>
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
  const projects = [
    {
      name: 'Teacher Management Database',
      description: 'Developed an application for managing teacher records and tracking attendance',
      technologies: ['Database Design', 'Application Development']
    },
    {
      name: 'Sociological Survey Analysis',
      description: 'Conducted research on gender dynamics, collecting and analyzing data using Stata and SPSS',
      technologies: ['Data Collection', 'Statistical Analysis']
    },
    {
      name: 'Rural Education Impact Study',
      description: 'Performed econometric modeling to provide recommendations on rural education challenges',
      technologies: ['Econometric Modeling', 'Data Interpretation']
    }
  ];

  return (
    <div className="p-12 bg-white">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Projects & Research</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-4">{project.name}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactPage = () => (
  <div className="bg-blue-50 min-h-screen flex items-center justify-center p-12">
    <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Contact Me</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Maimounaab04@gmail.com</span>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.096A5.51 5.51 0 0 0 12 16a5.51 5.51 0 0 0 1.952-1.904m-1.52-2.577a3 3 0 1 1-4.288-4.208 3 3 0 0 1 4.288 4.208Z" />
          </svg>
          <span>+222 33 89 50 04 / 43 07 87 09</span>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Nouakchott, Mauritania</span>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
          </svg>
          <a href="https://www.linkedin.com/in/maimouna-ba-a24559254" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  </div>
);

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
      <main className="ml-20 w-full">
        {renderSection()}
      </main>
    </div>
  );
};

export default Portfolio;