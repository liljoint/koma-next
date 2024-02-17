'use client'
import { useState } from 'react'
import { List, ListItem } from '@material-tailwind/react'
import { Bars4Icon, SunIcon } from '@heroicons/react/24/outline'
import ModalCustom, {
  ModalBody,
  ModalHeader,
} from '@/app/components/molecules/ModalCustom/ModalCustom'
import Link from 'next/link'
import { changeTheme, getTheme } from '@/actions/helper'

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
          <Bars4Icon className="h-5 w-5 rounded-md fill-header text-header" />
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
            <SunIcon className="h-5 w-5 rounded-md text-text" />
          </button>
        </ModalHeader>
        <ModalBody>
          <List>
            <Link href="/login">
              <ListItem className="justify-center rounded-none border-b-2 border-gray-500 p-2">
                LOGIN
              </ListItem>
            </Link>
            <Link href="/">
              <ListItem className="justify-center rounded-none border-b-2 border-gray-500 p-2">
                HOME
              </ListItem>
            </Link>

            <Link href="/order-list">
              <ListItem className="justify-center rounded-none border-b-2 border-gray-500 p-2">
                ORDER LIST
              </ListItem>
            </Link>
          </List>
        </ModalBody>
      </ModalCustom>
    </>
  )
}
export default SideBar
