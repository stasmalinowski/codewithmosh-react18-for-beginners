import apiClient from "./api-client";

interface Entity{
  id: number
}

class HttpService {
  endpoint: string;
  
  constructor(endpoint: string){
    this.endpoint = endpoint
  }

  getAll<T extends Entity>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() }
  }

  delete<T extends Entity>(entity: Entity) {
    const controller = new AbortController();
    const request = apiClient.delete(`${this.endpoint}/${entity.id}`, {
      signal: controller.signal
    })

    return { request, cancel: () => controller.abort() }
  }
}

export default HttpService 

export type { Entity };
