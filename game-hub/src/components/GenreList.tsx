import { Heading, List } from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import { GenreListItem } from "./GenreListItem";
import { GenreListItemSkeleton } from "./GenreListItemSkeleton";
import { Genre } from "../services/http-service";

interface Props{
  onSelect: (genre: Genre) => void
  selectedGenres: Genre[]
}

export const GenreList = ({ onSelect, selectedGenres }: Props) => {
  const { genres, error, isLoading } = useGenres();
  const skeletons: number[] = [];
  for (let i = 0; i < 15; i++) skeletons.push(i);

  return (
    <>
      <Heading as="h2" marginBottom={5} fontSize={"3xl"}>Genres</Heading>
      {error && <p>{error}</p>}
      <List>
        {!isLoading && genres.map((g) => (
          <GenreListItem isHighlighted={selectedGenres.includes(g)} onClick={onSelect} key={g.id} genre={g} />
        ))}
        {isLoading && skeletons.map(skel => (
          <GenreListItemSkeleton key={skel}/>
        ))}
      </List>
    </>
  );
};
