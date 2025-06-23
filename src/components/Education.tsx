import { GraduationCap } from "lucide-react";
export default function Education() {
  return (
    <section className="education" id="education">
      <div className="title-2--container">
        <GraduationCap color="#608abf" size={34} />
        <h2 className="title-2">Education</h2>
      </div>

      <ul className="items">
        <li className="item-grid">
          <div className="item-content">
            <div className="item-content--subtitle">
              <h3 className="subtitle">
                Master’s in Communication and Web Technologies
              </h3>
              <div className="item-date">2021 - 2023</div>
            </div>
            <p className="item-content--location color-secondary">
              University of Aveiro
            </p>
            <div className="item-description">
              <p>Focus: Web Development, DevOps & UX/UI Design</p>
              <ul className="item-list">
                <li>
                  <a
                    href="https://www.ua.pt/en/course/508"
                    target="_blank"
                    rel="noopener"
                  >
                    Curricular Plan: https://www.ua.pt/en/course/508
                  </a>
                </li>
                <li>
                  <a
                    href="https://hdl.handle.net/10773/42176"
                    target="_blank"
                    rel="noopener"
                  >
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
              <h3 className="subtitle">
                Bachelor’s in New Communication Technologies
              </h3>
              <div className="item-date">2019 - 2021</div>
            </div>
            <p className="item-content--location color-secondary">
              University of Aveiro
            </p>
            <div className="item-description">
              <p>Focus: Web Development & UX/UI Design</p>
              <ul className="item-list">
                <li>
                  <a
                    href="https://www.ua.pt/en/c/1531/p"
                    target="_blank"
                    rel="noopener"
                  >
                    Curricular Plan: https://www.ua.pt/en/c/1531/p
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
