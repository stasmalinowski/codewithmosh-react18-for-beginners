import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery, useGames } from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";

interface Props{
  gameQuery: GameQuery
}

export const GameGrid = ({ gameQuery }: Props) => {
  const { games, error, isLoading } = useGames(gameQuery);
  const skeletons: number[] = [];
  for (let i = 0; i < 30; i++) skeletons.push(i);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ base:1, sm: 2, md: 3, lg: 4 }}
        spacing={8}
      >
        {isLoading &&
          skeletons.map((skel) => (
            <GameCardContainer key={skel} >
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {!isLoading &&
          games.map((g) => (
            <GameCardContainer key={g.id}>
              <GameCard game={g} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};
