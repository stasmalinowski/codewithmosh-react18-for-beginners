import { HttpService } from "./http-service";

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

interface GameApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

class GameService{
  httpService: HttpService;
  
  constructor(){
    this.httpService = new HttpService("/games")
  }

  async getAll(): Promise<Game[]>{
    const response = await this.httpService.getAll<GameApiResponse>()
    return response.results
  }
}

export default new GameService()
