import React, { ReactNode } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <section>
      <Navbar />
      <div>
        <Sidebar />
        <main>{children}</main>
      </div>
    </section>
  );
};

export default Layout;
