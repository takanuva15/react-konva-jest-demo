import {screen, waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Konva from "konva";
import React from 'react';
import KonvaDemo from "./KonvaDemo";
import {renderWithProviders} from './test-utils';

test("Konva should render one text", async () => {
  renderWithProviders(<KonvaDemo />, {
    preloadedState: { thetext: ''}
  })
  await waitFor(() => screen.getByRole("heading"));

  expect(Konva.stages[0].find('Text')).toHaveLength(0);

  await userEvent.type(screen.getByRole('textbox'), '11');

  // console.log(Konva.stages[0].find("Text"));

  expect(Konva.stages[0].find("Text")).toHaveLength(1);
});
