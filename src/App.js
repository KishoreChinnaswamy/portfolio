import { useRef } from "react";

import Appbar from "./components/Appbar";
import Experience from "./screens/Experience";
import Projects from "./components/Projects";

function App() {
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const handleScrollToExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Appbar
        onExperienceClick={handleScrollToExperience}
        onProjectClick={handleScrollToProjects}
      />
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef} />
    </>
  );
}

export default App;
