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

const UsersPage = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const fetchedData = await fetchUserData();
        setUserData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error); // Handle errors appropriately (e.g., display error message)
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <Dashboard>
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
        <p>loading...</p>
      ) : (
        <DataTable data={userData} columns={columns} />
      )}
    </Dashboard>
  );
};

export default UsersPage;
