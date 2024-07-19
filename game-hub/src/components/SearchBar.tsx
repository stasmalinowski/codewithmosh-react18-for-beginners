import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchString: string | null) => void
}

export const SearchBar = ({ onSearch: onSubmit }: Props) => {
  const searchInput = useRef<HTMLInputElement>(null)

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      if (searchInput.current) {
        onSubmit(searchInput.current.value)
      }
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch color={"#585D66"} />} />
        <Input ref={searchInput} borderRadius={20} placeholder="Search games..." variant="filled" />
      </InputGroup>
    </form>
  );
};
