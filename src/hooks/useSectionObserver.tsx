import { useEffect, useState } from "react";

export default function useSectionObserver(sectionIds: string[] = []) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        // root: null, // should be body which is the default? // the container needs to scroll
        // rootMargin: "0px 0px -50% 0px", // triggers when section is halfway into view // 2rem 0
        rootMargin: "32px",
        threshold: 0.8,
      },
    );

    const elements = sectionIds.map((id) => document.getElementById(id));
    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, [sectionIds]);

  return activeId;
}
