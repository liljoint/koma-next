'use client'
import { changeTheme, getTheme } from '@/actions/helper'
import TableControl from '@/app/components/organisms/TableControl/TableControl'
import { useEffect, useState } from 'react'

const Home = () => {
  const currentTheme = getTheme()
  const [theme] = useState(currentTheme)

  useEffect(() => {
    changeTheme(theme)
  }, [changeTheme])

  return <TableControl />
}
export default Home
