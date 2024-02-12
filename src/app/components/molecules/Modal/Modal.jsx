import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Modal as UiModal,
} from "@chakra-ui/react";

const Modal = ({
  header,
  onClose,
  actionTitle = undefined,
  action = undefined,
  hasButtons = true,
  children,
  ...rest
}) => {
  return (
    <UiModal onClose={onClose} {...rest}>
      <ModalOverlay />
      <ModalContent
        h="auto"
        backgroundColor="#343232"
        color="white"
        className="p-5"
      >
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody className="mb-4">{children}</ModalBody>

        {hasButtons && (
          <div className="flex h-auto w-auto items-end justify-end gap-2">
            {actionTitle && action && (
              <Button onClick={action} colorScheme="green">
                {actionTitle}
              </Button>
            )}
            <Button onClick={onClose} colorScheme="yellow">
              Cerrar
            </Button>
          </div>
        )}
      </ModalContent>
    </UiModal>
  );
};
export default Modal;
