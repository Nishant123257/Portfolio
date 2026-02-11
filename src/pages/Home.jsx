import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profileImg from "../assets/profile.png";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Full-Stack Developer", "React Developer", "MERN Stack Engineer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <>
      {/* SEO Meta */}
      <head>
        <title>Nishant Kumar Giri | Full-Stack Developer</title>
        <meta
          name="description"
          content="Full-Stack Developer skilled in React, Node.js, MongoDB. Building scalable and user-centric web applications."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, React Developer, Node.js, MongoDB, Portfolio"
        />
      </head>

      <section className="home">
        <div className="home-content fade-in show">
          <span className="intro">Hi, I'm</span>

          <h1>
            Nishant <span>Kumar </span>
            <span>Giri</span>
          </h1>

          {/* Typing animation */}
          <h2 className="role">
            {text}
            <Cursor cursorStyle="|" />
          </h2>
          <p className="description">
            I build scalable, user-focused web applications using
            <strong> React, Node.js, and MongoDB</strong>, focusing on clean UI,
            performance, and real-world impact.
          </p>

          <div className="cta">
            <NavLink to="/projects" className="btn primary">
              View Projects
            </NavLink>

            <a
              href="/public/Deloitte.pdf"
              download
              className="btn secondary resume-btn"
            >
              <FaDownload /> Resume
            </a>
          </div>

          <div className="socials">
            <a
              href=" https://bit.ly/4qBgIoY"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nishant-kumar-giri-8a1a2a27a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="home-image fade-in show">
          <img src={profileImg} alt="Nishant Kumar" />
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span></span>
        </div>
      </section>
    </>
  );
};

export default Home;
