'use client'
import { useEffect, useState } from 'react'
import TableList from '@/app/components/molecules/TableList/TableList'
import ProductSelection from '@/app/components/organisms/ProductSelection/ProductSelection'
import ModalCustom, {
  ModalBody,
  ModalHeader,
} from '@/app/components/molecules/ModalCustom/ModalCustom'
import InitTable from '@/app/components/organisms/InitTable/InitTable'
import getTables, { createAndOpenTable } from '@/client/tables/tables'
import Alert from '@/app/components/atomics/Alert/Alert'
import { Spinner } from '@/mt'

import useSWR from 'swr'
import { getActiveProducts } from '@/client/products/products'
import { WaiterPassword } from '@/app/components/organisms/WaiterPassword/WaiterPassword'
import { getCurrentOrder } from '@/client/orders/orders'

const TableControl = () => {
  const [showTable, setShowTable] = useState(false)
  const [selectedTable, setSelectedTable] = useState(false)
  const [currentOrder, setCurrentOrder] = useState({})
  //const [isLoading, setIsLoading] = useState(false)
  // const [tables, setTables] = useState()

  const { data: tables, isLoading, mutate } = useSWR('/api/tables', getTables)
  const { data: productsList } = useSWR(
    '/api/products?pagination[limit]=1000&filters[productAvailable][$eq]=true&populate=*',
    getActiveProducts
  )

  const tableAvailable = (table) => () => {
    createAndOpenTable(table)
      .then((res) => {
        mutate([...tables, res])
        setSelectedTable({ ...table, tableAvailable: false })
      })
      .catch((e) => console.log(e))
  }
  useEffect(() => {
    console.log(selectedTable)
    if (selectedTable && selectedTable.tableAvailable === false) {
      getCurrentOrder(selectedTable)(
        `/api/request-order/get-current-request-order?tableid=${selectedTable?.id}&populate=*`
      ).then((res) => setCurrentOrder(res))
    }
  }, [selectedTable])
  const handleShowTable = () => {
    setShowTable(!showTable)
  }
  const [pass, setPass] = useState('')
  const [isValid, setValid] = useState(false)
  const [waiterInfo, setWaiterInfo] = useState(null)
  const resetPass = () => {
    setPass('')
    setValid(false)
  }
  return (
    <>
      <h1 className="text-text">Mesas</h1>
      <TableList
        tables={tables}
        tableAction={(table) => () => {
          handleShowTable()
          setSelectedTable(table)
          resetPass()
        }}
      />
      <ModalCustom
        isOpen={showTable}
        handler={handleShowTable}
        size="md"
        className={'border-2 border-gray-500 bg-bg'}
      >
        <ModalHeader handler={handleShowTable} />
        <ModalBody className="overflow-y-scroll !px-5">
          {isValid ? (
            selectedTable?.tableAvailable ? (
              <InitTable
                onClick={tableAvailable(selectedTable)}
                title={`Inicializar ${selectedTable?.tableName}`}
              />
            ) : (
              <ProductSelection
                title={`${selectedTable?.tableName}`}
                table={selectedTable}
                productsList={productsList}
                waiterInfo={waiterInfo}
                currentOrder={currentOrder}
                isLoadingOrder={false}
                mutateOrder={setCurrentOrder}
              />
            )
          ) : (
            <WaiterPassword
              field={pass}
              fieldSetter={setPass}
              setValid={setValid}
              setUserInfo={setWaiterInfo}
            ></WaiterPassword>
          )}
        </ModalBody>
      </ModalCustom>
      <Alert color="yellow" open={isLoading}>
        Cargando mesas <Spinner />
      </Alert>
    </>
  )
}
export default TableControl
