import { useState, useEffect } from "react";
import GameService, { Game } from "../services/game-service";

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    GameService.getAll()
      .then((games) => {
        setGames(games);
        setError("")
      })
      .catch((err) => setError(err.message));
  }, []);

  return {games, setGames, error, setError}
}