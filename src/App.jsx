import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
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
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contacts />
      </main>
    </>
  );
}

export default App;
