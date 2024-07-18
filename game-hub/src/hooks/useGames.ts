import { Game, Genre, Platform } from "../services/http-service";
import { useEntityFetch } from "./useEntityFetch";

export interface GameQuery {
  genres: Genre[],
  platform: Platform | null
}

export const useGames = (gameQuery: GameQuery) => {
  const params: { [param: string]: string | null } = {
    genres: null,
    parent_platforms: null
  }

  if (gameQuery.genres !== undefined && gameQuery.genres.length !== 0) params.genres = gameQuery.genres.map(g => g.id).join(",");
  if (gameQuery.platform !== null && gameQuery.platform !== undefined)  params.parent_platforms = `${gameQuery.platform?.id}` 

  const {entities, error, isLoading} = useEntityFetch<Game>("/games", [ gameQuery ], params)
  return { games: entities, error, isLoading };
};
