import { useRef } from "react";

import Appbar from "./components/Appbar";
import Experience from "./screens/Experience";
import Projects from "./components/Projects";

function App() {
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const handleScrollToExperience = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Appbar
        onExperienceClick={handleScrollToExperience}
        onProjectClick={handleScrollToProjects}
      />
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
    </>
  );
}

export default App;
