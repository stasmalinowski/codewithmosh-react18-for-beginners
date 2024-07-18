import { useState, useEffect } from "react";
import { EntityFetchService } from "../services/http-service";

export function useEntityFetch<Entity>(service: EntityFetchService<Entity>): {entities: Entity[], error: string, isLoading: boolean} {
  const [entities, setEntities] = useState<Entity[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    service.getAll()
      .then((e) => {
        setEntities(e);
        setError("");
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false)
      });
      return service.abort
  }, []);

  return { entities, error, isLoading };
};
