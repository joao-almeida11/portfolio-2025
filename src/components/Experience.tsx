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
              Worked on a multi-tenant web platform as part of a cross-
              functional team.
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
                Developed and maintained frontend components for a multi-tenant
                web platform (4 tenants) using React, JavaScript, SASS and HTML.
              </li>
              <li>
                Worked with cross-functional team members to launch a new
                tenant.
              </li>
              <li>
                Collaborated with developers and designers in a cross-
                functional Agile team.
              </li>
              <li>
                Used Linux-based development and staging environments for
                testing and deployment.
              </li>
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
