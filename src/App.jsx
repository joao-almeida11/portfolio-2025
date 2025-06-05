import { Mail, MapPinned } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
function App() {
  return (
    <>
      <nav>
        <div>Logo</div>
        <ul>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <section></section>
      <section className="about">
        <h1>João Almeida</h1>
        <h2>Frontend Developer</h2>
        <p>
          I'm João Almeida, a frontend web developer with some knowledge of the
          backend.
        </p>
        <ul>
          <li>
            <Mail />
            joao-almeida11@outlook.com
          </li>
          <li>
            <MapPinned />
            Portugal
          </li>
          <li>
            <FaLinkedin />
            www.linkedin.com/in/joao-almeida11
          </li>
          <li>
            <FaGithub />
            https://github.com/joao-almeida11
          </li>
        </ul>
      </section>
      <section className="experience"></section>
      <section className="projects"></section>
      <section className="contact"></section>
    </>
  );
}

export default App;
