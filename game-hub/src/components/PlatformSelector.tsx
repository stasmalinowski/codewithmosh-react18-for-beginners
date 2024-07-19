import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatforms } from "../hooks/usePlatforms";
import { Platform } from "../services/http-service";
import { platformIconMap } from "../utils/misc";

interface Props {
  selectedPlatform: Platform | null;
  onSelect: (platform: Platform | null) => void;
}

export const PlatformSelector = ({ selectedPlatform, onSelect }: Props) => {
  const { platforms, error, isLoading } = usePlatforms();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {!error && (selectedPlatform ? `Platform: ${selectedPlatform.name}` : "Platform: All")}
        {error && "An error occured!"}
      </MenuButton>
      <MenuList>
        {error && error}
        {isLoading && <Spinner />}
        {!error && !isLoading && (
          <>
            <MenuItem onClick={() => onSelect(null)} key={null}>
              All
            </MenuItem>
            {platforms.map((p) => (
              <MenuItem
                icon={<Icon as={platformIconMap[p.slug]} />}
                onClick={() => onSelect(p)}
                key={p.slug}
              >
                {p.name}
              </MenuItem>
            ))}
          </>
        )}
      </MenuList>
    </Menu>
  );
};
