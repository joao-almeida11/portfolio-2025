import NossaHomePageImage from "../assets/nossa-homepage.webp";
import NossaTitle from "../assets/nossa-title.svg";

export default function ProjectList() {
  return (
    <div className="project-list">
      <article className="project-item">
        <img
          className="project-item--image"
          src={NossaHomePageImage}
          alt="NOSSA! Homepage"
        />
        <div className="project-item--content">
          <div>
            <img src={NossaTitle} alt="NOSSA!" />
          </div>
          <p className="project-item--description">
            A platform that provides opportunities for local artists to perform
            at cultural events. Winner of Aveiro Tech City - ACADEMIA Challenges
          </p>
        </div>
      </article>
    </div>
  );
}
