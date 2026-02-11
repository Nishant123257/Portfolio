import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiJavascript, SiExpress } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    icon: <FaReact className="text-cyan-400" />,
    items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <FaNodeJs className="text-green-500" />,
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database",
    icon: <SiMongodb className="text-green-400" />,
    items: ["MongoDB", "Mongoose"],
  },
  {
    category: "Tools & Workflow",
    icon: <FaGitAlt className="text-orange-400" />,
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    category: "CS Fundamentals",
    icon: <SiJavascript className="text-yellow-400" />,
    items: ["DSA Basics", "OOP", "DBMS", "Computer Networks"],
  },
];

const Skills = () => {
  return (
    <section className="skills bg-gray-900 py-16 text-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 relative">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, index) => (
            <div
              key={index}
              className="skill-card bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <div className="flex items-center justify-center mb-3 text-3xl">
                {group.icon}
              </div>
              <h3 className="text-cyan-400 font-semibold text-xl mb-4 text-center">
                {group.category}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm">
                {group.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
