import { useState, useEffect } from "react";
import GameService, { Game } from "../services/game-service";
import { Text } from "@chakra-ui/react";


export const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    GameService.getAll()
      .then((games) => {
        setGames(games);
        setError("")
      })
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </>
  );
};
