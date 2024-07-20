import { Card, Heading, Image, CardBody, HStack } from "@chakra-ui/react"
import imagePlaceholder from "../assets/no-image-placeholder-6f3882e0.webp"
import { PlatformIconList } from "./PlatformIconList"
import { CriticScore } from "./CriticScore"
import { getCroppedImageUrl } from "../utils/image-utils"
import { Game } from "../services/http-service"
import { GameRatingEmoji } from "./GameRatingEmoji"

interface Props{
  game: Game
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image, 600, 400)} fallbackSrc={imagePlaceholder}/>
      <CardBody>
        <HStack justifyContent={"space-between"} alignItems={"center"} marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading marginBottom={3} size={"l"}>{game.name}</Heading>
        <GameRatingEmoji rating={game.rating_top} />
      </CardBody>
    </Card>
  )
}
