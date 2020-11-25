import './App.css';
import { useState } from 'react';
import floodfill from './images/floodfill.png';
import pencil from './images/pencil.png';
import { SketchPicker } from 'react-color';

function App() {
  const [ color, setColor ] = useState('#fff');

  return (
    <div className="App">
      {/* <SketchPicker /> */}
      <section className="heading">
        <h1>PAINT</h1>
      </section>
      <section className="main">
        <div className= "tools">
          <div className="toolbar">
            <div className="tool-btn-container">
              <img className="tool-btn-img" src={floodfill} />
            </div>
            <div className="tool-btn-container">
              <img className="tool-btn-img" src={pencil} />
            </div>
            <div className="tool-btn-container">
              <div style={{backgroundColor: color, width: '100%', height: '100%'}} />
            </div>
          </div>
        </div>
        <div className="canvas-container">
          <div className="canvas">
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
