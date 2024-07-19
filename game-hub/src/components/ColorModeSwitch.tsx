import { Stack, Switch, Text, useColorMode } from "@chakra-ui/react"
import { capitalize } from "../utils/misc"

export const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode} = useColorMode()

  return (
    <Stack direction={{base: "column", sm: "row"}} alignItems={"center"}>
      <Switch colorScheme={"green"} isChecked={colorMode === "dark"} onChange={toggleColorMode}/>
      <Text whiteSpace={"nowrap"} fontSize={{base: "xs", sm: "md"}}>
        {`${capitalize(colorMode)} mode on`}
      </Text>
    </Stack>
  )
}
