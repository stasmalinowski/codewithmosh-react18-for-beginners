import { useState, useEffect } from "react";
import genreService, { Genre } from "../services/genre-service";

export const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    genreService.getAll()
      .then((games) => {
        setGenres(games);
        setError("");
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false)
      });
  }, []);

  return { genres, error, isLoading };
};