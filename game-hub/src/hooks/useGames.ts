import { Game, Genre, Platform } from "../services/http-service";
import { useEntityFetch } from "./useEntityFetch";

export const useGames = (selectedGenres?: Genre[], selectedPlatform?: Platform | null) => {
  const params: { [param: string]: string | null } = {
    genres: null,
    parent_platforms: null
  }

  if (selectedGenres !== undefined && selectedGenres.length !== 0) params.genres = selectedGenres.map(g => g.id).join(",");
  if (selectedPlatform !== null && selectedPlatform !== undefined)  params.parent_platforms = `${selectedPlatform?.id}` 

  const {entities, error, isLoading} = useEntityFetch<Game>("/games", [ selectedGenres, selectedPlatform ], params)
  return { games: entities, error, isLoading };
};
