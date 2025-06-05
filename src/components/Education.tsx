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
            <div className="item-content--subtitle">
              <span className="subtitle">
                Master’s in Communication and Web Technologies
              </span>
              <div className="item-date">2021 - 2023</div>
            </div>
            <p className="item-content--location">University of Aveiro</p>
            <div className="item-description">
              <p>Web development & Devops & Design</p>
              <ul className="item-list">
                <li>
                  <a href="https://www.ua.pt/en/course/508" target="_blank">
                    Curricular Plan: https://www.ua.pt/en/course/508
                  </a>
                </li>
                <li>
                  <a href="https://hdl.handle.net/10773/42176" target="_blank">
                    Thesis: https://hdl.handle.net/10773/42176
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="item-grid">
          <div className="item-content">
            <div className="item-content--subtitle">
              <span className="subtitle">
                Bachelor’s in New Communication Technologies
              </span>
              <div className="item-date">2019 - 2021</div>
            </div>
            <p className="item-content--location">University of Aveiro</p>
            <p>Web development & Design</p>
            <ul className="item-list">
              <li>
                <a href="https://www.ua.pt/en/c/1531/p" target="_blank">
                  Curricular Plan: https://www.ua.pt/en/c/1531/p
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
}
