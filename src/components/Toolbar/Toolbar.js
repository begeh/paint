import { useState } from "react";
import { SketchPicker } from "react-color";
import floodfill from "../../images/floodfill.png";
import pencil from "../../images/pencil.png";
import Tool from "./Tool";

export default function Toolbar(props) {
  const { color, setColor, tool, setTool } = props;
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleSetColor = (color) => {
    setColor(color.hex);
  };

  return (
    <div className="toolbar">
      <Tool
        tool={tool}
        setTool={setTool}
        toolType="flood-fill"
        image={floodfill}
      />
      <Tool tool={tool} setTool={setTool} toolType="pencil" image={pencil} />
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
