import { BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section className="education" id="others" style={{ marginTop: "0.25rem" }}>
      <div className="title-2--container">
        <BookOpen color="#608abf" size={34} />
        <h2 className="title-2">Others</h2>
      </div>

      <ul className="items">
        <li className="item-grid">
          <div className="item-content">
            <div className="item-content--subtitle">
              <h3 className="subtitle">Courses on Frontend Masters</h3>
              <div className="item-date">2025</div>
            </div>
          </div>
          <div className="item-description">
            <p>To review and learn new things.</p>
          </div>
        </li>
        <li className="item-grid">
          <div className="item-content">
            <div className="item-content--subtitle">
              <h3 className="subtitle">Certificate in Advanced English - C1</h3>
              <div className="item-date">2024</div>
            </div>
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
                Mentoring movement at the University of Aveiro designed to help
                2nd year bachelor students with PHP, MySQL databases and Git in
                their Database and Server-Side Technologies curricular unit.{" "}
                <a href="https://www.ua.pt/en/uc/15719" target="_blank">
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
