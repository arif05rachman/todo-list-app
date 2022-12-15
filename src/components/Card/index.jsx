import React from "react"
import Trash from "../../assets/icons/trash.png"
import { useNavigate } from "react-router-dom"
import dayJs from "dayjs"

export default function Card({ handleClickDelete, activity }) {
    const navigate = useNavigate()

    return (
        <div style={{ flex: "0 0 auto" }} className='w-full max-w-[235px]'>
            <div
                style={{ padding: "22px 27px", boxShadow: "0 4px 8px rgb(0 0 0 / 15%)" }}
                data-cy='activity-item'
                className='activity-card bg-white rounded-xl  h-[234px]'
            >
                <div
                    data-cy='activity-item-title'
                    onClick={() => navigate(`/detail/${activity?.id}`)}
                    className='activity-body h-[158px]'
                >
                    <h4 className='activity-item-tittle text-lg cursor-pointer font-bold'>{activity?.title}</h4>
                </div>
                <div className='flex items-center justify-between'>
                    <span data-cy='activity-item-date' className='text-base text-[#888]'>
                        {dayJs(activity?.date).format("DD MMMM YYYY")}
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
