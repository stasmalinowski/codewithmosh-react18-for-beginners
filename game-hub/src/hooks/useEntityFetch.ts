import { useState, useEffect } from "react";
import { HttpService } from "../services/http-service";

export function useEntityFetch<Entity>(
  endpoint: string,
  deps?: any[],
  params?: object
): { entities: Entity[]; error: string; isLoading: boolean } {
  const [entities, setEntities] = useState<Entity[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const service = new HttpService(endpoint)
  
  useEffect(() => {
    setIsLoading(true);
    service
      .getAll<Entity>(params)
      .then((e) => {
        setEntities(e);
        setError("");
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, deps ? [...deps] : []);

  return { entities, error, isLoading };
}
