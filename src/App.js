import Appbar from "./components/Appbar";
import Home from "./screens/Home";
import Experience from "./screens/Experience";
import Card from "./components/Card";

import robot from "./assets/robot_align.png";

function App() {
  return (
    <>
      {/* <div className="image-container">
        <img src={topImage} alt="" style={{ width: "100%" }} />
        <div class="bottom-right">Bottom Right</div>
      </div> */}
      {/* <img src={robot} alt="" /> */}
      <Appbar />
      {/* <Home /> */}
      <Experience />
      <Card />
    </>
  );
}

export default App;
