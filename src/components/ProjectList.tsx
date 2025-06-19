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
          width={750}
          height={427}
        />

        <div className="project-item--content">
          <figure className="project-item--content--logo">
            <img src={NossaProjectLogo} alt="NOSSA!" width={75} height={21} />
          </figure>
          <p className="project-item--description">
            A platform that provides opportunities for local artists to perform
            at cultural events.
          </p>
          <p className="project-item--description">
            Winner of Aveiro Tech City - ACADEMIA Challenges
          </p>
          <ul className="project-item--technologies">
            <li>JavaScript</li>
            <li>React</li>
            <li>SCSS</li>
            <li>MySQL</li>
            <li>Nodejs</li>
          </ul>
        </div>
      </article>
    </div>
  );
}
