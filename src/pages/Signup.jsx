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
import { SignUpReq } from "../redux/action";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const { isSignupLoding } = useSelector((store) => store.SignupReducer);

  const handleSignup = () => {
    // console.log(userName, email, password, avatar);
    const obj = {
      email,
      password,
      userName,
      avatar,
    };

    dispatch(SignUpReq(obj)).then((res) => {
      // console.log()
      if (res.data.status === true) {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/login");
      } else if (res.data.status === false) {
        toast({
          title: "Wrong input .",
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
        <FormLabel> UserName</FormLabel>
        <Input
          type="text"
          placeholder="Enter UserName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </FormControl>
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
        <FormLabel>Avatar</FormLabel>
        <Input
          type="email"
          placeholder="Enter Avatar URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
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
        onClick={handleSignup}
        isLoading={isSignupLoding}
        loadingText="Submitting">
        Submit
      </Button>
    </Container>
  );
};

export default Signup;
