import React, { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import toDoEmpty from '../../assets/image/todo-empty-state.svg'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { TbPencil, TbArrowsDownUp } from 'react-icons/tb'
import Dropdown from '../../components/Dropdown'
import List from '../../components/List/List'

export default function Detail() {
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <>
            <div className='container '>
                <div style={{ margin: '43px 0 55px' }} className='flex flex-row justify-between'>
                    <div className='flex items-center'>
                        <RiArrowLeftSLine className='font-bold text-[32px] mr-5 cursor-pointer' />
                        <h2 data-cy='activity-title' className='text-4xl font-bold'>Activity</h2>
                        <TbPencil className='cursor-pointer ml-[27px] text-2xl text-[#888]' />
                    </div>
                    <div className='flex items-center'>
                        <button
                            style={{ border: '1px solid #e5e5e5', backgroundClip: 'transparent' }}
                            className='rounded-[50%] w-[54px] h-[54px] mr-[18px]'>
                            <TbArrowsDownUp onClick={() => {
                                setShowDropdown(true)
                            }} className='cursor-pointer text-2xl text-[#888] inline-block' />
                        </button>
                        <Button dataCy='activity-add-button' text={'Tambah'} />
                    </div>
                </div>
                <div className='detail-content'>
                    <div
                        style={{ boxShadow: '0 4px 8px rgb(0 0 0 / 15%)' }}
                        data-cy='todo-item'
                        className='content-item flex justify-between mb-[10px] p-[27px] bg-white rounded-xl'>
                        <List text={'testing'} />
                    </div>
                </div>
                {/* <div className='flex items-center w-full'>
                    <img style={{ margin: '0 auto' }} className='align-middle' src={toDoEmpty} alt='empty-dashboard-image' />
                </div> */}
            </div>
            {showDropdown ? <Dropdown /> : null}

        </>
    )
}