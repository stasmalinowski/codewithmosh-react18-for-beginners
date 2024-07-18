import GameService, { Game } from "../services/game-service";
import { Genre } from "../services/genre-service";
import { useEntityFetch } from "./useEntityFetch";

export const useGames = (genreFilter?: Genre[]) => {
  const params = genreFilter
    ? {
        genres: genreFilter.map((g) => g.id).join(","),
      }
    : {};

  const { entities, error, isLoading } = useEntityFetch<Game>(GameService, params);
  return { games: entities, error, isLoading };
};
