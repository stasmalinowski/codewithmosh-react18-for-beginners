import { useState, useEffect } from "react";
import GameService, { Game } from "../services/game-service";

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    GameService.getAll()
      .then((games) => {
        setGames(games);
        setError("");
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false)
      });
  }, []);

  return { games, error, isLoading };
};
