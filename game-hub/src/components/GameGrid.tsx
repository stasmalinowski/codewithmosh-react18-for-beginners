import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Platform {
  id: number;
  slug: string;
  name: string;
}

interface Game {
  id: number;
  slug: string;
  name: string;
  released: Date;
  backgroundImage: string;
  rating: number;
  ratingTop: number;
  ratingsCount: number;
  platforms: { platform: Platform; releasedAt: string; requirements: any };
}

interface GameApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

export const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    apiClient
      .get<GameApiResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
        setError("")
      })
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((g) => (
          <li>{g.name}</li>
        ))}
      </ul>
    </>
  );
};
