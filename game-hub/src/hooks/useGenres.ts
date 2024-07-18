import { Genre } from "../services/http-service";
import { useEntityFetch } from "./useEntityFetch";

export const useGenres = () => {
  const { entities, error, isLoading } = useEntityFetch<Genre>("/genres")
  return { genres: entities, error, isLoading };
};