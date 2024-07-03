import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Success from "./components/success";

const success = {
  path: "Success",
  element: <Success />,
};

let Routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/SignIn",
        element: <SignIn />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path: "Success",
        element: <Success />,
      },
    ],
  },
];

export default Routes;
