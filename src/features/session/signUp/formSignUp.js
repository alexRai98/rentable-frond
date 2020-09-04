import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  ModalFooter,
  Spinner,
  useToast,
} from "@chakra-ui/core";
import { TitleForm, ContainerForm } from "./signupSyled";
import { signUp } from "../sessionSlice";
import { useParams, useHistory } from "react-router-dom";

function FullField(props) {
  const [field, meta] = useField(props);
  const error = meta.error && meta.touched;
  return (
    <FormControl isRequired isInvalid={error} mb="16px">
      <FormLabel fontWeight="bold">{props.label}</FormLabel>
      <Input {...field} {...props} />
      <FormErrorMessage> {meta.error}</FormErrorMessage>
    </FormControl>
  );
}

function SignupForm() {
  const dispatch = useDispatch();
  const sessionStatus = useSelector((state) => state.session.status);
  const toast = useToast();
  const { type } = useParams();
  const history = useHistory();


  const hundlerSubmit = async (values) => {
    try {
      const response = await dispatch(signUp({ ...values, type: type }));
      unwrapResult(response);
      history.push(`/sign-up/success/${type}`)
    } catch (e) {
      toast({
        title: "An error occurred.",
        description: { e },
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };
  return (
    <ContainerForm>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          phone: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string().email().required("Email is required"),
          password: Yup.string().required("Password is required"),
          phone: Yup.string()
            .matches(/^\d+$/, { message: "Invalid phone" })
            .required("Number required"),
        })}
        onSubmit={hundlerSubmit}
      >
        <Form>
          <TitleForm>Create your account</TitleForm>
          <FullField label="Name" name="name" type="text" />
          <FullField label="Email" name="email" type="email" />
          <FullField label="Password" name="password" type="password" />
          <FullField label="Phone number" name="phone" type="text" />

          <ModalFooter d="flex" alignItems="center">
          {/* eslint-disable-next-line  */}
            <Button
              type="submit"
              variantColor="teal"
              bg="#4FD1C5"
              variant="solid"
              size="lg"
              w="248px"
              m="auto"
            > 
              JOIN 🎉
              {sessionStatus === "loading" && <Spinner ml="7px" />}
            </Button>
          </ModalFooter>
        </Form>
      </Formik>
    </ContainerForm>
  );
}

export default SignupForm;
