import axios from "axios";

export default class AuthHelper {
  SignUp(username: string, password: string) {
    console.log("This is auth");
    axios
      .post(
        "https://dummyjson.com/auth/login",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error signing up:", error);
      });
  }
}
