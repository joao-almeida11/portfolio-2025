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
              Joint Development of academic and scientific projects between the
              University of Aveiro and Altice Labs.
            </p>
            <p>
              More info:{" "}
              <a href="https://alticelabs.com/altice-labs-ua" target="_blank">
                https://alticelabs.com/altice-labs-ua
              </a>
            </p>

            <div className="item-list-label">Contributions:</div>
            <ul className="item-list">
              <li>
                Developed and maintained frontend components of a multi-tenant
                platform
              </li>
              <li>Developed frontend components for a new tenant</li>
            </ul>
            <ul
              className="project-item--technologies"
              style={{ marginTop: "1.1rem" }}
            >
              <li>JavaScript</li>
              <li>React</li>
              <li>SCSS</li>
              <li>neo4j</li>
              <li>Linux</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
}
