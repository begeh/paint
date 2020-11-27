import { useState } from "react";
import { SketchPicker } from "react-color";
import Tool from "./Tool";
import tools from "../../data/toolData";

export default function Toolbar(props) {
  const { color, setColor, tool, setTool, height, width, setDimensions, dimensions } = props;
  const [showColorPicker, setShowColorPicker] = useState(false);
  const windowHeight = 0.8 * window.innerHeight;
  const windowWidth = 0.8 * window.innerWidth;

  const handleSetColor = (color) => {
    setColor(color.hex);
  };

  const handleChangeDimensions = ({ type, value }) => {
    if (type === "height") {
      return Number(value > windowHeight) ? setDimensions({ ...dimensions, height: windowHeight }) : setDimensions({ ...dimensions, height: value });
    } else if (type === "width") {
      return Number(value > windowWidth) ? setDimensions({ ...dimensions, width: windowWidth }) : setDimensions({ ...dimensions, width: value });
    }
  };
  return (
    <div className="toolbar">
      <div className="dimensions-container">
        <div className="input-field">
          <p className='dimensions-title'>Canvas Height (max. {windowHeight}px)</p>
          <input
            className="input-dimensions"
            type="text"
            placeholder="Height (in px)"
            value={height}
            onChange={(e) =>
              handleChangeDimensions({ type: "height", value: e.target.value })
            }
          />
        </div>
        <div className="input-field">
          <p className='dimensions-title'>Canvas Width (max. {windowWidth}px)</p>
          <input
            className="input-dimensions"
            type="text"
            placeholder="Width (in px)"
            value={width}
            onChange={(e) =>
              handleChangeDimensions({ type: "width", value: e.target.value })
            }
          />
        </div>
      </div>
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
