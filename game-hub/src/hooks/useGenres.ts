import GenreService, { Genre } from "../services/genre-service";
import { useEntityFetch } from "./useEntityFetch";

export const useGenres = () => {
  const { entities, error, isLoading } = useEntityFetch<Genre>(GenreService)
  return { genres: entities, error, isLoading };
};