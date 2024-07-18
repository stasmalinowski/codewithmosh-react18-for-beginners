import { Game, Genre } from "../services/http-service";
import { useEntityFetch } from "./useEntityFetch";

export const useGames = (selectedGenres?: Genre[]) => {
  const params: { [param: string]: string | null } = {
    genres: null,
  }

  if (selectedGenres !== undefined && selectedGenres.length !== 0) params.genres = selectedGenres.map(g => g.id).join(",")

  const {entities, error, isLoading} = useEntityFetch<Game>("/games", [ selectedGenres ], params)
  return { games: entities, error, isLoading };
};
