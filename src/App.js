import "./App.css";
import { useState } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import Canvas from "./components/Canvas/Canvas";

function App() {
  const [color, setColor] = useState("#fff");
  const [tool, setTool] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: "300",
    width: "600",
  });
  const { height, width } = dimensions;

  return (
    <div className="App">
      <section className="heading">
        <h1>PAINT</h1>
      </section>
      <section className="main">
        <div className="tools">
          <Toolbar
            color={color}
            setColor={setColor}
            tool={tool}
            setTool={setTool}
            height={height}
            width={width}
            dimensions={dimensions}
            setDimensions={setDimensions}
          />
        </div>
        <Canvas width={width} height={height} tool={tool} color={color} />
      </section>
    </div>
  );
}

export default App;
