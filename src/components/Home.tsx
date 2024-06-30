import React from "react";
import Navbar from "./navbar";
import { Outlet, useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Home;
