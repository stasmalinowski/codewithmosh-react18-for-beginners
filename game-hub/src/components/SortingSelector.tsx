import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Orderings } from "../hooks/useGames";

interface Props {
  selectedOrdering: string;
  onSelect: (ordering: string) => void;
}

export const SortingSelector = ({ selectedOrdering, onSelect }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Sort by: ${Orderings[selectedOrdering].name}`}
      </MenuButton>
      <MenuList>
        {Object.entries(Orderings).map(([k, v]) => (
          <MenuItem key={v.param} onClick={() => onSelect(k)}>
            {v.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
