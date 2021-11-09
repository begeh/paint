import Tool from "./Tool";
import tools from "../../data/toolData";
import { useContext } from "react";
import { MainContext } from "../Main";

export default function Tools() {
  const {tool, setTool} = useContext(MainContext)
  return (
    <>
      {tools.map((item, index) => (
        <Tool
          key={index}
          tool={tool}
          setTool={setTool}
          toolType={item.toolType}
          image={item.image}
        />
      ))}
    </>
  );
}
