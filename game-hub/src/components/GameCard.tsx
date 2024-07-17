import { Card, Heading, Image, CardBody, HStack } from "@chakra-ui/react"
import { Game } from "../services/game-service"
import imagePlaceholder from "../assets/no-image-placeholder-6f3882e0.webp"
import { PlatformIconList } from "./PlatformIconList"
import { CriticScore } from "./CriticScore"
import { getCroppedImageUrl } from "../utils/image-utils"

interface Props{
  game: Game
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image, 600, 400)} fallbackSrc={imagePlaceholder}/>
      <CardBody>
        <Heading size={"l"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}
