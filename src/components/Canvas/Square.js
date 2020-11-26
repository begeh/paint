import { useState } from 'react';

export default function Square(props) {
  const { key, width, height, color } = props;
  const [ squareColor, setSquareColor ] = useState('#fff')

  const handleSetSquareColor = (color) => {
    // if(squareColor !== color){
      setSquareColor(color);
    // }
  }
  
  return (
    <div
      key={key}
      className="grey-on-hover squares"
      style={{
        width: `calc(80vw/${width})`,
        height: `calc(80vh/${height})`,
        backgroundColor: squareColor
      }}
      onClick={() => handleSetSquareColor(color)}
    />
  );
}
