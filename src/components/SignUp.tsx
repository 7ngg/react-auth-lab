import { FormEvent, useRef } from "react";
import { NavigationType, Outlet, useNavigate } from "react-router-dom";
import AuthHelper from "../services/auth";
import Input from "./Input";

function SignUp() {
  const navigateTo = useNavigate();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    const as = new AuthHelper();
    event.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const confirm = confirmRef.current?.value;

    if (username && password && confirm && password === confirm) {
      try {
        const response = await as.Authenticate(username, password);
        localStorage.setItem("authResponse", JSON.stringify(response?.data));
        navigateTo("/Success");
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="flex flex-col shadow w-[400px] h-[500px] rounded-md items-center justify-center">
      <h1 className="text-2xl">Sign Up</h1>
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
        <Input
          inputRef={confirmRef}
          type="password"
          placeholder="emilyspass"
          text="Confirm password"
        />

        <button
          className="w-full h-[30px] rounded-md text-white bg-blue-500"
          type="submit"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
