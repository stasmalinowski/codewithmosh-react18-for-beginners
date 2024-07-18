import { HStack, Icon } from "@chakra-ui/react"
import { Platform } from "../services/http-service"
import { platformIconMap } from "../utils/misc"

interface Props {
  platforms: Platform[]
}

export const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => <Icon key={platform.id} as={platformIconMap[platform.slug]} color='gray.500' />)}
    </HStack>
  )
}
