import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch color={"#585D66"} />} />
      <Input borderRadius={20} placeholder="Search games..." variant="filled" />
    </InputGroup>
  );
};
