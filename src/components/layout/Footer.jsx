import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-name">
          Nishant Kumar<span>.</span>
        </p>

        <div className="footer-socials">
          <a href=" https://bit.ly/4qBgIoY" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href=" https://bit.ly/49bBrKm" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="nishantgiri990@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Nishant Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
