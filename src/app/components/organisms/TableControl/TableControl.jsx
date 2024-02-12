"use client";
import { useState } from "react";
import TableList from "../../molecules/TableList/TableList";
import Modal from "../../molecules/Modal/Modal";
import allTables from "../../../resources/Tables.json";
import ProductSelection from "../ProductList/ProductSelection";

const TableControl = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);
  const [tables, setTables] = useState(allTables);

  const handleClick = ({ name, available }) => {
    setSelectedTable({ name, available });
  };
  const handleEnable =
    ({ name, available }) =>
    () => {
      setSelectedTable({ name, available });
      setIsOpen(false);
      setTables((prev) => {
        return prev.map((pre) => {
          if (pre.name === name) {
            return {
              name,
              available,
            };
          }
          return pre;
        });
      });
    };
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const ModalContentAvailable = () => (
    <>Desea inicializar la mesa seleccionada?</>
  );

  return (
    <>
      <h1>Mesas</h1>
      <TableList
        tables={tables}
        handleClick={({ name, available }) =>
          () => {
            openModal();
            handleClick({ name, available });
          }}
      />
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        isCentered
        closeOnOverlayClick={false}
        actionTitle={selectedTable?.available ? "Activar" : undefined}
        action={handleEnable({
          name: selectedTable?.name,
          available: false,
        })}
        header={selectedTable?.name}
        size="xl"
      >
        {selectedTable?.available ? (
          <ModalContentAvailable />
        ) : (
          <ProductSelection />
        )}
      </Modal>
    </>
  );
};
export default TableControl;
