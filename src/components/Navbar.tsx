import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import FocusLock from "react-focus-lock";
import Logo from "../assets/logo.webp";
import useIsPhone from "../hooks/useIsPhone";
import useScrollToTop from "../hooks/useScrollToTop";

export default function Navbar() {
  const isPhone = useIsPhone();
  const scrollToTop = useScrollToTop;
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const openDialog = () => {
    const dialog = dialogRef.current;
    const button = buttonRef.current;

    if (dialog && button) {
      dialogRef.current?.showModal();
      setIsDialogOpen(true);
    }
  };

  const closeDialog = () => {
    dialogRef.current?.close();
    setIsDialogOpen(false);
  };

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-content">
        <div className="logo">
          <button onClick={scrollToTop} type="button">
            <img src={Logo} alt="Logo" width={25} height={24} />
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
                  type="button"
                >
                  <Menu />
                </button>
              </li>
            </ul>

            <dialog
              className={isDialogOpen ? "navbar-dialog" : ""}
              ref={dialogRef}
              aria-modal="true"
            >
              <FocusLock disabled={!isDialogOpen}>
                <div className="navbar-mobile-close-btn">
                  <button
                    onClick={closeDialog}
                    aria-label="close menu"
                    type="button"
                  >
                    <X />
                  </button>
                </div>
                <nav>
                  <ul className="navbar-list">
                    <li>
                      <div className="logo">
                        <button
                          onClick={scrollToTop}
                          className="logo-scroll-top"
                          type="button"
                        >
                          <img src={Logo} alt="Logo" width={50} height={48} />
                        </button>
                      </div>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          closeDialog();
                          scrollToTop();
                        }}
                        type="button"
                      >
                        About
                      </button>
                    </li>
                    <li>
                      <a
                        href={`${import.meta.env.BASE_URL}#skills`}
                        onClick={closeDialog}
                      >
                        Skills
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${import.meta.env.BASE_URL}#education`}
                        onClick={closeDialog}
                      >
                        Education
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${import.meta.env.BASE_URL}#experience`}
                        onClick={closeDialog}
                      >
                        Experience
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${import.meta.env.BASE_URL}#projects`}
                        onClick={closeDialog}
                      >
                        Projects
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${import.meta.env.BASE_URL}#others`}
                        onClick={closeDialog}
                      >
                        Others
                      </a>
                    </li>
                    {/* <li>
                      <a href={`${import.meta.env.BASE_URL}#contacts`} onClick={closeDialog}>
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
              <button onClick={scrollToTop} type="button">
                About
              </button>
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
