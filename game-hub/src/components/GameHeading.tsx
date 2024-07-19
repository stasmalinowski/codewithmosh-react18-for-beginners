import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading as="h1" marginBottom={5} fontSize={"5xl"}>
      {(gameQuery.platform ? gameQuery.platform.name : "") +
        " " +
        "Games" +
        (gameQuery.genres.length === 0
          ? ""
          : ` in categories: ${gameQuery.genres
              .map((g) => g.name)
              .join(", ")}`
        )}
    </Heading>
  );
};
