import axios, { AxiosResponse } from "axios";

export default class AuthHelper {
  async Authenticate(username: string, password: string): Promise<AxiosResponse | null> {
    const response = await axios.post(
      "https://dummyjson.com/auth/login",
      {
        username: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return response;
  }
}
