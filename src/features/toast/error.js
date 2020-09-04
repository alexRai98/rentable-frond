import React from "react";
import { useToast } from "@chakra-ui/core";

function ErrorToast({ message }) {
  const toast = useToast();
  const onClick = () =>
    toast({
      title: "An error occurred.",
      description: {message},
      status: "error",
      duration: 1000,
      isClosable: true,
    });
  onClick();
}
export default ErrorToast;
