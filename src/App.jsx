import "./App.css";
import Button from "./components/Button";
import PdfViewer from "./feature/pdfViewer";
import PageViewer from "./feature/pdfViewer/Components/PageViewer";
import Sidebar from "./feature/Sidebar";
import ImportButton from "./feature/Sidebar/components/ImportButton";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-wrap">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/:params" element={<PdfViewer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
