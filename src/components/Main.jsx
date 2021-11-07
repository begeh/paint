import { useState } from "react";
import Canvas from "./Canvas";
import Toolbar from "./Toolbar";

const Main = () => {
  const [color, setColor] = useState("#fff");
  const [tool, setTool] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: 300,
    width: 600,
  });
  const { height, width } = dimensions;

  return (
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
  );
};

export default Main;
