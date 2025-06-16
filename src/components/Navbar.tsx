import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import FocusLock from "react-focus-lock";
import Logo from "../assets/logo.webp";

export default function Navbar() {
  const [isPhone, setIsPhone] = useState(() => window.innerWidth <= 768);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-content">
        <div className="logo">
          <button onClick={() => scrollToTop()}>
            <img src={Logo} alt="Logo" />
          </button>
        </div>
        {isPhone ? (
          <div>
            <ul className="navbar-list">
              <li>
                <button
                  onClick={openDialog}
                  ref={buttonRef}
                  aria-label="open menu"
                >
                  <Menu />
                </button>
              </li>
            </ul>

            <dialog
              className={isDialogOpen ? "navbar-dialog" : ""}
              ref={dialogRef}
              onClick={(e) => handleBackdropClick(e)}
            >
              <FocusLock disabled={!isDialogOpen}>
                <div className="navbar-mobile-close-btn">
                  <button onClick={() => closeDialog()} aria-label="close menu">
                    <X />
                  </button>
                </div>
                <nav>
                  <ul className="navbar-list">
                    <li>
                      <div className="logo">
                        <button
                          onClick={() => scrollToTop()}
                          className="logo-scroll-top"
                        >
                          <img
                            src={Logo}
                            alt="Logo"
                            style={{ width: "50px" }}
                          />
                        </button>
                      </div>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          closeDialog();
                          scrollToTop();
                        }}
                      >
                        About
                      </button>
                    </li>
                    <li>
                      <a
                        href={`${import.meta.env.BASE_URL}#skills`}
                        onClick={() => closeDialog()}
                      >
                        Skills
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${import.meta.env.BASE_URL}#education`}
                        onClick={() => closeDialog()}
                      >
                        Education
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${import.meta.env.BASE_URL}#experience`}
                        onClick={() => closeDialog()}
                      >
                        Experience
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${import.meta.env.BASE_URL}#projects`}
                        onClick={() => closeDialog()}
                      >
                        Projects
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${import.meta.env.BASE_URL}#others`}
                        onClick={() => closeDialog()}
                      >
                        Others
                      </a>
                    </li>
                    {/* <li>
                      <a href={`${import.meta.env.BASE_URL}#contacts`} onClick={() => closeDialog()}>
                        Contacts
                      </a>
                    </li> */}
                  </ul>
                </nav>
              </FocusLock>
            </dialog>
          </div>
        ) : (
          <ul className="navbar-list">
            <li>
              <button onClick={() => scrollToTop()}>About</button>
            </li>
            <li>
              <a href={`${import.meta.env.BASE_URL}#skills`}>Skills</a>
            </li>
            <li>
              <a href={`${import.meta.env.BASE_URL}#education`}>Education</a>
            </li>
            <li>
              <a href={`${import.meta.env.BASE_URL}#experience`}>Experience</a>
            </li>
            <li>
              <a href={`${import.meta.env.BASE_URL}#projects`}>Projects</a>
            </li>
            <li>
              <a href={`${import.meta.env.BASE_URL}#others`}>Others</a>
            </li>
            {/* <li>
              <a href={`${import.meta.env.BASE_URL}#contacts`}>Contacts</a>
            </li> */}
          </ul>
        )}
      </div>
    </nav>
  );
}
