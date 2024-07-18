import { EntityFetchService, HttpService } from "./http-service";

export interface Genre{
  id: number,
  name: string,
  slug: string,
}

interface GenreApiResponse{
  results: Genre[]
}

class GenreService implements EntityFetchService<Genre>{
  httpService: HttpService;

  constructor(){
    this.httpService = new HttpService("/genres")
  }

  async getAll(): Promise<Genre[]>{
    const response = await this.httpService.getAll<GenreApiResponse>()
    return response.results
  }

  abort(){
    this.httpService.abort()
  }
}

export default new GenreService()