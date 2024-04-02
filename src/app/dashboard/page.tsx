import Layout from "@/components/Layout";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Dashboard = ({ children }: Props) => {
  return <Layout>{children}</Layout>;
};

export default Dashboard;
