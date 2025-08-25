'use client'
import { useState } from 'react'
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

const TableControl = () => {
  const [showTable, setShowTable] = useState(false)
  const [selectedTable, setSelectedTable] = useState(false)
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
  const handleShowTable = () => {
    setShowTable(!showTable)
  }

  return (
    <>
      <h1 className="text-text">Mesas</h1>
      <TableList
        tables={tables}
        tableAction={(table) => () => {
          handleShowTable()
          setSelectedTable(table)
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
          {selectedTable?.tableAvailable ? (
            <InitTable
              onClick={tableAvailable(selectedTable)}
              title={`Inicializar ${selectedTable?.name}`}
            />
          ) : (
            <ProductSelection
              title={`${selectedTable?.name}`}
              table={selectedTable}
              productsList={productsList}
            />
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
