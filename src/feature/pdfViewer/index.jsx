import React from "react";
import PageViewer from "./Components/PageViewer";
import { PDFViewer } from "@react-pdf/renderer";

const PdfViewer = () => {
  return (
    <div className="w-2/3 flex-1">
      <PageViewer />
    </div>
  );
};

export default PdfViewer;
