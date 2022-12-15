import React from 'react'

export default function Navbar() {
    return (
        <div style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }} className='bg-primary h-[105px] flex items-center'>
            <div data-cy='header-background' className='container'>
                <h2 data-cy='header-title' className='uppercase text-white text-2xl font-bold'>TO DO LIST APP</h2>
            </div>
        </div>
    )
}
