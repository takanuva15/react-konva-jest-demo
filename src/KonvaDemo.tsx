import * as React from 'react';
import { useState } from 'react';
import { Stage, Layer, Text } from "react-konva";

export default function KonvaDemo() {
  const [ show, setShow ] = useState(false);
  
  return (
    <>
      <button onClick={() => setShow(true)}>click me</button>
      <h1>Drawing area</h1>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {show && <Text text="Sample text" />}
        </Layer>
      </Stage>
    </>
  );
}
