import React from "react"
import { HiOutlineTrash } from "react-icons/hi"
import { TbPencil } from "react-icons/tb"
import ModalAddList from "../Modal/ModalAddList"

const List = ({ text, handleUpdate, handleDelete, setIsEdit, setAddModal }) => {
    return (
        <div
            style={{ boxShadow: "0 4px 8px rgb(0 0 0 / 15%)" }}
            data-cy='todo-item'
            className='content-item flex justify-between mb-[10px] p-[27px] bg-white rounded-xl'
        >
            <div className='flex items-center'>
                <input
                    style={{ border: "1px solid #c7c7c7" }}
                    className='w-6 h-6 flex items-center mr-5'
                    data-cy='todo-item-checkbox'
                    type='checkbox'
                />
                <div
                    style={{ borderRadius: "50%", margin: "0 19px 0 17px" }}
                    className='w-[14px] h-[14px] bg-danger'
                    data-cy='todo-item-priority-indicator'
                ></div>
                <span className='text-lg font-medium mr-4' data-cy='todo-item-title'>
                    {text}
                </span>
                <TbPencil
                    onClick={handleUpdate}
                    className='text-xl cursor-pointer opacity-30'
                    data-cy='todo-item-edit-button'
                />
            </div>
            <HiOutlineTrash
                onClick={handleDelete}
                style={{ color: "#a4a4a4" }}
                className='text-2xl cursor-pointer'
                data-cy='todo-item-delete-button'
            />
        </div>
    )
}

export default List
