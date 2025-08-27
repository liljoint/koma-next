'use client'
import { useEffect, useState } from 'react'

import getOrders, { getCurrentOrder } from '@/client/orders/orders'
import Alert from '@/app/components/atomics/Alert/Alert'
import { Spinner } from '@/mt'
import Table from '@/app/components/molecules/Table/Table'
import ModalCustom, {
  ModalBody,
  ModalHeader,
} from '@/app/components/molecules/ModalCustom/ModalCustom'
import ProductSelection from '@/app/components/organisms/ProductSelection/ProductSelection'
import useSWR from 'swr'
import { getActiveProducts } from '@/client/products/products'
import EditOrder from '@/app/components/organisms/EditOrder/EditOrder'

const headers = ['id', 'Completado', 'Mesa', '']

const displayParams = ['id', 'isCompleted', 'table']
const OrderList = () => {
  const [orders, setOrders] = useState([])
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 25,
    pageCount: 1,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showTable, setShowTable] = useState(false)
  const [selectedTable, setSelectedTable] = useState(false)
  const [currentOrder, setCurrentOrder] = useState({})

  useEffect(() => {
    if (selectedTable) {
      getCurrentOrder(selectedTable)(
        `/api/request-order/get-current-request-order?tableid=${selectedTable?.id}&populate=*`
      ).then((res) => setCurrentOrder(res))
    }
  }, [selectedTable])
  const handleShowTable = () => {
    setShowTable(!showTable)
  }

  const loadData = () => {
    getOrders()
      .then(({ data, pagination }) => {
        setIsLoading(false)
        setOrders(data)
        setPagination(pagination)
      })
      .catch((e) => {
        setIsLoading(false)
      })
  }
  useEffect(() => {
    setIsLoading(true)
    loadData()
  }, [])

  const editAction = (table) => () => {
    console.log(JSON.stringify(table.tableAll))
    handleShowTable()
    setSelectedTable(table.tableAll)
  }

  const handleEnd = () => {
    loadData()
    handleShowTable()
  }
  const { data: productsList } = useSWR(
    '/api/products?pagination[limit]=1000&filters[productAvailable][$eq]=true&populate=*',
    getActiveProducts
  )
  return (
    <>
      <h1>Pedidos Activos</h1>
      {orders && orders.length > 0 ? (
        <Table
          page={pagination.page}
          pageCount={pagination.pageCount}
          pageSize={pagination.pageSize}
          headers={headers}
          rows={orders}
          displayParams={displayParams}
          editAction={editAction}
        />
      ) : (
        'NO hay ordenes disponibles'
      )}
      <ModalCustom
        isOpen={showTable}
        handler={handleShowTable}
        size="md"
        className={'border-2 border-gray-500 bg-bg'}
      >
        <ModalHeader handler={handleShowTable} />
        <ModalBody className="overflow-y-scroll !px-5">
          <EditOrder currentOrder={currentOrder} handleFinish={handleEnd}>
            <ProductSelection
              title={`${selectedTable?.tableName}`}
              table={selectedTable}
              productsList={productsList}
              currentOrder={currentOrder}
              isLoadingOrder={false}
              mutateOrder={setCurrentOrder}
            />
          </EditOrder>
        </ModalBody>
      </ModalCustom>
      <Alert color="blue" open={isLoading}>
        Cargando pedidos <Spinner className="h-5 w-5" />
      </Alert>
    </>
  )
}
export default OrderList
