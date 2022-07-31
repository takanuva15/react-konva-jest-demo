import * as React from "react";
import { createRoot } from "react-dom/client";
import {Provider} from "react-redux";
import KonvaDemo from "./KonvaDemo";
import { store } from './app/store';

createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <KonvaDemo />
    </Provider>
  </React.StrictMode>
);
