import GameService, { Game } from "../services/game-service";
import { Genre } from "../services/genre-service";
import { useEntityFetch } from "./useEntityFetch";

export const useGames = (selectedGenre: Genre | null) => {
  const params = selectedGenre ? 
  {
    genres: selectedGenre.id
  } : {}
  

  const {entities, error, isLoading} = useEntityFetch<Game>(GameService, [selectedGenre], params)
  return { games: entities, error, isLoading };
};
