import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import Logo from "../assets/logo.webp";

export default function Navbar() {
  const [isPhone, setIsPhone] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsPhone(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dialogRef = useRef(null);
  const buttonRef = useRef(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
    const dialog = dialogRef.current;
    const button = buttonRef.current;

    console.log("dialog", dialog);
    console.log("button", button);

    if (dialog && button) {
      const rect = button.getBoundingClientRect();
      console.log("rect", rect);
      console.log("window.scrollX ", window.scrollX);

      // Position dialog relative to button
      dialog.style.position = "absolute";
      dialog.style.top = `${rect.bottom + window.scrollY + 5}px`;
      dialog.style.right = `${rect.right - rect.left + window.scrollX}px`;

      dialogRef.current?.showModal();
      // dialog.show(); // not showModal to prevent centering
    }
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  const handleBackdropClick = (e) => {
    const rect = dialogRef.current.getBoundingClientRect();
    const isInDialog =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    if (!isInDialog) {
      closeDialog();
    }
  };

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-content">
        <div className="logo">
          <a href="/#about">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        {isPhone ? (
          <div style={{ position: "relative" }}>
            <ul className="navbar-list">
              <li>
                <Menu onClick={openDialog} ref={buttonRef} />
              </li>
            </ul>
            <dialog
              className="navbar-dialog"
              ref={dialogRef}
              onClick={handleBackdropClick}
            >
              {/* <button onClick={closeDialog}>✖</button> */}
              <nav>
                <ul className="navbar-list">
                  <li>
                    <a href="/#skills">Skills</a>
                  </li>
                  <li>
                    <a href="/#education">Education</a>
                  </li>
                  <li>
                    <a href="/#experience">Experience</a>
                  </li>
                  <li>
                    <a href="/#projects">Projects</a>
                  </li>
                  <li>
                    <a href="/#contacts">Contacts</a>
                  </li>
                </ul>
              </nav>
            </dialog>
          </div>
        ) : (
          <ul className="navbar-list">
            <li>
              <a href="/#skills">Skills</a>
            </li>
            <li>
              <a href="/#education">Education</a>
            </li>
            <li>
              <a href="/#experience">Experience</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#contacts">Contacts</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

// import { useEffect, useState } from "react";
// import Shelf from "./Shelf";
// import useSectionObserver from "../hooks/useSectionObserver";

// export default function Navbar() {
//   const [position, setPosition] = useState("#aboutme");

//   const handlePosition = (newPosition: string) => {
//     if (position === newPosition) return;
//     setPosition(newPosition);
//   };

//   const sectionIds = [
//     "about",
//     "experience",
//     "education",
//     "projects",
//     "contacts",
//   ];
//   const activeSection = useSectionObserver(sectionIds);

//   useEffect(() => {
//     console.log("activeSection", activeSection);
//   }, [activeSection]);

//   return (
//     <div className="navbar">
//       <div className="navbar-content">
//         <div className="navbar-books">
//           <Shelf
//             title="AboutMe"
//             target="aboutme"
//             // position={position}
//             handlePosition={handlePosition}
//             activeSection={activeSection}
//           />
//           <Shelf
//             title="Experience"
//             target="experience"
//             // position={position}
//             handlePosition={handlePosition}
//             activeSection={activeSection}
//           />

//           <Shelf
//             title="Education"
//             target="education"
//             // position={position}
//             handlePosition={handlePosition}
//             activeSection={activeSection}
//           />

//           <Shelf
//             title="Projects"
//             target="projects"
//             // position={position}
//             handlePosition={handlePosition}
//             activeSection={activeSection}
//           />

//           <Shelf
//             title="Contact"
//             target="contacts"
//             // position={position}
//             handlePosition={handlePosition}
//             activeSection={activeSection}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
