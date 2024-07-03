import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Success = () => {
  const navigateTo = useNavigate();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const data: string | null = localStorage.getItem("authResponse");

    if (!data) {
      alert("No saved data");
      navigateTo("/signin");
      return;
    }

    const dataJson = JSON.parse(data);
    setToken(dataJson.token);
  });

  const signOutHandler = () => {
    localStorage.removeItem("authResponse");
  };

  return (
    <div className="w-[400px] h-[500px] shadow rounded-md flex flex-col justify-between">
      <div className="p-4 flex flex-col overflow-hidden text-ellipsis break-words">
        <h1 className="text-4xl self-center">Success</h1>
        <p className="shadow-inner rounded-md p-2">{token}</p>
      </div>
      <div className="p-4 w-full flex items-center">
        <Link
          to={"/"}
          className="bg-blue-500 rounded-md w-full flex items-center justify-center text-white h-[30px]"
          onClick={signOutHandler}
        >
          Sign out
        </Link>
      </div>
    </div>
  );
};

export default Success;
