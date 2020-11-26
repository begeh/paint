export default function Tool(props) {
  const { toolType, setTool, image, tool } = props;
  return (
    <div
      className={`tool-btn-container ${
        tool === toolType && "tool-btn-clicked"
      }`}
      onClick={() => setTool(toolType)}
    >
      <img className="tool-btn-img" src={image} />
    </div>
  );
}
