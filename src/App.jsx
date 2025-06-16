import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Others from "./components/Others";
import Contacts from "./components/Contacts";
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
        <Others />
        {/* <Contacts /> */}
      </main>
    </>
  );
}

export default App;
