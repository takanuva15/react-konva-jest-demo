import * as React from "react";
import { Stage, Layer, Text } from "react-konva";
import {
  selectTheText,
  updateTheText,
  useAppDispatch,
  useAppSelector,
} from "./app/store";
import Konva from "konva";
import {useRef} from "react";
import KonvaText from "./KonvaText";

export default function KonvaDemo() {
  const textLayerRef = useRef<Konva.Layer>(null);
  const theTextState = useAppSelector(selectTheText);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Drawing area</h1>
      <input
        type="text"
        value={theTextState}
        onChange={(e) => dispatch(updateTheText(e.target.value))}
      />
      <p>User typed: {theTextState}</p>
      <Stage width={500} height={500}>
        <Layer ref={textLayerRef}>{theTextState && <KonvaText textLayerRef={textLayerRef} thetext={theTextState} />}</Layer>
      </Stage>
    </>
  );
}
