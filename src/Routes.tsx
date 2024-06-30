import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

let Routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
];

export default Routes;
