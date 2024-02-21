'use client'
import OrderList from '@/app/components/presentation/OrderList/OrderList'
import { useContext } from 'react'
import { AppContext } from '@/app/persistance/Context'
import Forbidden from '@/app/components/presentation/Forbidden/Forbidden'

const Page = () => {
  const { session } = useContext(AppContext)

  return session ? <OrderList /> : <Forbidden />
}
export default Page
