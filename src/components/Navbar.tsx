import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import FocusLock from "react-focus-lock";
import Logo from "../assets/logo.webp";

export default function Navbar() {
  const [isPhone, setIsPhone] = useState(() => window.innerWidth <= 768);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const firstLinkRef = useRef(null);

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
    // dialogRef.current?.showModal();
    const dialog = dialogRef.current;
    const button = buttonRef.current;

    if (dialog && button) {
      dialogRef.current?.showModal();
      setIsDialogOpen(true);
      // dialog.show(); // not showModal to prevent centering
    }
  };

  const closeDialog = () => {
    dialogRef.current?.close();
    setIsDialogOpen(false);
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
          <div>
            <ul className="navbar-list">
              <li>
                <button onClick={openDialog} ref={buttonRef}>
                  <Menu />
                </button>
              </li>
            </ul>

            <dialog
              className={isDialogOpen ? "navbar-dialog" : ""}
              ref={dialogRef}
              onClick={handleBackdropClick}
            >
              <FocusLock disabled={!isDialogOpen}>
                <nav>
                  <ul className="navbar-list">
                    <li>
                      <div className="logo">
                        <a href="/#about" className="logo-a">
                          <img
                            src={Logo}
                            alt="Logo"
                            style={{ width: "50px" }}
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <a
                        href="/#about"
                        onClick={() => closeDialog()}
                        ref={firstLinkRef}
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#skills"
                        onClick={() => closeDialog()}
                        ref={firstLinkRef}
                      >
                        Skills
                      </a>
                    </li>
                    <li>
                      <a href="/#education" onClick={() => closeDialog()}>
                        Education
                      </a>
                    </li>
                    <li>
                      <a href="/#experience" onClick={() => closeDialog()}>
                        Experience
                      </a>
                    </li>
                    <li>
                      <a href="/#projects" onClick={() => closeDialog()}>
                        Projects
                      </a>
                    </li>
                    <li>
                      <a href="/#contacts" onClick={() => closeDialog()}>
                        Contacts
                      </a>
                    </li>
                  </ul>
                </nav>
              </FocusLock>
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
