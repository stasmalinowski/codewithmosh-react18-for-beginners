import { Game, Genre, Platform } from "../services/http-service";
import { useEntityFetch } from "./useEntityFetch";

export interface GameQuery {
  genres: Genre[],
  platform: Platform | null
  ordering: string
  searchString: string | null
}

export interface OrderingSpec{
  param: string | null
  name: string
}

export const Orderings: { [key: string]: OrderingSpec } = {
  RELEVANCE: { param: null, name: "Relevance" } as OrderingSpec,
  DATE_ADDED: { param: "-added", name: "Date Added" } as OrderingSpec,
  NAME: { param: "name", name: "Name" } as OrderingSpec,
  RELEASE_DATE: { param: "-released", name: "Release Date" } as OrderingSpec,
  POPULARITY: { param: "-metacritic", name: "Popularity" } as OrderingSpec,
  AVERGAE_RATING: { param: "-rating", name: "Average Rating" } as OrderingSpec,
}

export const useGames = (gameQuery: GameQuery) => {
  const params: { [param: string]: string | null } = {
    genres: null,
    parent_platforms: null,
    ordering: Orderings[gameQuery.ordering].param,
    search: gameQuery.searchString
  }

  if (gameQuery.genres !== undefined && gameQuery.genres.length !== 0) params.genres = gameQuery.genres.map(g => g.id).join(",");
  if (gameQuery.platform !== null && gameQuery.platform !== undefined)  params.parent_platforms = `${gameQuery.platform?.id}` 

  const {entities, error, isLoading} = useEntityFetch<Game>("/games", [ gameQuery ], params)
  return { games: entities, error, isLoading };
};
