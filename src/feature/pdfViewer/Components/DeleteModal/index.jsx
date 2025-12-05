import React, { useState } from "react";
import ReactModal from "react-modal";
import Button from "../../../../components/Button";

const DeleteModal = ({ handleClick }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Button label={"Delete"} onClick={() => setIsOpen(true)} />
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="absolute left-1/2 top-1/2 w-[90%] max-w-3xl h-[20%] overflow-auto -translate-x-1/2 -translate-y-1/2 py-auto my-auto flex flex-col justify-center items-center  bg-white p-6 shadow-xl outline-none"
        overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <div className="flex flex-col gap-10">
          <h4>Do you want to delete?</h4>
          <div>
            <Button label={"Cancel"} onClick={closeModal} />
            <Button
              label={"Delete"}
              onClick={() => {
                handleClick();
                closeModal();
              }}
            />
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default DeleteModal;
