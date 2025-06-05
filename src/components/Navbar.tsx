import { useEffect, useState } from "react";
import Shelf from "./Shelf";
import useSectionObserver from "../hooks/useSectionObserver";

export default function Navbar() {
  const [position, setPosition] = useState("#aboutme");

  const handlePosition = (newPosition: string) => {
    if (position === newPosition) return;
    setPosition(newPosition);
  };

  const sectionIds = [
    "about",
    "experience",
    "education",
    "projects",
    "contacts",
  ];
  const activeSection = useSectionObserver(sectionIds);

  useEffect(() => {
    console.log("activeSection", activeSection);
  }, [activeSection]);

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-books">
          <Shelf
            title="AboutMe"
            target="aboutme"
            // position={position}
            handlePosition={handlePosition}
            activeSection={activeSection}
          />
          <Shelf
            title="Experience"
            target="experience"
            // position={position}
            handlePosition={handlePosition}
            activeSection={activeSection}
          />

          <Shelf
            title="Education"
            target="education"
            // position={position}
            handlePosition={handlePosition}
            activeSection={activeSection}
          />

          <Shelf
            title="Projects"
            target="projects"
            // position={position}
            handlePosition={handlePosition}
            activeSection={activeSection}
          />

          <Shelf
            title="Contact"
            target="contacts"
            // position={position}
            handlePosition={handlePosition}
            activeSection={activeSection}
          />
        </div>
      </div>
    </div>
  );
}
