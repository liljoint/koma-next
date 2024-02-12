"use client";
import { useState } from "react";
import {
  Modal as UiModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ListItem,
  List,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button className="hover:text-blue-2" onClick={handleOnClick}>
        <HamburgerIcon
          h="2rem"
          w="2rem"
          className="hover:bg-gray-800 rounded-md"
        />
      </button>
      <UiModal
        onClose={handleOnClose}
        isOpen={isOpen}
        isCentered={false}
        size="full"
        motionPreset="slideInLeft"
      >
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />

        <ModalContent
          backgroundColor="#343232"
          color="white"
          w="30%"
          right="0px"
          top="0px"
          position={"absolute"}
        >
          <ModalCloseButton />
          <ModalBody
            className="items-center flex flex-col"
            p="0"
            pt="10"
            mt="10"
          >
            <List w="100%">
              <ListItem className=" p-5 text-center" borderBottom="1px ">
                <Link href="/asd">Link1</Link>
              </ListItem>
              <ListItem className=" p-5 text-center" borderBottom="1px ">
                <Link href="/asd">Link1</Link>
              </ListItem>
              <ListItem className=" p-5 text-center" borderBottom="1px ">
                <Link href="/asd">Link1</Link>
              </ListItem>
            </List>
          </ModalBody>
        </ModalContent>
      </UiModal>
    </>
  );
};
export default SideBar;
