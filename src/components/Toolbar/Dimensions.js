import DimensionItem from "./DimensionItem";

export default function Dimensions(props) {
  const { dimensions, setDimensions, height, width } = props;
  const windowHeight = Math.floor(0.8 * window.innerHeight);
  const windowWidth = Math.floor(0.8 * window.innerWidth);

  const handleChangeDimensions = ({ type, value }) => {
    if (type === "height") {
      return Number(value) > windowHeight
        ? setDimensions({ ...dimensions, height: windowHeight })
        : setDimensions({ ...dimensions, height: Math.floor(Number(value)) });
    } else if (type === "width") {
      return Number(value) > windowWidth
        ? setDimensions({ ...dimensions, width: windowWidth })
        : setDimensions({ ...dimensions, width: Math.floor(Number(value)) });
    }
  };

  return (
    <div className="dimensions-container">
      <DimensionItem
        title={`Canvas Height (max. ${windowHeight}px)`}
        handleChangeDimensions={handleChangeDimensions}
        type="height"
        placeholder="Height (in px)"
        value={height}
      />
      <DimensionItem
        title={`Canvas Width (max. ${windowWidth}px)`}
        handleChangeDimensions={handleChangeDimensions}
        type="width"
        placeholder="Width (in px)"
        value={width}
      />
    </div>
  );
}
