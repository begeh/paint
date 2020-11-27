import { useState } from "react";
import { SketchPicker } from "react-color";

export default function ColorPicker(props) {
  const { color, setColor } = props;
  const [showColorPicker, setShowColorPicker] = useState(false);
  const handleSetColor = (color) => {
    setColor(color.hex);
  };
  return (
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
  );
}
