'use client'
import { useEffect, useState } from 'react'
import TableList from '@/app/components/molecules/TableList/TableList'
import ProductSelection from '@/app/components/organisms/ProductSelection/ProductSelection'
import ModalCustom, {
  ModalBody,
  ModalHeader,
} from '@/app/components/molecules/ModalCustom/ModalCustom'
import InitTable from '@/app/components/organisms/InitTable/InitTable'
import getTables, {
  createAndOpenTable,
  updateProductTable,
  updateTable,
} from '@/client/tables/tables'
import Alert from '@/app/components/atomics/Alert/Alert'
import { Spinner } from '@/mt'
import { createOrder, updateProductOrder } from '@/client/orders/orders'
import tableTransform from '@/client/helpers/tablesTransform'

const TableControl = () => {
  const [showTable, setShowTable] = useState(false)
  const [selectedTable, setSelectedTable] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [tables, setTables] = useState()

  useEffect(() => {
    setIsLoading(true)
    getTables()
      .then((result) => {
        setIsLoading(false)
        setTables(result)
      })
      .catch((e) => {
        setIsLoading(false)
      })
  }, [])
  const tableAvailable = (table) => () => {
    createAndOpenTable(table)
      .then(() => {
        setTables((prev) => {
          return prev.map((pre) => {
            if (pre.name === table.name) {
              return {
                ...pre,
                name: table.name,
                tableAvailable: false,
              }
            }
            return pre
          })
        })
        setSelectedTable({ ...table, tableAvailable: false })
      })
      .catch((e) => console.log(e))
  }
  const handleShowTable = () => {
    setShowTable(!showTable)
  }

  const handleCreateOrder = (products) => {
    console.log(JSON.stringify(products))
    // createOrder()
    setShowTable(!showTable)
  }

  const productSelection = (product) => {
    const table = selectedTable
    updateProductOrder(table, product)
      .then((res) => {
        console.log(res)
      })
      .catch((e) => console.log(e))
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
        <ModalBody>
          {selectedTable?.tableAvailable ? (
            <InitTable
              onClick={tableAvailable(selectedTable)}
              title={`Inicializar ${selectedTable?.name}`}
            />
          ) : (
            <ProductSelection
              title={`Agregar productos: ${selectedTable?.name}`}
              parentAction={productSelection}
              table={selectedTable}
            />
          )}
        </ModalBody>
      </ModalCustom>
      <Alert
        color="yellow"
        open={isLoading}
        onClose={() => setIsLoading(false)}
      >
        Cargando mesas <Spinner />
      </Alert>
    </>
  )
}
export default TableControl
