import { Card, Heading, Image, CardBody } from "@chakra-ui/react"
import { Game } from "../services/game-service"
import imagePlaceholder from "../assets/no-image-placeholder-6f3882e0.webp"

interface Props{
  game: Game
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image + "xxxxx"} fallbackSrc={imagePlaceholder}/>
      <CardBody>
        <Heading size={"xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  )
}
