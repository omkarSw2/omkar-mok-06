import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Input,
  FormControl,
  FormLabel,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LoginReq } from "../redux/action";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const { isLoginLoding } = useSelector((store) => store.LoginReducer);
  const handleSignin = () => {
    console.log(email, password);
    const obj = {
      email,
      password,
    };
    dispatch(LoginReq(obj)).then((res) => {
      // console.log()
      if (res.data.status === true) {
        toast({
          title: "Loged in Successfully...",
          description: "Welcome .",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/");
      } else if (res.data.status === false) {
        toast({
          title: res.data.msg,
          description: "Please try again .",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    });
  };
  return (
    <Container maxW="md" mt={10}>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          type="email"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <Button
        mt={5}
        colorScheme="blue"
        onClick={handleSignin}
        isLoading={isLoginLoding}
        loadingText="Submitting">
        Submit
      </Button>
    </Container>
  );
};

export default SignIn;
