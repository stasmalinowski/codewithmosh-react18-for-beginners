import { HttpService } from "./http-service";

export interface Genre{
  id: number,
  name: string,
  slug: string,
}

interface GenreApiResponse{
  results: Genre[]
}

class GenreService{
  httpService: HttpService;

  constructor(){
    this.httpService = new HttpService("/genres")
  }

  async getAll(): Promise<Genre[]>{
    const response = await this.httpService.getAll<GenreApiResponse>()
    return response.results
  }
}

export default new GenreService()