'use client'
import { useState } from 'react'
import { List, ListItem } from '@material-tailwind/react'
import { Bars4Icon, SunIcon } from '@heroicons/react/24/outline'
import ModalCustom, { ModalBody, ModalHeader } from '../ModalCustom/ModalCustom'
import Link from 'next/link'

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState('light')
  const handleOpen = () => {
    console.log('handler')
    setIsOpen(!isOpen)
  }

  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
    console.log(theme)
  }
  return (
    <>
      <div className="justify-between">
        <button className="" onClick={handleOpen}>
          <Bars4Icon className="h-5 w-5 rounded-md hover:bg-gray-800" />
        </button>
      </div>
      <ModalCustom
        isOpen={isOpen}
        handler={handleOpen}
        className="fixed right-0 top-0 m-0 h-full rounded-none p-5"
        size="xs"
      >
        <ModalHeader handler={handleOpen}>
          <button className="" onClick={handleTheme}>
            <SunIcon className="h-5 w-5 rounded-md" color="white" />
          </button>
        </ModalHeader>
        <ModalBody>
          <List>
            <Link href="/asd">
              {' '}
              <ListItem className="justify-center rounded-none border-b-2 border-gray-500 p-4">
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
