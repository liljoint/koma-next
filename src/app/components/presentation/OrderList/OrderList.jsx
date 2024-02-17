'use client'
import SkeletonBody from '@/app/components/molecules/SkeletonBody/SkeletonBody'
import getOrders from '@/client/orders/orders'
import { useEffect, useState } from 'react'
import Alert from '@/app/components/atomics/Alert/Alert'
import { Spinner } from '@material-tailwind/react'
import Table from '@/app/components/molecules/Table/Table'

const headers = [
  'id',
  'Completado',
  'Pago recibido',
  'Propina',
  'Ponto total',
  '',
]

const displayParams = ['id', 'isCompleted', 'payment', 'tip', 'totalAmount']
const OrderList = () => {
  const [orders, setOrders] = useState([])
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 25,
    pageCount: 1,
  })
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    getOrders()
      .then(({ data, pagination }) => {
        setIsLoading(false)
        setOrders(data)
        setPagination(pagination)
      })
      .catch((e) => {
        setIsLoading(false)
      })
  }, [])
  return (
    <>
      <h1>Order List</h1>
      {orders && orders.length > 0 ? (
        <Table
          page={pagination.page}
          pageCount={pagination.pageCount}
          pageSize={pagination.pageSize}
          headers={headers}
          rows={orders}
          displayParams={displayParams}
        />
      ) : (
        <SkeletonBody />
      )}
      <Alert color="blue" open={isLoading}>
        Cargando pedidos <Spinner className="h-5 w-5" />
      </Alert>
    </>
  )
}
export default OrderList
