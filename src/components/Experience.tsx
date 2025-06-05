export default function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="title-2">Experience</h2>

      <ul className="items">
        <li className="item-grid">
          <div className="item-date">2021 - 2023</div>

          <div className="item-content">
            <h3 className="title-3">
              AlticeLabs@UA -{" "}
              <span className="highlight-body-text">
                Frontend Web Developer
              </span>
            </h3>
            <p>
              Joint Development of academic and scientific projects between the
              University of Aveiro and Altice Labs More info:
              https://alticelabs.com/altice-labs-ua/
            </p>
            <div className="item-list-label">Contributions:</div>
            <ul className="item-list">
              <li>
                Developed and maintained frontend components of a multi-tenant
                platform to improve their performance and accessibility, as well
                as syncing tenants' frontend versions (Campus, GPS, miOne and
                ColLab)
              </li>
              <li>Developed frontend components for a new tenant: ColLab</li>
              <li>
                Developed frontend components for a new major feature: Campus
                Fora d'aulas - Updated frontend components for TeleAula by
                Fundação Altice
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
}
