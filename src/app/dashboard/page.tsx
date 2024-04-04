"use client";

import Layout from "@/components/Layout";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();

  // Redirect to the /dashboard/users path on component mount
  useEffect(() => {
    router.push("/dashboard/users");
  }, []);
  return (
    <Layout>
      <h1>Dashboard</h1>
    </Layout>
  );
};

export default Dashboard;
