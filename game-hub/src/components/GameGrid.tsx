import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import { Genre } from "../services/genre-service";

interface Props{
  selectedGenre: Genre | null
}

export const GameGrid = ({ selectedGenre }: Props) => {
  const { games, error, isLoading } = useGames(selectedGenre);
  const skeletons: number[] = [];
  for (let i = 0; i < 30; i++) skeletons.push(i);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ base:1, sm: 2, md: 3, lg: 4, xl: 5 }}
        padding={"10px"}
        spacing={3}
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
