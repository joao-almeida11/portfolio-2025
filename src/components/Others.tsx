import { BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section className="education" id="others" style={{ marginTop: "0.25rem" }}>
      <div className="title-2--container">
        <BookOpen color="#608abf" size={34} />
        <h2 className="title-2">Certifications & Activities</h2>
      </div>

      <ul className="items">
        <li className="item-grid">
          <div className="item-content">
            <div className="item-content--subtitle">
              <h3 className="subtitle">Frontend Masters (Ongoing)</h3>
              <div className="item-date">2025</div>
            </div>
          </div>
          <div className="item-description">
            <p>
              Self-paced study to strengthen frontend and fullstack knowledge
              (React, TypeScript, testing, performance, etc).
            </p>
          </div>
        </li>
        <li className="item-grid">
          <div className="item-content">
            <div className="item-content--subtitle">
              <h3 className="subtitle">Certificate in Advanced English - C1</h3>
              <div className="item-date">2024</div>
            </div>
            <p className="item-content--location color-secondary">
              Cambridge University Press & Assessment
            </p>
          </div>
        </li>
        <li className="item-grid">
          <div className="item-content">
            <div className="item-content--subtitle">
              <h3 className="subtitle">Mentor at AVILA UA</h3>
              <div className="item-date">2018 - 2023</div>
            </div>
            <p className="item-content--location color-secondary">
              University of Aveiro
            </p>
            <div className="item-description">
              <p>
                Mentored 2nd-year students in PHP, MySQL, and Git within the
                Database and Server-Side Technologies curricular unit.{" "}
                <a
                  href="https://www.ua.pt/en/uc/15719"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.ua.pt/en/uc/15719
                </a>
              </p>
            </div>
          </div>
        </li>
        <li className="item-grid">
          <div className="item-content">
            <div className="item-content--subtitle">
              <h3 className="subtitle">First Aid</h3>
              <div className="item-date">2022</div>
            </div>
            <p className="item-content--location color-secondary">
              Academia Génios Livres
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
