import { EntityFetchService, HttpService } from "./http-service";

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

class GameService implements EntityFetchService<Game>{
  httpService: HttpService;
  
  constructor(){
    this.httpService = new HttpService("/games")
  }

  async getAll(params?: object): Promise<Game[]>{
    const response = await this.httpService.getAll<GameApiResponse>(params ? params : {})
    return response.results
  }

  abort(){
    this.httpService.abort()
  }
}

export default new GameService()
