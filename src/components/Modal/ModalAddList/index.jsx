import React, { useState } from "react";

const ModalAddList = ({ handleCancel, handleSave, isEdit, dataDetail }) => {
  const [data, setData] = useState({
    title: isEdit ? dataDetail?.title : "",
    priority: isEdit ? dataDetail?.priority : "",
  });
  const handleValue = (e) => {
    setData((prev) => {
      if (isEdit) {
        return {
          ...prev,
          id: dataDetail.id,
          [e.target.name]: e.target.value,
        };
      } else {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        };
      }
    });
  };

  console.log(dataDetail?.id);
  console.log(data);

  return (
    <>
      <div
        data-cy="modal-add"
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[830px] bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h4 data-cy="modal-add-title" className="text-lg font-semibold">
                {isEdit ? `Edit List Item` : `Tambah List Item`}
              </h4>
              <button
                data-cy="modal-add-close-button"
                className="p-1 ml-auto border-0 text-[#4a4a4a] float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={handleCancel}
              >
                <span className="text-[#4a4a4a] h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <label
                data-cy="modal-add-name-title"
                className="text-xs font-semibold uppercase"
              >
                NAMA LIST ITEM
              </label>
              <div data-cy="modal-add-name-input">
                <input
                  placeholder="Tambahkan nama list item"
                  style={{
                    border: "1px solid #E5E5E5",
                    minWidth: "759px",
                    height: "52px",
                  }}
                  type="text"
                  className="pl-2 rounded-md mt-2"
                  name="title"
                  value={data?.title}
                  onChange={(e) => handleValue(e)}
                />
              </div>
            </div>
            <div className="relative p-6 flex-auto">
              <label
                data-cy="modal-add-priority-title"
                className="text-xs font-semibold uppercase"
              >
                PRIORITY
              </label>
              <div>
                <select
                  style={{
                    border: "1px solid #e5e5e5",
                    padding: "14px 78px 14px 50px",
                  }}
                  className=" mt-[9px] bg-white focus:border-none focus-within:border-none focus-visible::border-none"
                  onChange={(e) => handleValue(e)}
                  name="priority"
                  value={data?.priority}
                >
                  <option value="very-high">
                    <span className="bg-danger w-[14px] h-[14px]"></span>Very
                    High
                  </option>
                  <option value="high">
                    <span className="bg-danger w-[14px] h-[14px]"></span>High
                  </option>
                  <option value="medium">
                    <span className="bg-danger w-[14px] h-[14px]"></span>Medium
                  </option>
                  <option value="low">
                    <span className="bg-danger w-[14px] h-[14px]"></span>Low
                  </option>
                  <option value="very-low">
                    createItemTodo(data)
                    <span className="bg-danger w-[14px] h-[14px]"></span>Very
                    Low
                  </option>
                </select>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                style={{ borderRadius: "45px", width: "150px", height: "45px" }}
                className="bg-emerald-500 text-lg text-white font-bold text-center rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleSave({ ...data, idTodo: dataDetail?.id })}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalAddList;
