import apiClient from "./api-client";

class HttpService{
  endpoint: string;

  constructor(endpoint: string){
    this.endpoint = endpoint;
  }

  async getAll<T>(): Promise<T>{
    const response = await apiClient
      .get<T>(this.endpoint); 

    return response.data
  }
}

export { HttpService }