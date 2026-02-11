import React, { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "No-Code Form Builder",
    description:
      "A dynamic web application that allows users to create, customize, and deploy forms without writing any code. Supports analytics, multiple field types, and real-time responses.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Nishant123257/No-Code-Form-Builder",
    live: "https://no-code-form-builder-nine.vercel.app/",
  },
  {
    title: "AI Resume Builder",
    description:
      "An intelligent platform that helps users generate professional resumes using AI. Offers templates, real-time preview, and downloadable PDF resumes.",
    tech: ["React", "Node.js", "OpenAI API", "Tailwind CSS"],
    github: "https://github.com/yourusername/ai-resume-builder",
    live: "https://yourliveproject.com/ai-resume-builder",
  },
  {
    title: "Employee Management System",
    description:
      "A full-stack application for managing employee records, attendance, and payroll. Provides secure login, role-based access, and reporting features.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    github: "https://github.com/Nishant123257/Employee-Management-System",
    live: "https://employee-management-system-ge7q.vercel.app/",
  },
  {
    title: "Chatter - Real-Time Communication",
    description:
      "A chat application enabling real-time messaging with multiple rooms, typing indicators, and notifications. Built for team collaboration and social communication.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/yourusername/chatter-app",
    live: "https://yourliveproject.com/chatter",
  },
];

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gray-900 text-gray-200 min-h-screen px-6 md:px-20 py-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 relative">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <div
              key={p.title}
              className={`bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-700 hover:scale-105 hover:rotate-0 hover:shadow-2xl ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Gradient top bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-t-xl"></div>

              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-cyan-400 mb-3 text-center">
                {p.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-300 mb-4">{p.description}</p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {p.tech.map((techItem) => (
                  <span
                    key={techItem}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm text-cyan-400 font-semibold"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4">
                <a
                  href={p.github}
                  target="_blank"
                  className="px-4 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all font-semibold"
                >
                  GitHub
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-cyan-400 text-black hover:bg-cyan-500 transition-all font-semibold"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
