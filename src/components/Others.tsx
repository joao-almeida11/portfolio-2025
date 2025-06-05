import { BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section className="education" id="others">
      <h2 className="title-2">
        <BookOpen color="#608abf" size={34} />
        <span>Others</span>
      </h2>

      <ul className="items">
        <li className="item-grid">
          <div className="item-content">
            <p>Courses on Frontend Masters</p>
            <p>To refresh basics and learn new things.</p>
          </div>
          <div className="item-date">2025</div>
        </li>
        <li className="item-grid">
          <div className="item-content">
            <p>Certificate in Advanced English - C1</p>
          </div>
          <div className="item-date">2024</div>
        </li>
        <li className="item-grid">
          <div className="item-content">
            <h3 className="title-3">
              Mentor at AVILA UA{" "}
              <span className="highlight-body-text">University of Aveiro</span>
            </h3>
            <p>
              Mentoring movement at the University of Aveiro designed to help
              2nd year bachelor students with PHP, MySQL databases and Git in
              their Database and Server-Side Technologies curricular unit.
              https://www.ua.pt/en/uc/15719
            </p>
          </div>
          <div className="item-date">2018 - 2023</div>
        </li>
        <li className="item-grid">
          <div className="item-content">
            <p>First Aid</p>
            <p>Academia Génios Livres</p>
          </div>
          <div className="item-date">2022</div>
        </li>
      </ul>
    </section>
  );
}
