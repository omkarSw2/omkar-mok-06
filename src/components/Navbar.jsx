import React from "react";
import {
  Center,
  Square,
  Circle,
  AbsoluteCenter,
  HStack,
  Box,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box>
      <Center mt={5}>
        <HStack gap={5}>
          <Link to="/login">
            <Text>LOG-IN</Text>
          </Link>
          <Link to="/signup">
            <Text>SIGN-UP</Text>
          </Link>
          <Link to="/">
            <Text>BLOGS</Text>
          </Link>
        </HStack>
      </Center>
    </Box>
  );
};

export default Navbar;
