'use client'
import { useState } from 'react'
import { List, ListItem } from '@material-tailwind/react'
import { Bars4Icon, SunIcon } from '@heroicons/react/24/outline'
import ModalCustom, { ModalBody, ModalHeader } from '../ModalCustom/ModalCustom'
import Link from 'next/link'
import { changeTheme, getTheme } from '@/app/actions/helper'

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleTheme = () => {
    const currentTheme = getTheme()
    currentTheme === 'light' ? changeTheme('dark') : changeTheme('light')
  }

  return (
    <>
      <div className="justify-between">
        <button onClick={handleOpen}>
          <Bars4Icon className="fill-header text-header h-5 w-5 rounded-md" />
        </button>
      </div>
      <ModalCustom
        isOpen={isOpen}
        handler={handleOpen}
        className="fixed right-0 top-0 m-0 h-full rounded-none p-2"
        size="xs"
      >
        <ModalHeader handler={handleOpen}>
          <button onClick={handleTheme}>
            <SunIcon className="text-text h-5 w-5 rounded-md" />
          </button>
        </ModalHeader>
        <ModalBody>
          <List>
            <Link href="/asd">
              {' '}
              <ListItem className="justify-center rounded-none border-b-2 border-gray-500 p-2">
                Link1
              </ListItem>
            </Link>
          </List>
        </ModalBody>
      </ModalCustom>
    </>
  )
}
export default SideBar
