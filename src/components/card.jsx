import React from "react";
import {
  Card,
  Stack,
  Image,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Divider,
  ButtonGroup,
  Button,
  Center,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteReq } from "../redux/action";

const Cards = (props) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(DeleteReq(id));
  };
  return (
    <Center>
      <Card maxW="sm">
        <CardBody>
          <Image src={props.avatar} alt={props.avatar} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{props.title}</Heading>
            <Text>{props.content}</Text>
            <Text color="blue.600" fontSize="2xl">
              {props.category}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              edit
            </Button>
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => handleDelete(props._id)}>
              Delete
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Center>
  );
};

export default Cards;
