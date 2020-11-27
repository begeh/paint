import { useState } from "react";
import { SketchPicker } from "react-color";
import Tool from "./Tool";
import tools from '../../data/toolData';

export default function Toolbar(props) {
  const { color, setColor, tool, setTool } = props;
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleSetColor = (color) => {
    setColor(color.hex);
  };

  return (
    <div className="toolbar">
      {tools.map((item, index) => (
        <Tool
          key={index}
          tool={tool}
          setTool={setTool}
          toolType={item.toolType}
          image={item.image}
        />
      ))}
      <div
        className="tool-btn-container"
        onClick={() => setShowColorPicker(!showColorPicker)}
      >
        <div
          style={{
            backgroundColor: color,
            width: "100%",
            height: "100%",
          }}
        />
        {showColorPicker && (
          <div className="popover">
            <div className="cover" />
            <SketchPicker
              color={color}
              onChange={(color) => handleSetColor(color)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
