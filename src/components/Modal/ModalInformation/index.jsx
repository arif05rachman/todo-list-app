import React from "react";
import informationIcon from "../../../assets/image/information-icon.svg";

const ModalInformation = ({ text, modalInfo, setModalInfo }) => {
  setTimeout(() => setModalInfo(false), 1000);

  return (
    <>
      <div
        data-cy="modal-information"
        className="justify-center items-center flex overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="relative px-6 flex items-center gap-3 flex-auto text-center w-[490px]">
              <img src={informationIcon} alt="information-icon" />
              <p className="my-4 text-[#111] text-lg leading-relaxed">{text}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalInformation;
