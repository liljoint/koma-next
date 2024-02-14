'use client'
import { useEffect, useState } from 'react'
import App from '../../organisms/App/App'
import TableControl from '../../organisms/TableControl/TableControl'
import { changeTheme, getTheme } from '@/app/actions/helper'

const Home = () => {
  const currentTheme = getTheme()
  const [theme] = useState(currentTheme)

  useEffect(() => {
    changeTheme(theme)
  }, [changeTheme])

  return (
    <App>
      <TableControl />
    </App>
  )
}
export default Home
