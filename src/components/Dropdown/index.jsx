import React from 'react'
import './index.css'
import { RiSortAsc, RiSortDesc } from 'react-icons/ri'
import { BsSortAlphaUpAlt, BsSortAlphaDown } from 'react-icons/bs'
import { TbArrowsDownUp } from 'react-icons/tb'

export default function Dropdown() {
  const listDropdown = [
    {
      icon: { RiSortAsc },
      text: 'Terbaru',
      action: (() => { })
    },
    {
      icon: { RiSortDesc },
      text: 'Terlama',
      action: (() => { })
    },
    {
      icon: { BsSortAlphaDown },
      text: 'A - Z',
      action: (() => { })
    },
    {
      icon: { BsSortAlphaUpAlt },
      text: 'Z - A',
      action: (() => { })
    },
    {
      icon: { TbArrowsDownUp },
      text: 'Belum Selesai',
      action: (() => { })
    },
  ]

  return (
    <div
      className='dropdown-menu'>
      <ul className='list-unstyled'>
        <a className='dropdown-item'>
          <div data-cy='sort-selection-selected'>
            {listDropdown.map((item) => {
              <>
                <div>{item.icon}</div>
                <span>{item.text}</span>
              </>
            })}
          </div>
        </a>
      </ul>
    </div>
  )
}



