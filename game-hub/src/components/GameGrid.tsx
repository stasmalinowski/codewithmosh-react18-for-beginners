import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";

export const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons: number[] = [];
  for (let i = 0; i < 30; i++) skeletons.push(i);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={10}
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
