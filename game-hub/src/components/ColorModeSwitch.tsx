import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"
import { capitalize } from "../utils/misc"

export const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode} = useColorMode()

  return (
    <HStack>
      <Switch colorScheme={"green"} isChecked={colorMode === "dark"} onChange={toggleColorMode}/>
      <Text>
        {`${capitalize(colorMode)} mode on`}
      </Text>
    </HStack>
  )
}
