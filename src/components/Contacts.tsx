import { Mail, MapPinned, ContactRound } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contacts" id="contacts">
      <div className="title-2--container">
        <ContactRound color="#608abf" size={34} />
        <h2 className="title-2">Contact</h2>
      </div>

      <ul className="about-socials">
        <li>
          <a href="mailto:joao-almeida11@outlook.com">
            <Mail />
            <span>joao-almeida11@outlook.com</span>
          </a>
        </li>
        <li>
          <MapPinned />
          <span>Portugal</span>
        </li>
        <li>
          <FaLinkedin size={24} />
          <span>www.linkedin.com/in/joao-almeida11</span>
        </li>
        <li>
          <FaGithub size={24} />
          <span>https://github.com/joao-almeida11</span>
        </li>
      </ul>
    </section>
  );
}
