import { useEffect, useRef, useState } from "react";
import PageWrapper from "../components/layout/PageWrapper";
import skills from "../data/skills";

const highlights = [
  { title: "Projects Completed", value: 4 },
  { title: "Months of Experience", value: 12 },
  { title: "Full-Stack Applications", value: 4 },
  { title: "Technologies Used", value: 10 },
];

const aboutParagraphs = [
  "I enjoy transforming complex problems into simple, intuitive solutions. My work emphasizes performance, maintainability, and modern UI/UX design.",
  "My primary stack includes React, Node.js, MongoDB, and I continually improve my knowledge in system design, DevOps practices, and software best practices.",
  "I love collaborating with teams, mentoring juniors, and contributing to open-source projects. I also enjoy learning emerging technologies like Next.js, TypeScript, and Tailwind CSS to stay on top of modern development trends.",
];

const About = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const highlightsRef = useRef(null);

  const [aboutVisible, setAboutVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [highlightsVisible, setHighlightsVisible] = useState(false);

  const [paragraphVisible, setParagraphVisible] = useState(
    Array(aboutParagraphs.length).fill(false),
  );
  const [counters, setCounters] = useState(Array(highlights.length).fill(0));

  // Intersection Observer for sections
  useEffect(() => {
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === aboutRef.current && entry.isIntersecting)
          setAboutVisible(true);
        if (entry.target === skillsRef.current && entry.isIntersecting)
          setSkillsVisible(true);
        if (entry.target === highlightsRef.current && entry.isIntersecting)
          setHighlightsVisible(true);
      });
    }, observerOptions);

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (highlightsRef.current) observer.observe(highlightsRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
      if (highlightsRef.current) observer.unobserve(highlightsRef.current);
    };
  }, []);

  // Sequential paragraph animation
  useEffect(() => {
    if (aboutVisible) {
      aboutParagraphs.forEach((_, index) => {
        setTimeout(() => {
          setParagraphVisible((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * 400);
      });
    }
  }, [aboutVisible]);

  // Animated counters
  useEffect(() => {
    if (highlightsVisible) {
      highlights.forEach((item, index) => {
        let start = 0;
        const end = item.value;
        const duration = 1200; // 1.2 seconds
        const stepTime = Math.floor(duration / end);

        const interval = setInterval(() => {
          start += 1;
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = start;
            return newCounters;
          });
          if (start >= end) clearInterval(interval);
        }, stepTime);
      });
    }
  }, [highlightsVisible]);

  return (
    <PageWrapper>
      <main className="bg-gray-900 min-h-screen px-6 md:px-20 py-16 text-gray-200">
        {/* ===== About Me Section ===== */}
        <section
          ref={aboutRef}
          className={`about max-w-5xl mx-auto space-y-8 transition-all duration-700 transform ${
            aboutVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center space-y-4 relative">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              About Me
            </h1>
            <div className="w-32 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-2"></div>
            <p className="text-gray-300 text-lg md:text-xl">
              I’m a passionate full-stack developer focused on building clean,
              scalable, and user-centric web applications using modern
              technologies.
            </p>
          </div>

          <div className="space-y-4 text-justify md:text-left text-gray-200">
            {aboutParagraphs.map((para, index) => (
              <p
                key={index}
                className={`transition-all duration-700 transform ${
                  paragraphVisible[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* ===== Highlights Section ===== */}
        {/* ===== Highlights Section ===== */}
        <section
          ref={highlightsRef}
          className={`max-w-5xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ease-out ${
            highlightsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="bg-gray-800 rounded-xl p-6 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
              <h3 className="text-4xl font-bold text-cyan-400">
                {counters[index]}+
              </h3>
              <p className="text-gray-300 mt-2 text-sm">{item.title}</p>
            </div>
          ))}
        </section>

        {/* ===== Skills Section ===== */}
        <section
          ref={skillsRef}
          className={`about-skills max-w-5xl mx-auto mt-20 space-y-10 transition-all duration-700 transform ${
            skillsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-white relative">
            Technical Skills
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-2"></div>
          </h2>

          <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className={`relative skill-card p-6 rounded-xl bg-gray-800 text-gray-200
    transition-all duration-700 ease-out
    hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
    ${skillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />

                <h3 className="text-cyan-400 font-semibold text-xl mb-4 text-center">
                  {skill.category}
                </h3>

                <ul className="space-y-2 list-disc list-inside text-sm">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA Section ===== */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-gray-300 mb-6">
            I’m open to collaborating on exciting projects and opportunities.
            Feel free to reach out via email or connect on LinkedIn.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="nishantgiri990@gmail.com"
              className="bg-cyan-400 hover:bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/nishant-kumar-giri-8a1a2a27a/"
              target="_blank"
              className="border border-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-lg font-semibold transition-all"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};

export default About;
