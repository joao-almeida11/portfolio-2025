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
            <li>JavaScript, React, Nodejs</li>
            <li>HTML, CSS, SASS</li>
            <li>PHP, Linux, Git</li>
            <li>MySQL, neo4j</li>
          </ul>
        </div>
        <div>
          <span className="subtitle">Soft skills</span>
          <ul>
            <li>Teamwork</li>
            <li>Communication</li>
            <li>Problem-solving</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
