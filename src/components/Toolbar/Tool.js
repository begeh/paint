export default function Tool(props) {
  const { toolType, setTool, image, tool } = props;
  
  const handleSetToolType = () => {
    if(tool === toolType){
      setTool('');
    } else{
      setTool(toolType);
    } 
  }
  
  return (
    <div
      className={`tool-btn-container ${
        tool === toolType && "tool-btn-clicked"
      }`}
      onClick={() => handleSetToolType()}
    >
      <img className="tool-btn-img" src={image} />
    </div>
  );
}
