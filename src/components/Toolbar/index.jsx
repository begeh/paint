import Dimensions from "./Dimensions";
import Tools from "./Tools";
import ColorPicker from "./ColorPicker";

export default function Toolbar(props) {
  const {
    color,
    setColor,
    tool,
    setTool,
    height,
    width,
    setDimensions,
    dimensions,
  } = props;

  return (
    <div className="toolbar">
      <ColorPicker color={color} setColor={setColor} />
      <Tools tool={tool} setTool={setTool} />
      <Dimensions
        dimensions={dimensions}
        setDimensions={setDimensions}
        height={height}
        width={width}
      />
    </div>
  );
}
