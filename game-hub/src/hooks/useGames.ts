import { Game, Genre } from "../services/http-service";
import { useEntityFetch } from "./useEntityFetch";

export const useGames = (selectedGenre: Genre | null) => {
  const params = {
    genres: selectedGenre?.id
  }

  const {entities, error, isLoading} = useEntityFetch<Game>("/games", [ selectedGenre ], params)
  return { games: entities, error, isLoading };
};
