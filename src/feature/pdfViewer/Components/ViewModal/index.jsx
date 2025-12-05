import React, { useRef, useState } from "react";
import ReactModal from "react-modal";
import Button from "../../../../components/Button";
import { useReactToPrint } from "react-to-print";

const ViewModal = ({ items }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const targetRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef: targetRef });

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Button label={"Export"} onClick={() => setIsOpen(true)} />
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="absolute left-1/2 top-1/2 w-[90%] max-w-3xl h-[70%] overflow-auto -translate-x-1/2 -translate-y-1/2 py-auto my-auto flex flex-col justify-center items-center  bg-white p-6 shadow-xl outline-none"
        overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <div
          className=" overflow-y-auto  my-auto space-y-2 w-full"
          ref={targetRef}
        >
          {items?.map((item, i) => (
            <img
              key={i}
              src={item?.thumbnail}
              className="w-full object-contain"
            />
          ))}
        </div>
        <div className="p-1 w-full flex  justify-end">
          <Button label={"Cancel"} onClick={closeModal} />
          <Button
            label={"Confirm"}
            onClick={() => {
              reactToPrintFn();
              closeModal();
            }}
          />
        </div>
      </ReactModal>
    </>
  );
};

export default ViewModal;
