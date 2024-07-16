import apiClient from "./api-client";

interface User {
  id: number;
  name: string;
}

class UserService {
  getAllUsers() {
    const controller = new AbortController();
    const request = apiClient.get("/users", {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() }
  }

  deleteUser(user: User) {
    const controller = new AbortController();
    const request = apiClient.delete("/users/" + user.id, {
      signal: controller.signal
    })

    return { request, cancl: () => controller.abort() }
  }
}

export default new UserService();

export type { User };
