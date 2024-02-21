'use client'
import { useContext, useEffect, useState } from 'react'
import { List, ListItem } from '@material-tailwind/react'
import { Bars4Icon, SunIcon } from '@heroicons/react/24/outline'
import ModalCustom, {
  ModalBody,
  ModalHeader,
} from '@/app/components/molecules/ModalCustom/ModalCustom'
import Link from 'next/link'
import { AppContext } from '@/app/persistance/Context'
import { changeTheme } from '@/actions/helper'

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { session, setSession, theme, setTheme } = useContext(AppContext)

  useEffect(() => {
    if (theme !== '') {
      console.log('effect theme', theme)
      setTheme(theme)
      changeTheme(theme)
    }
  }, [theme])
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    changeTheme(newTheme)
  }

  const handleClick = () => {
    setIsOpen(false)
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
            {session ? (
              <div>
                Sessión iniciada como: {JSON.stringify(session?.user?.username)}
              </div>
            ) : (
              <Link href="/login" onClick={handleClick}>
                <ListItem className="justify-center rounded-none border-b-2 border-gray-500 p-2">
                  LOGIN
                </ListItem>
              </Link>
            )}
            <Link href="/" onClick={handleClick}>
              <ListItem className="justify-center rounded-none border-b-2 border-gray-500 p-2">
                HOME
              </ListItem>
            </Link>
            <Link href="/order-list" onClick={handleClick}>
              <ListItem className="justify-center rounded-none border-b-2 border-gray-500 p-2">
                ORDER LIST
              </ListItem>
            </Link>
            {session ? (
              <Link
                href="/"
                onClick={() => {
                  setSession(null)
                  handleClick()
                }}
                className="fixed bottom-0 right-0 inline-flex"
              >
                <ListItem className="justify-center rounded-none border-b-2 border-gray-500 p-2">
                  LOGOUT
                </ListItem>
              </Link>
            ) : null}
          </List>
        </ModalBody>
      </ModalCustom>
    </>
  )
}
export default SideBar
