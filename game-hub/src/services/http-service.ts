import apiClient from "./api-client";

export interface EntityFetchService<T>{
  getAll: () => Promise<T[]>
  abort: () => void
}

export class HttpService{
  endpoint: string;
  private controller: AbortController;

  constructor(endpoint: string){
    this.endpoint = endpoint;
    this.controller = new AbortController()
  }

  async getAll<T>(): Promise<T>{
    const response = await apiClient
      .get<T>(this.endpoint, {signal: this.controller.signal}); 

    return response.data
  }

  abort() {
    this.controller.abort()
  }
}