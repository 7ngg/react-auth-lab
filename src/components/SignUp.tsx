import { FormEvent, useRef } from "react";
import AuthHelper from "../services/auth";

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

    console.log(username, password, confirm);

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

interface InputProps {
  type: string;
  placeholder: string;
  text: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

const Input = ({ type, placeholder, text, inputRef }: InputProps) => {
  return (
    <div className="py-2 w-full">
      <h3>{text}</h3>
      <input
        ref={inputRef}
        className="w-full pl-2 py-1 shadow"
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default SignUp;
