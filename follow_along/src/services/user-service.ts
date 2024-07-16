import apiClient from "./api-client";
import HttpService from "./http-service";

interface User {
  id: number;
  name: string;
}

export default new HttpService("/users")

export type { User } 