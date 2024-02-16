'use client'
import { useEffect, useState } from 'react'
import TableList from '@/app/components/molecules/TableList/TableList'
import ProductSelection from '@/app/components/organisms/ProductList/ProductSelection'
import ModalCustom, {
  ModalBody,
  ModalHeader,
} from '@/app/components/molecules/ModalCustom/ModalCustom'
import InitTable from '@/app/components/organisms/InitTable/InitTable'
import getTables, { updateTable } from '@/client/tables/tables'
import Alert from '@/app/components/atomics/Alert/Alert'
import { Spinner } from '@material-tailwind/react'

const TableControl = () => {
  const [showTable, setShowTable] = useState(false)
  const [selectedTable, setSelectedTable] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [tables, setTables] = useState([])

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
  const tableAvailable =
    ({ name, id }) =>
    () => {
      updateTable({ id, available: false })
        .then(() => {
          setTables((prev) => {
            return prev.map((pre) => {
              if (pre.name === name) {
                return {
                  name,
                  available: false,
                }
              }
              return pre
            })
          })
          setSelectedTable({ name, id, available: false })
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
        tableAction={({ name, available, id }) =>
          () => {
            handleShowTable()
            setSelectedTable({ name, available, id })
          }}
      />
      <ModalCustom
        isOpen={showTable}
        handler={handleShowTable}
        size="md"
        className={'bg-bg'}
      >
        <ModalHeader handler={handleShowTable} />
        <ModalBody>
          {selectedTable?.available ? (
            <InitTable
              onClick={tableAvailable(selectedTable)}
              title={`Inicializar ${selectedTable?.name}`}
            />
          ) : (
            <ProductSelection
              title={`Agregar productos: ${selectedTable?.name}`}
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
