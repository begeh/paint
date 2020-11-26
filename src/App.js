import './App.css';
import { useState, useEffect } from 'react';
import floodfill from './images/floodfill.png';
import pencil from './images/pencil.png';
import { SketchPicker } from 'react-color';

function App() {
  const [ color, setColor ] = useState('#fff');
  const [tool, setTool] = useState(null);
  const [dimensions, setDimensions] = useState({ height: 16, width: 32 });
  const { height, width } = dimensions;

  const createRow = () => {
    const row = []
    for(let i = 1; i <= width; i++) {
      row.push(
        <div 
          key={i}
          className="squares"
          style={{width: `calc(80vw/${width})`, height: `calc(80vh/${height})`}} 
        />
      )
    }
    return row;
  }



  return (
    <div className="App">
      {/* <SketchPicker /> */}
      <section className="heading">
        <h1>PAINT</h1>
      </section>
      <section className="main">
        <div className= "tools">
          <div className="toolbar">
            <div 
              className={`tool-btn-container ${tool === 'flood-fill' && "tool-btn-clicked"}`}
              onClick={() => setTool('flood-fill')}
            >
              <img className="tool-btn-img" src={floodfill} />
            </div>
            <div 
              className={`tool-btn-container ${tool === 'pencil' && "tool-btn-clicked"}`}
              onClick={() => setTool('pencil')}
            >
              <img className="tool-btn-img" src={pencil} />
            </div>
            <div className="tool-btn-container">
              <div style={{backgroundColor: color, width: '100%', height: '100%'}} />
            </div>
          </div>
        </div>
        <div className="canvas">
          {/* <div className="squares"
          style={{width: `calc(80vw/${width})`, height: `calc(80vh/${height})`}}> */}
          {createRow()}
            
        </div>
      </section>
    </div>
  );
}

export default App;
