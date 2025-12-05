import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import { DndContext } from "@dnd-kit/core";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DndContext>
      <App />
    </DndContext>
  </React.StrictMode>
);
