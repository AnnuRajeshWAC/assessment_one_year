import React from "react";
import "react-pdf/dist/Page/TextLayer.css";
import Button from "../../../../components/Button";
import ViewModal from "../ViewModal";
import { usePageviewer } from "./hooks/usePageViewer";
import DeleteModal from "../DeleteModal";

const PageViewer = () => {
  const {
    p,
    atom,
    pageNumber,
    startDrag,
    handleDelete,
    setPageNumber,
    onDropHandler,
    dragoverHandler,
    handleDuplicate,
  } = usePageviewer();

  return (
    <div>
      <div className="w-full bg-blue-200 p-2 flex gap-3 justify-end items-center">
        {pageNumber + 1 > 0 && (
          <>
            <DeleteModal handleClick={handleDelete} />
            <Button label="Duplicate" onClick={handleDuplicate} />
            <ViewModal items={atom?.[p]} />
          </>
        )}
      </div>
      <div className={`flex flex-wrap justify-center gap-5 mt-12`}>
        {atom?.[p]?.map((item, i) => (
          <div
            key={i}
            draggable={true}
            onClick={() => {
              setPageNumber(i);
            }}
            onDragOver={dragoverHandler}
            onDrop={(e) => onDropHandler(e, i)}
            onDragStart={(e) => startDrag(e, i)}
            className={`${pageNumber === i ? "border" : ""} w-[310px] `}
          >
            <img src={item?.thumbnail} className="w-full object-cover" />
            <p className="w-full text-center p-2">{i}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageViewer;
