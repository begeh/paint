import { useState, createContext } from "react";
import Canvas from "./Canvas";
import Toolbar from "./Toolbar";

export const MainContext = createContext({});

const Main = () => {
  const [color, setColor] = useState("#fff");
  const [tool, setTool] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: 300,
    width: 600,
  });
  const { height, width } = dimensions;

  return (
    <MainContext.Provider
      value={{
        color,
        setColor,
        tool,
        setTool,
        dimensions,
        setDimensions,
        height,
        width,
      }}
    >
      <section className="main">
        <Toolbar />
        <Canvas />
      </section>
    </MainContext.Provider>
  );
};

export default Main;
