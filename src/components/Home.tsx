import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="pt-10">
        <div className="flex flex-col items-center">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Home;
