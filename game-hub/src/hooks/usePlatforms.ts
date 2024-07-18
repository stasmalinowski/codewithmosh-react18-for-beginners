import { Platform } from "../services/http-service";
import { useEntityFetch } from "./useEntityFetch";

export const usePlatforms = () => {
  const { entities, error, isLoading } = useEntityFetch<Platform>("/platforms/lists/parents")
  return { platforms: entities, error, isLoading };
};