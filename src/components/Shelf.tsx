type ShelfProps = {
  title: string;
  target: string;
  // position: string;
  handlePosition: (newPosition: string) => void;
  activeSection: string;
};

export default function Shelf({
  title,
  target,
  // position,
  handlePosition,
  activeSection,
}: ShelfProps) {
  console.log("target", target);
  console.log("activeSection", activeSection);
  return (
    <div className={`shelf ${activeSection === target ? "active" : ""}`}>
      <a
        href={`#${target}`}
        onClick={() => handlePosition(target)}
        // animate={{ x: target === activeSection ? 0 : 80 }}
        // transition={{ duration: 0.2, type: "linear" }}
      >
        {title}
      </a>
    </div>
  );
}
