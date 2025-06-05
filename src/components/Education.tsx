import { GraduationCap } from "lucide-react";
export default function Education() {
  return (
    <section className="education" id="education">
      <h2 className="title-2">
        <GraduationCap color="#608abf" size={34} />
        <span>Education</span>
      </h2>

      <ul className="items">
        <li className="item-grid">
          <div className="item-content">
            <p>BACHELOR in New Communication Technologies (BACHELOR)</p>
          </div>
          <div className="item-date">2019 - 2021</div>
        </li>
        <li className="item-grid">
          <div className="item-content">
            <p>
              BACHELOR in New Communication Technologies (BACHELOR)
              https://www.ua.pt/en/course/508
            </p>
            <ul className="item-list">
              <li>Thesis: http://hdl.handle.net/10773/42176</li>
            </ul>
          </div>
          <div className="item-date">2021 - 2023</div>
        </li>
      </ul>
    </section>
  );
}
