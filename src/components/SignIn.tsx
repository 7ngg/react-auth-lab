import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthHelper from "../services/auth";
import Input from "./Input";

const SignIn = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigateTo = useNavigate();

  const as = new AuthHelper();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
      alert("Check inputs");
      return;
    }

    try {
      const response = await as.Authenticate(username, password);
      localStorage.setItem("authResponse", JSON.stringify(response?.data));
      navigateTo("/Success");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col shadow w-[400px] h-[500px] rounded-md items-center justify-center">
      <h1 className="text-2xl">Sign In</h1>
      <form method="POST" onSubmit={submitHandler} className="w-full p-5">
        <Input
          inputRef={usernameRef}
          type="text"
          placeholder="emilys"
          text="Username"
        />
        <Input
          inputRef={passwordRef}
          type="password"
          placeholder="emilyspass"
          text="Password"
        />

        <button
          className="w-full h-[30px] rounded-md text-white bg-blue-500"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
