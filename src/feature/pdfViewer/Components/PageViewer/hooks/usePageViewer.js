import { useAtom } from "jotai";
import { useState } from "react";
import { fileAtom } from "../../../../../atom/FileAtom";
import { useParams } from "react-router-dom";

export const usePageviewer = () => {
  const [pageNumber, setPageNumber] = useState(null);
  const [dragItem, setDragItem] = useState(null);
  const params = useParams();
  const p = params?.params;
  const [atom, setAtom] = useAtom(fileAtom);
  const handleDuplicate = async () => {
    const duplicate = atom?.[p].find((item, i) => i === pageNumber);
    const arr = atom?.[p];
    const newArray = [
      ...arr.slice(0, pageNumber + 1),
      duplicate,
      ...arr.slice(pageNumber + 1),
    ];
    const list = { ...atom, [p]: newArray };

    setAtom(list);
    setPageNumber((prev) => prev + 1);
  };

  const handleDelete = async () => {
    const updated = atom?.[p].filter((item, i) => i !== pageNumber);
    const list = { ...atom, [p]: updated };

    setAtom(list);
  };
  const startDrag = (e, item) => {
    setDragItem(item);
  };
  function dragoverHandler(ev) {
    ev.preventDefault();
  }
  const onDropHandler = (e, i) => {
    e.preventDefault();
    const item = atom?.[p].find((item, i) => i === dragItem);
    const deletedArr = atom?.[p].filter((ir, i) => i !== dragItem);
    const newArray = [...deletedArr.slice(0, i), item, ...deletedArr.slice(i)];
    const list = { ...atom, [p]: newArray };
    setPageNumber(i);
    console.log(list);

    setAtom(list);
  };
  return {
    pageNumber,
    setPageNumber,
    onDropHandler,
    dragoverHandler,
    handleDelete,
    handleDuplicate,
    dragItem,
    setDragItem,
    startDrag,
    atom,
    p,
  };
};
