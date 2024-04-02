import React from "react";
import Dashboard from "../page";
import styles from "./page.module.scss";
import UsersPageIcon from "../../../../public/icons/users-page-icon";
import ActiveUsersIcon from "../../../../public/icons/active-users-icon";
import UserLoansIcon from "../../../../public/icons/users-loans-icon";
import UsersSavingsIcon from "../../../../public/icons/users-savings-icon";
import DataTable from "@/components/DataTable";
import data from "@/utils/data";
import { columns } from "@/components/DataTable/columns";

const UsersPage = () => {
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
      <DataTable data={data} columns={columns} />
    </Dashboard>
  );
};

export default UsersPage;
