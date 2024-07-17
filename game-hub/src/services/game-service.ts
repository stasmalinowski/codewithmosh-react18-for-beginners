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
  rating: number;
  rating_top: number;
  ratings_count: number;
  platforms: { platform: Platform; releasedAt: string; requirements: any };
  parent_platforms: {platform: Platform}[]
}

interface GameApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

class GameService{
  async getAll(): Promise<Game[]>{
    const response = await apiClient
      .get<GameApiResponse>("/games"); 

    return response.data.results
  }
}

export default new GameService()
