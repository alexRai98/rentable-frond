import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {unwrapResult} from '@reduxjs/toolkit'
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  ModalFooter,
  Spinner,
  useToast
} from "@chakra-ui/core";
import {logIn} from './sessionSlice'
//import ToastError from '../toast/error'

function FullField(props) {
  const [field, meta] = useField(props);
  const error = meta.error && meta.touched;
  return (
    <FormControl isRequired isInvalid={error} mb="16px">
      <FormLabel fontWeight="bold" >{props.name}</FormLabel>
      <Input {...field} {...props} />
      <FormErrorMessage> {meta.error}</FormErrorMessage>
    </FormControl>
  );
}

function LoginForm() {
  const dispatch = useDispatch();
  const sessionStatus = useSelector((state) => state.session.status);
  const toast = useToast();

  const hundlerSubmit = async (values) => {
    
    try {
      const response = await dispatch(logIn(values))
      unwrapResult(response)
    } catch(e) {
      toast({
        title: "An error occurred.",
        description: {e},
        status: "error",
        duration: 1000,
        isClosable: true,
      })
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required("Email is required"),
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={hundlerSubmit}
      >
        <Form>
          <FullField name="email" placeholder="example@hola.com" type="email" />
          <FullField name="password" placeholder="*******" type="password" />
          <ModalFooter d="flex" alignItems="center">
            <Button variant="ghost" mr="12px">
              Go to Signup
            </Button>
            <Button
              type="submit"
              variantColor="teal"
              bg="#4FD1C5"
              variant="solid"
              size="sm"
              mr={3}
            >
              Sign in
              {sessionStatus === "loading" && <Spinner ml="7px"/> }
            </Button>
          </ModalFooter>
        </Form>
      </Formik>
    </>
  );
}

export default LoginForm;
