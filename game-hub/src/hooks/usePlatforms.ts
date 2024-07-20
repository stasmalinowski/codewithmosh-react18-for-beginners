import { Platform } from "../services/http-service";
import { useEntityFetch } from "./useEntityFetch";
import platformsStatic from "../data/platformsStatic";

export const usePlatforms = ( useStatic?: boolean ) => {
  if (useStatic) {
    return { platforms: platformsStatic, error: "", isLoading: false };
  }
  const { entities, error, isLoading } = useEntityFetch<Platform>("/platforms/lists/parents")
  return { platforms: entities, error, isLoading };
};