import { Puzzle } from "lucide-react";
export default function AboutMe() {
  return (
    <section className="skills" id="skills">
      <div className="title-2--container">
        <Puzzle color="#608abf" size={34} />
        <h2 className="title-2">Skills</h2>
      </div>

      <div className="skills-content">
        <div>
          <span className="subtitle">Languages</span>
          <ul>
            <li>Portuguese (Native)</li>
            <li>English (Cambridge C1)</li>
          </ul>
        </div>
        <div>
          <span className="subtitle">Programming</span>
          <ul>
            <li>React, JavaScript, Typescript (learning)</li>
            <li>HTML, CSS, SCSS</li>
            <li>PHP, Nodejs, MySQL, Neo4j</li>
            <li>Git, Linux, Agile workflows</li>
          </ul>
        </div>
        <div>
          <span className="subtitle">Soft skills</span>
          <ul>
            <li>Ownership & accountability</li>
            <li>Communication & collaboration</li>
            <li>Curiosity & lifelong learning</li>
            <li>Analytical thinking & problem-solving</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
