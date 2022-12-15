import React from 'react'
import { HiPlus } from 'react-icons/hi'

export default function Button({ text, onClick, dataCy }) {
    return (
        <>
            <button
                data-cy={dataCy}
                style={{ padding: '13.5px 29px' }}
                onClick={onClick}
                className='bg-primary rounded-[45px] flex text-white font-semibold text-center text-lg border-none'>
                <span className='mr-1'><HiPlus className='text-2xl' /></span>
                {text}
            </button>
        </>
    )
}
