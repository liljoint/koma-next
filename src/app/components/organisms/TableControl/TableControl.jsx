'use client'
import { useEffect, useState } from 'react'
import TableList from '@/app/components/molecules/TableList/TableList'
import ProductSelection from '@/app/components/organisms/ProductList/ProductSelection'
import ModalCustom, {
  ModalBody,
  ModalHeader,
} from '@/app/components/molecules/ModalCustom/ModalCustom'
import InitTable from '@/app/components/organisms/InitTable/InitTable'
import getTables from '@/client/tables/tables'
import Alert from '@/app/components/atomics/Alert/Alert'
import { Spinner } from '@material-tailwind/react'

const TableControl = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTable, setSelectedTable] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [tables, setTables] = useState([])

  const handleClick = ({ name, available }) => {
    setSelectedTable({ name, available })
  }

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
  const handleEnable =
    ({ name }) =>
    () => {
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
      openHandle()
    }
  const openHandle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <h1 className="text-text">Mesas</h1>
      <TableList
        tables={tables}
        handleClick={({ name, available }) =>
          () => {
            openHandle()
            handleClick({ name, available })
          }}
      />
      <ModalCustom
        isOpen={isOpen}
        handler={openHandle}
        size="md"
        className={'bg-bg'}
      >
        <ModalHeader handler={openHandle} />
        <ModalBody>
          {selectedTable?.available ? (
            <InitTable
              onClick={handleEnable(selectedTable)}
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
        Cargando mesas <Spinner onClose />
      </Alert>
    </>
  )
}
export default TableControl
