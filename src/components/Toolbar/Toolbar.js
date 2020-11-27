import DimensionItem from "./DimensionItem";
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

  const windowHeight = 0.8 * window.innerHeight;
  const windowWidth = 0.8 * window.innerWidth;

  // const handleSetColor = (color) => {
  //   setColor(color.hex);
  // };

  const handleChangeDimensions = ({ type, value }) => {
    if (type === "height") {
      return Number(value > windowHeight)
        ? setDimensions({ ...dimensions, height: windowHeight })
        : setDimensions({ ...dimensions, height: value });
    } else if (type === "width") {
      return Number(value > windowWidth)
        ? setDimensions({ ...dimensions, width: windowWidth })
        : setDimensions({ ...dimensions, width: value });
    }
  };
  return (
    <div className="toolbar">
      <ColorPicker color={color} setColor={setColor} />
      <Tools tool={tool} setTool={setTool} />
      <div className="dimensions-container">
        <DimensionItem
          title={`Canvas Height (max. ${Math.floor(windowHeight)}px)`}
          handleChangeDimensions={handleChangeDimensions}
          type="height"
          placeholder="Height (in px)"
          value={height}
        />
        <DimensionItem
          title={`Canvas Width (max. ${Math.floor(windowWidth)}px)`}
          handleChangeDimensions={handleChangeDimensions}
          type="width"
          placeholder="Width (in px)"
          value={width}
        />
      </div>
    </div>
  );
}
