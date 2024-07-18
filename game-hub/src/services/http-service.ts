import apiClient from "./api-client";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: Date;
  background_image: string;
  metacritic: number;
  platforms: { platform: Platform; releasedAt: string; requirements: any };
  parent_platforms: {platform: Platform}[]
}

export interface Genre{
  id: number,
  name: string,
  slug: string,
  image_background: string
}

interface ApiResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

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

  async getAll<T>(params?: object): Promise<T[]> {
    const response = await apiClient.get<ApiResponse<T>>(this.endpoint, {
      signal: this.controller.signal,
      params: params ? params : undefined
    });

    return response.data.results;
  }

  abort() {
    this.controller.abort();
  }
}
