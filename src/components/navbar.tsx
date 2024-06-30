import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (props: any) => {
  const navigateTo = useNavigate();

  const [items, setItems] = useState([
    { id: 0, name: "Home" },
    { id: 1, name: "SignIn" },
    { id: 2, name: "SignUp" },
  ]);

  return (
    <div className="pl-4 flex w-full h-[50px] shadow-md items-center">
      {items.map((i) => (
        <a
          key={i.id}
          className="pr-2 cursor-pointer"
          onClick={() => navigateTo(`${i.name.toLocaleLowerCase()}`)}
        >
          {i.name}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
