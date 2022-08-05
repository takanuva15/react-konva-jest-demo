import * as React from "react";
import {Text} from 'react-konva';

export default function KonvaText({textLayerRef, thetext}) {
  const textToShow = [];
  if (textLayerRef.current && thetext) {
    textToShow.push(<Text key={thetext}  text={thetext} />);
  }
  return <>{textToShow}</>
}