import { Mail, MapPinned } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ProfilePicture from "../assets/profile-picture.webp";

export default function AboutMe() {
  return (
    <section className="about" id="about">
      <figure className="profile-picture">
        <img
          src={ProfilePicture}
          alt="Profile of developer"
          height={300}
          width={300}
        />
      </figure>
      <h1 className="title">João Almeida</h1>
      <span className="subtitle">Frontend Developer</span>
      <p className="about-description">
        Frontend developer passionate about building user-friendly web apps with
        React and modern technologies, with hands-on experience in real-world,
        team-based environments.
      </p>
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
          <a href="https://www.linkedin.com/in/joao-almeida11" target="_blank">
            <FaLinkedin size={24} color="#608abf" />
            <span>www.linkedin.com/in/joao-almeida11</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/joao-almeida11" target="_blank">
            <FaGithub size={24} color="#608abf" />
            <span>https://github.com/joao-almeida11</span>
          </a>
        </li>
        <li>
          <a href="JoaoAlmeida_CV.pdf" download className="download-cv">
            Download CV
          </a>
        </li>
      </ul>
    </section>
  );
}
