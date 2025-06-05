import { Mail, MapPinned, Puzzle } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export default function AboutMe() {
  return (
    <section className="skills" id="skills">
      <h2 className="title-2">
        <Puzzle color="#608abf" size={30} />
        <span>Skills</span>
      </h2>

      <div className="skills-content">
        <div>
          <p>Languages</p>
          <ul>
            <li>Portuguese (Native)</li>
            <li>English (Cambridge C1)</li>
          </ul>
        </div>
        <div>
          <p>Technical Languages </p>
          <ul>
            <li>JavaScript, PHP</li>
            <li>HTML, CSS, SASS</li>
          </ul>
        </div>
        <div>
          <p>Frameworks</p>
          <ul>
            <li>React</li>
          </ul>
        </div>
        <div>
          <p>Technologies</p>
          <ul>
            <li>MySQL, Git, neo4j, Linux, Node.js</li>
          </ul>
        </div>
        <div>
          <p>Soft skills</p>
          <ul>
            <li>Communication</li>
            <li>Problem-solving</li>
            <li>Teamwork</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
