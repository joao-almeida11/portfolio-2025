// import { SiGithub } from "@icons-pack/react-simple-icons";
import { FileDown, Mail } from "lucide-react";

import defaultTestImage from "../assets/default-image.webp";

export default function Header() {
  return (
    <header>
      <div className="brand">
        <img src={defaultTestImage} alt="branding" />
      </div>
      <div className="socials">
        {/* <SiGithub className="socials--github" /> */}
        <FileDown />
        <a href="#contacts" className="socials--email">
          <Mail />
          {/* <span>joao-almeida11@outlook.com</span> */}
        </a>
      </div>
    </header>
  );
}
