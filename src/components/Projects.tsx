import { NotebookPen } from "lucide-react";
import ProjectList from "./ProjectList";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="title-2">
        <NotebookPen color="#608abf" size={34} />
        Projects
      </h2>
      <ProjectList />
    </section>
  );
}
