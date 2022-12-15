import React from "react"
import { HiOutlineTrash } from "react-icons/hi"
import Trash from "../../assets/icons/trash.png"

export default function Card({ title, handleClickDelete, getDetailActivity, date }) {
    return (
        <div style={{ flex: "0 0 auto" }} className='w-full max-w-[235px]'>
            <div
                style={{ padding: "22px 27px", boxShadow: "0 4px 8px rgb(0 0 0 / 15%)" }}
                data-cy='activity-item'
                className='activity-card bg-white rounded-xl  h-[234px]'
            >
                <div onClick={getDetailActivity} className='activity-body h-[158px]'>
                    <h4 data-cy='activity-item-title' className='activity-item-tittle text-lg cursor-pointer font-bold'>
                        {title}
                    </h4>
                </div>
                <div className='card-footer flex items-center justify-between'>
                    <span data-cy='activity-item-date' className='text-base text-[#888]'>
                        {date}
                    </span>
                    <img
                        src={Trash}
                        data-cy='activity-item-delete-button'
                        className='text-[#888] text-2xl cursor-pointer'
                        onClick={handleClickDelete}
                    />
                </div>
            </div>
        </div>
    )
}
