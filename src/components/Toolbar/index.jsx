import Dimensions from "./Dimensions";
import Tools from "./Tools";
import ColorPicker from "./ColorPicker";

export default function Toolbar() {
  return (
    <div className="tools">
      <div className="toolbar">
        <ColorPicker />
        <Tools />
        <Dimensions />
      </div>
    </div>
  );
}
