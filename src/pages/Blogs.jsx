import React, { useEffect, useState } from "react";
import { Container, Select, Button } from "@chakra-ui/react";
import { GETBLOGReq } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/card";
const Blogs = () => {
  const [sort, setSort] = useState("");
  const [category, SetCategory] = useState("");
  const dispatch = useDispatch();
  const { isLoding, isError, data } = useSelector((store) => store.reducer);
  // console.log(data);

  useEffect(() => {
    dispatch(GETBLOGReq());
  }, []);
  return (
    <>
      <Container mt={5} maxW="2xl" gap={5}>
        <Button>Create Blog</Button>
        <Button>Rest Passowed</Button>
        <Select value={category} onchange={(e) => SetCategory(e.taget.value)}>
          <option value="Business”">Business”</option>
          <option value="Tech">Tech</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Entertainment">Entertainment</option>
        </Select>
        <Select value={sort} onchange={(e) => setSort(e.taget.value)}>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </Select>
      </Container>

      {data?.map((i) => (
        <Card {...i} />
      ))}
    </>
  );
};

export default Blogs;
