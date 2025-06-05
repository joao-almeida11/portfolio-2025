import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="contacts" id="contacts">
      <h2 className="title-2">Contact</h2>
      <a href="mailto:joao-almeida11@outlook.com">
        <Mail />
        joao-almeida11@outlook.com
      </a>
    </section>
  );
}
