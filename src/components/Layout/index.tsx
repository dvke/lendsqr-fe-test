import React, { ReactNode } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import styles from "./index.module.scss";
import { SidebarProvider } from "@/context/SidebarContext";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <section className={styles.container}>
        <Navbar />
        <Sidebar />
        <main>{children}</main>
      </section>
    </SidebarProvider>
  );
};

export default Layout;
