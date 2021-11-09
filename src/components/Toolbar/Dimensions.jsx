import DimensionItem from "./DimensionItem";
import { useScreenDimensions } from "../../helpers/hooks/useScreenDimensions";
import { useContext, useEffect } from "react";
import { MainContext } from "../Main";

export default function Dimensions() {
  const screenDimensions = useScreenDimensions();
  const { dimensions, setDimensions, height, width } = useContext(MainContext);
  const windowHeight = Math.floor(0.8 * screenDimensions.height);
  const windowWidth = Math.floor(0.8 * screenDimensions.width);

  // Resize canvas when screen size changes
  useEffect(() => {
    handleChangeDimensions({ type: "both", value: dimensions });
  }, [screenDimensions]);

  const handleChangeDimensions = ({ type, value }) => {
    if (type === "height") {
      return value > windowHeight
        ? setDimensions({ ...dimensions, height: windowHeight })
        : setDimensions({ ...dimensions, height: value });
    } else if (type === "width") {
      return value > windowWidth
        ? setDimensions({ ...dimensions, width: windowWidth })
        : setDimensions({ ...dimensions, width: value });
    } else if (type === "both") {
      const newWidth = value.width > windowWidth ? windowWidth : value.width;
      const newHeight = value.height > windowHeight ? windowHeight : value.height;
      setDimensions({ width: newWidth, height: newHeight });
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
