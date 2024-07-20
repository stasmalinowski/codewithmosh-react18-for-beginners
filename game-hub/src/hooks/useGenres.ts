import { Genre } from "../services/http-service";
import { useEntityFetch } from "./useEntityFetch";
import genresStatic from "../data/genresStatic";

export const useGenres = ( useStatic?: boolean ) => {
  if (useStatic) {
    return {genres: genresStatic, error: "", isLoading: false}
  }
  const { entities, error, isLoading } = useEntityFetch<Genre>("/genres")
  return { genres: entities, error, isLoading };
};