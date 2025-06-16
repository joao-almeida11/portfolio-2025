import { NotebookPen } from "lucide-react";
import ProjectList from "./ProjectList";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="title-2--container">
        <NotebookPen color="#608abf" size={34} />
        <h2 className="title-2">Projects</h2>
      </div>
      <ProjectList />
    </section>
  );
}
