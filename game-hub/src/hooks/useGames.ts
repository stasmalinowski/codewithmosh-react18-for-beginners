import GameService, { Game } from "../services/game-service";
import { useEntityFetch } from "./useEntityFetch";

export const useGames = () => {
  const {entities, error, isLoading} = useEntityFetch<Game>(GameService)
  return { games: entities, error, isLoading };
};
