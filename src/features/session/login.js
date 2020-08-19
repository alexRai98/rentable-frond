import React from "react";
import {
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/core";
import FormLogin from "./formLogin";

function Login({ isOpen, onClose }) {
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontWeight="normal">Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormLogin />
        </ModalBody>

        
      </ModalContent>
    </Modal>
  );
}

export default Login;
