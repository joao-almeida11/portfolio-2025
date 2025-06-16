import NossaHomePageImage from "../assets/nossa-homepage.webp";
import NossaProjectLogo from "../assets/nossa-logo.svg";

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
          <figure className="project-item--content--logo">
            <img src={NossaProjectLogo} alt="NOSSA!" />
          </figure>
          <p className="project-item--description">
            A platform that provides opportunities for local artists to perform
            at cultural events.
          </p>
          <p className="project-item--description">
            Winner of Aveiro Tech City - ACADEMIA Challenges
          </p>
        </div>
      </article>
    </div>
  );
}
