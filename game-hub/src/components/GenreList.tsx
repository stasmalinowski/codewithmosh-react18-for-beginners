import { List } from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import { GenreListItem } from "./GenreListItem";
import { GenreListItemSkeleton } from "./GenreListItemSkeleton";
import { Genre } from "../services/http-service";

interface Props{
  onSelect: (genre: Genre) => void
  selectedGenre: Genre | null
}

export const GenreList = ({ onSelect, selectedGenre }: Props) => {
  const { genres, error, isLoading } = useGenres();
  const skeletons: number[] = [];
  for (let i = 0; i < 15; i++) skeletons.push(i);

  return (
    <>
      {error && <p>{error}</p>}
      <List>
        {!isLoading && genres.map((g) => (
          <GenreListItem isHighlighted={g == selectedGenre} onClick={onSelect} key={g.id} genre={g} />
        ))}
        {isLoading && skeletons.map(skel => (
          <GenreListItemSkeleton key={skel}/>
        ))}
      </List>
    </>
  );
};
