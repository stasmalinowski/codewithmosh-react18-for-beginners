import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import { Platform } from "../services/http-service"

interface Props{
  platforms: Platform[]
}

export const PlatformSelector = ({ platforms }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platforms</MenuButton>
      <MenuList>
        {platforms.map(p => <MenuItem key={p.slug}>{p.name}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}
