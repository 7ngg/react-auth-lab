import { FormEvent, useRef } from "react";
import AuthHelper from "../services/auth";
import Input from "./Input";

function SignUp() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const as = new AuthHelper();
    event.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const confirm = confirmRef.current?.value;

    if (username && password && confirm && password === confirm) {
      as.SignUp(username, password);
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <div className="flex flex-col shadow-md w-[400px] h-[500px] rounded-md items-center justify-center">
      <h1 className="text-2xl">Sign Up</h1>
      <form method="POST" onSubmit={handleSubmit} className="w-full p-5">
        <Input
          inputRef={usernameRef}
          type="username"
          placeholder="Username"
          text="Username"
        />
        <Input
          inputRef={passwordRef}
          type="password"
          placeholder="Password"
          text="Password"
        />
        <Input
          inputRef={confirmRef}
          type="password"
          placeholder="Confirm password"
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
