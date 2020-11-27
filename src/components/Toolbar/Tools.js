import Tool from "./Tool";
import tools from "../../data/toolData";

export default function Tools(props) {
  const { tool, setTool } = props;
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
