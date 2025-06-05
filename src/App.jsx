import { Mail, MapPinned } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">Logo</div>
          <ul className="navbar-list">
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <main className="homepage">
        <section className="about" id="about">
          <h1 className="title">João Almeida</h1>
          <span>Frontend Developer</span>
          <p>A frontend web developer with some knowledge of the backend.</p>
          <ul className="about-socials">
            <li>
              <Mail />
              <span>joao-almeida11@outlook.com</span>
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
        <section className="experience"></section>
        <section className="projects"></section>
        <section className="contact"></section>
      </main>
    </>
  );
}

export default App;
