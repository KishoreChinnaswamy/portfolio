import Appbar from "./components/Appbar";
import Home from "./screens/Home";
import Experience from "./screens/Experience";
import Card from "./components/Card";

import robot from "./assets/robot_align.png";

function App() {
  return (
    <>
      <Appbar />
      <Experience />
      <Card />
    </>
  );
}

export default App;
