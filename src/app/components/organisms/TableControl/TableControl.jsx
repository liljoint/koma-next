'use client'
import { useState } from 'react'
import TableList from '@/app/components/molecules/TableList/TableList'
import allTables from '@/resources/Tables.json'
import ProductSelection from '@/app/components/organisms/ProductList/ProductSelection'
import ModalCustom, {
  ModalBody,
  ModalHeader,
} from '@/app/components/molecules/ModalCustom/ModalCustom'
import InitTable from '@/app/components/organisms/InitTable/InitTable'

const TableControl = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTable, setSelectedTable] = useState(false)
  const [tables, setTables] = useState(allTables)

  const handleClick = ({ name, available }) => {
    setSelectedTable({ name, available })
  }

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
    </>
  )
}
export default TableControl
