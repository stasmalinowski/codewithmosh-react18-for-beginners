import { SiGnubash } from "react-icons/si";
import apiClient from "./api-client";

export interface EntityFetchService<T> {
  getAll: (params?: object) => Promise<T[]>;
  abort: () => void;
}

export class HttpService {
  endpoint: string;
  private controller: AbortController;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.controller = new AbortController();
  }

  async getAll<T>(params?: object): Promise<T> {
    const response = await apiClient.get<T>(this.endpoint, {
      signal: this.controller.signal,
      params: params ? params : undefined
    });

    return response.data;
  }

  abort() {
    this.controller.abort();
  }
}
