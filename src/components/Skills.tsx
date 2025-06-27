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
          <span className="subtitle">Core Frontend</span>
          <ul>
            <li>JavaScript, React, SASS, CSS and HTML</li>
          </ul>
        </div>
        <div>
          <span className="subtitle">Additional Technologies</span>
          <ul>
            <li>Linux, Git, Agile workflows</li>
          </ul>
        </div>
        <div>
          <span className="subtitle">Previous Experience</span>
          <ul>
            <li>PHP, MySQL, Neo4j (basic query usage)</li>
          </ul>
        </div>
        <div>
          <span className="subtitle">Soft skills</span>
          <ul>
            <li>Teamwork</li>
            <li>Communication</li>
            <li>Continuous learning mindset</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
