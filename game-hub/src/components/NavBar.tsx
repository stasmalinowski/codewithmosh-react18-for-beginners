import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import { ColorModeSwitch } from "./ColorModeSwitch"
import { SearchBar } from "./SearchBar"

export const NavBar = () => {
  return (
    <HStack gap={5} padding={".3em 1em"}>
      <Image src={logo} boxSize="60px" />
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  )
}