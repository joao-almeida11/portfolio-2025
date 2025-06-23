import { BriefcaseBusiness } from "lucide-react";
export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="title-2--container">
        <BriefcaseBusiness color="#608abf" size={34} />
        <h2 className="title-2">Experience</h2>
      </div>

      <ul className="items">
        <li className="item-grid">
          <div className="item-content">
            <div className="item-content--subtitle">
              <h3 className="subtitle">
                AlticeLabs@UA — Frontend Web Developer
              </h3>
              <div className="item-date">2021 - 2023</div>
            </div>
            <p>
              Worked on academic–industry collaborative project focused on
              developing a multi-tenant web platform.
            </p>
            <p>
              More info:{" "}
              <a
                href="https://alticelabs.com/altice-labs-ua"
                target="_blank"
                rel="noopener"
              >
                https://alticelabs.com/altice-labs-ua
              </a>
            </p>

            <div className="item-list-label">Contributions:</div>
            <ul className="item-list">
              <li>
                Developed and maintained frontend components using React,
                JavaScript, and SCSS
              </li>
              <li>
                Built and styled tenant-specific interfaces with attention to UX
                and scalability
              </li>
              <li>
                Collaborated cross-functionally with designers and backend
                developers
              </li>
              <li>
                Worked in Linux-based development and staging environments
              </li>
              <li>
                Wrote and executed Neo4j queries for data verification and
                troubleshooting
              </li>
              <li>Used Git for team collaboration</li>
            </ul>
            <ul
              className="project-item--technologies"
              style={{ marginTop: "1.1rem" }}
            >
              <li>React</li>
              <li>JavaScript</li>
              <li>SCSS</li>
              <li>Neo4j</li>
              <li>Linux</li>
              <li>Git</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
}
