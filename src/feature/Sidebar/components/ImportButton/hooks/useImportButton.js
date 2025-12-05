import { useState } from "react";
import { useAtom } from "jotai";
import { fileAtom } from "../../../../../atom/FileAtom";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as pdfjsLib from "pdfjs-dist";

export const useImportButton = () => {
  const [atom, setAtom] = useAtom(fileAtom);
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleFileChange = async (e) => {
    try {
      setLoading(true);
      const files = Array.from(e.target.files);
      let allPages = [];

      for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();

        const pdfBytes = new Uint8Array(arrayBuffer);
        const pdfJsBuffer = arrayBuffer.slice(0);

        const pdf = await pdfjsLib.getDocument({ data: pdfJsBuffer }).promise;

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 0.4 });

          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({ canvasContext: ctx, viewport }).promise;

          allPages.push({
            id: crypto.randomUUID(),
            pdfData: pdfBytes,
            pageNumber: i,
            thumbnail: canvas.toDataURL(),
            pdfName: file.name,
          });
        }
        const newList = { ...atom, [file.name]: allPages };
        navigate(`/${file.name}`);
        setAtom(newList);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (link) => {
    navigate(`/${link}`);
  };
  return {
    handleClick,
    atom,
    setAtom,
    handleFileChange,
    location,
    params,
    loading,
  };
};
