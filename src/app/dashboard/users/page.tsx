"use client";
import React, { useEffect, useState } from "react";
import Dashboard from "../page";
import styles from "./page.module.scss";
import UsersPageIcon from "../../../../public/icons/users-page-icon";
import ActiveUsersIcon from "../../../../public/icons/active-users-icon";
import UserLoansIcon from "../../../../public/icons/users-loans-icon";
import UsersSavingsIcon from "../../../../public/icons/users-savings-icon";
import DataTable from "@/components/DataTable";
import data, { fetchUserData } from "@/utils/data";
import { columns } from "@/components/DataTable/columns";
import { UserData } from "@/types/types";
import { ClockLoader, ScaleLoader } from "react-spinners";
import Layout from "@/components/Layout";

const UsersPage = () => {
  const [usersData, setUsersData] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    // Improve performance with caching
    const cachedData = localStorage.getItem("usersData");
    if (cachedData) {
      try {
        const parsedData = JSON.parse(cachedData); // Parse JSON string
        setUsersData(parsedData);
        setIsLoading(false); // Data already loaded from cache
      } catch (error) {
        console.error("Error parsing cached data:", error);
        fetchData(); // Fallback to fetching data
      }
    } else {
      fetchData(); // No cached data, fetch data
    }
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const fetchedData = await fetchUserData();
      setUsersData(fetchedData);
      localStorage.setItem("usersData", JSON.stringify(fetchedData)); // Store data in local storage
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error); // Handle errors
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Layout>
      <h1 className={styles.header}>Users</h1>
      <div className={styles.summary}>
        <div className={styles["summary-card"]}>
          <UsersPageIcon />
          <p className={styles["summary-card__description"]}>Users</p>
          <p className={styles["summary-card__total"]}>2,453</p>
        </div>

        <div className={styles["summary-card"]}>
          <ActiveUsersIcon />
          <p className={styles["summary-card__description"]}>Active Users</p>
          <p className={styles["summary-card__total"]}>2,453</p>
        </div>

        <div className={styles["summary-card"]}>
          <UserLoansIcon />
          <p className={styles["summary-card__description"]}>
            Users with Loans
          </p>
          <p className={styles["summary-card__total"]}>12,453</p>
        </div>

        <div className={styles["summary-card"]}>
          <UsersSavingsIcon />
          <p className={styles["summary-card__description"]}>
            Users with Savings
          </p>
          <p className={styles["summary-card__total"]}>102,453</p>
        </div>
      </div>
      {isLoading ? (
        <div className={styles.loading}>
          <ClockLoader color={"#39cdcc"} />
        </div>
      ) : (
        <DataTable data={usersData} columns={columns} />
      )}
    </Layout>
  );
};

export default UsersPage;
