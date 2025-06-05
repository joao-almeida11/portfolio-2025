import { Mail, MapPinned } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export default function AboutMe() {
  return (
    <section className="about" id="about">
      <h1 className="title">João Almeida</h1>
      <span className="subtitle">Frontend Developer</span>
      <p>A frontend web developer with some knowledge of the backend.</p>
      <ul className="about-socials">
        <li>
          <a href="mailto:joao-almeida11@outlook.com">
            <Mail color="#608abf" />
            <span>joao-almeida11@outlook.com</span>
          </a>
        </li>
        <li>
          <MapPinned color="#608abf" />
          <span>Portugal</span>
        </li>
        <li>
          <FaLinkedin size={24} color="#608abf" />
          <span>
            <a
              href="https://www.linkedin.com/in/joao-almeida11"
              target="_blank"
            >
              www.linkedin.com/in/joao-almeida11
            </a>
          </span>
        </li>
        <li>
          <FaGithub size={24} color="#608abf" />
          <span>
            <a href="https://github.com/joao-almeida11" target="_blank">
              https://github.com/joao-almeida11
            </a>
          </span>
        </li>
      </ul>
    </section>
  );
}
