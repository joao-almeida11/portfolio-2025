import { Puzzle } from "lucide-react";
export default function AboutMe() {
  return (
    <section className="skills" id="skills">
      <h2 className="title-2">
        <Puzzle color="#608abf" size={34} />
        <span>Skills</span>
      </h2>

      <div className="skills-content">
        <div>
          <span className="subtitle">Languages</span>
          <ul>
            <li>Portuguese (Native)</li>
            <li>English (Cambridge C1)</li>
          </ul>
        </div>
        <div>
          <span className="subtitle">Technical Languages </span>
          <ul>
            <li>JavaScript, PHP</li>
            <li>HTML, CSS, SASS</li>
          </ul>
        </div>

        <div>
          <span className="subtitle">Frameworks</span>
          <ul>
            <li>React</li>
          </ul>
        </div>
        <div>
          <span className="subtitle">Technologies</span>
          <ul>
            <li>MySQL, Git, neo4j, Linux, Node.js</li>
          </ul>
        </div>

        <div>
          <span className="subtitle">Soft skills</span>
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
