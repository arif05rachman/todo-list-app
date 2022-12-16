import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  DELETE_TODO_ITEM,
  GET_DETAIL_ACTIVITY,
  GET_TODO_ITEMS,
} from "../../constants";
import { fetcher } from "../../utils/axiosInstance";

const useDetail = () => {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  const [todoItem, setTodoItem] = useState({});
  const [addModal, setAddModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditActivityTitle, setIsEditActivityTitle] = useState(false);

  const { id } = useParams();

  const getListItemTodo = async (id) => {
    setIsLoading(true);
    try {
      const res = await fetcher.get(GET_DETAIL_ACTIVITY(id));
      if (res) {
        setDetails(res?.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const createItemTodo = async ({ title, priority }) => {
    setIsLoading(true);
    const data = {
      activity_group_id: id,
      title,
      priority,
    };
    try {
      const res = await fetcher.post(GET_TODO_ITEMS, data);
      if (res) {
        setAddModal(false);
        getListItemTodo(id);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateItemTodo = async ({ title, priority, idTodo }) => {
    setIsLoading(true);
    const data = {
      title,
      priority,
    };
    try {
      const res = await fetcher.patch(GET_TODO_ITEMS + `/${idTodo}`, data);
      if (res) {
        setAddModal(false);
        getListItemTodo(id);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteItemTodo = async () => {
    setIsLoading(true);
    try {
      const res = await fetcher.delete(DELETE_TODO_ITEM(todoItem.id));
      if (res) {
        setShowModal(false);
        setModalInfo(true);
        getListItemTodo(id);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = (value) => {
    setShowModal(true);
    setTodoItem(value);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setTodoItem({});
  };

  const handleCancelAdd = () => {
    setShowModal(false);
  };

  const handleSave = (data) => {
    isEdit ? updateItemTodo(data) : createItemTodo(data);
  };

  const handleEditActivity = () => {};

  return {
    getListItemTodo,
    details,
    isLoading,
    handleCancelDelete,
    deleteItemTodo,
    handleDelete,
    showModal,
    setModalInfo,
    modalInfo,
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
  };
};

export default useDetail;
