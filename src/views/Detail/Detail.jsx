import React, { useEffect, useState, useRef } from "react";
import Button from "../../components/Button";
import toDoEmpty from "../../assets/image/todo-empty-state.svg";
import { RiArrowLeftSLine } from "react-icons/ri";
import { TbPencil, TbArrowsDownUp } from "react-icons/tb";
import Dropdown from "../../components/Dropdown";
import List from "../../components/List/List";
import useDetail from "./useDetail";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import ModalDelete from "../../components/Modal/ModalDelete";
import ModalInformation from "../../components/Modal/ModalInformation";
import ModalAddList from "../../components/Modal/ModalAddList";

export default function Detail() {
  const {
    getListItemTodo,
    details,
    isLoading,
    handleCancelDelete,
    handleDelete,
    showModal,
    deleteItemTodo,
    modalInfo,
    setModalInfo,
    todoItem,
    addModal,
    setAddModal,
    handleCancelAdd,
    handleSave,
    isEdit,
    setIsEdit,
    handleEditActivity,
    setIsEditActivityTitle,
    isEditActivityTitle,
  } = useDetail();
  const [showDropdown, setShowDropdown] = useState(false);
  const [activityTitle, setActivityTitle] = useState("");
  const [todo, setTodo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      console.log(ref.current);
      // console.log({ refClick: ref.current.contains(event.target) });
      if (ref.current && !ref.current.contains(event.target)) {
        setIsEditActivityTitle(false);
        console.log("if");
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [isEditActivityTitle]);

  useEffect(() => {
    getListItemTodo(id);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container " ref={ref}>
          <div
            style={{ margin: "43px 0 55px" }}
            className="flex flex-row justify-between"
          >
            <div className="flex items-center">
              <RiArrowLeftSLine
                onClick={() => navigate("/")}
                data-cy="todo-back-button"
                className="font-bold text-[32px] mr-5 cursor-pointer"
              />
              <div data-cy="todo-title">
                {isEditActivityTitle ? (
                  <input
                    className="text-4xl font-bold"
                    value={activityTitle}
                    onChange={(e) => setActivityTitle(e.target.value)}
                  />
                ) : (
                  <h2 className="text-4xl font-bold">{details?.title}</h2>
                )}
              </div>
              <TbPencil
                onClick={() => {
                  setActivityTitle(details?.title);
                  setIsEditActivityTitle(true);
                }}
                data-cy="todo-title-edit-button"
                className="cursor-pointer ml-[27px] text-2xl text-[#888]"
              />
            </div>
            <div className="flex items-center">
              <button
                style={{
                  border: "1px solid #e5e5e5",
                  backgroundClip: "transparent",
                }}
                className="rounded-[50%] w-[54px] h-[54px] mr-[18px]"
              >
                <TbArrowsDownUp
                  onClick={() => {
                    setShowDropdown(true);
                  }}
                  className="cursor-pointer text-2xl text-[#888] inline-block"
                />
              </button>
              <Button
                onClick={() => setAddModal(true)}
                dataCy="todo-add-button"
                text="Tambah"
              />
            </div>
          </div>
          {details?.todo_items?.length ? (
            <div className="detail-content">
              {details?.todo_items?.map((value) => {
                return (
                  <List
                    details={value}
                    handleCancelAdd={handleCancelAdd}
                    handleSave={handleSave}
                    key={value?.id}
                    handleUpdate={() => {
                      setTodo(value);
                      setIsEdit(true);
                      setAddModal(true);
                    }}
                    text={value?.title}
                    handleDelete={() => handleDelete(value)}
                  />
                );
              })}
            </div>
          ) : (
            <div
              className="flex items-center w-full"
              data-cy="todo-empty-state"
            >
              <img
                style={{ margin: "0 auto" }}
                className="align-middle"
                src={toDoEmpty}
                alt="empty-dashboard-image"
              />
            </div>
          )}
        </div>
      )}
      {showDropdown ? <Dropdown /> : null}
      {showModal && (
        <ModalDelete
          actionCancelDelete={handleCancelDelete}
          actionDelete={deleteItemTodo}
          text="item"
          activity={todoItem}
        />
      )}
      {modalInfo && (
        <ModalInformation
          modalInfo={modalInfo}
          setModalInfo={setModalInfo}
          text="item berhasil dihapus"
        />
      )}
      {addModal && (
        <ModalAddList
          dataDetail={todo}
          isEdit={isEdit}
          handleCancel={handleCancelAdd}
          handleSave={handleSave}
        />
      )}
    </>
  );
}
