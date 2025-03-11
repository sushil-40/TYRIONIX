import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
export const DefaultLayout = () => {
  return (
    <div className="default-layout">
      {/* navbar  */}
      <Header />
      <main className="main">
        <Outlet />
      </main>
      {/* content  */}

      {/* footer  */}
      <Footer />
    </div>
  );
};
