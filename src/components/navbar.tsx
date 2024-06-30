import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (props: any) => {
  const navigateTo = useNavigate();

  const [items, setItems] = useState([
    { id: 1, name: "SignIn" },
    { id: 2, name: "SignUp" },
  ]);

  return (
    <div className="pl-4 flex w-full h-[50px] shadow-md items-center">
      <a
        key={0}
        className="h-full flex items-center px-2 cursor-pointer hover:underline hover:bg-black hover:text-white"
        onClick={() => navigateTo(`${i.name.toLocaleLowerCase()}`)}
      >
        Home
      </a>
      {items.map((i) => (
        <a
          key={i.id}
          className="h-full flex items-center px-2 cursor-pointer hover:underline hover:bg-black hover:text-white"
          onClick={() => navigateTo(`${i.name.toLocaleLowerCase()}`)}
        >
          {i.name}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
