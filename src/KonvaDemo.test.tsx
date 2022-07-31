import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import Konva from "konva";
import React from 'react';
import KonvaDemo from "./KonvaDemo";
import { setupStore, store } from './app/store';
import {Provider} from "react-redux";
import userEvent from '@testing-library/user-event'

test("Konva should render one text", async () => {
  const myStore = setupStore({ thetext: ''});
  render(<Provider store={myStore}><KonvaDemo /></Provider>);
  await waitFor(() => screen.getByRole("heading"));

  expect(Konva.stages[0].find('Text')).toHaveLength(0);

  await userEvent.type(screen.getByRole('textbox'), '11');

  // console.log(Konva.stages[0].find("Text"));

  expect(Konva.stages[0].find("Text")).toHaveLength(1);
});
