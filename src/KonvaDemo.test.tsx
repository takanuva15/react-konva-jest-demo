import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import Konva from "konva";
import KonvaDemo from "./KonvaDemo";
import * as React from "react";

test("Konva should render one text", async () => {
  const { container } = render(<KonvaDemo />);
  await waitFor(() => screen.getByRole("heading"));

  expect(Konva.stages[0].find("Text")).toHaveLength(0);

  fireEvent.click(screen.getByText('click me'));

  // console.log(Konva.stages[0].find("Text"));

  expect(Konva.stages[0].find("Text")).toHaveLength(1);
});
