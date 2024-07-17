import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";


export const GameGrid = () => {
  const {games, error, isLoading} = useGames()
  const skeletons: number[] = [] 
  for (let i = 0; i < 30; i++) skeletons.push(i)

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding={"10px"} spacing={10}>
        {isLoading && skeletons.map(skel => <GameCardSkeleton key={skel} />)}
        {!isLoading && games.map((g) => (
          <GameCard key={g.id} game={g}/> 
        ))}
      </SimpleGrid>
    </>
  );
};
