import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
// import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="homepage">
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Certifications />
        {/* <Contacts /> */}
      </main>
    </>
  );
}

export default App;
