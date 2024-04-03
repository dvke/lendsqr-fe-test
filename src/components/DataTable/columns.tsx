"use client";

import { ColumnDef } from "@tanstack/react-table";
import styles from "./columns.module.scss";
// import ActionBtn from "./action-btn";
import { UserData } from "@/types/types";
import { FiMoreVertical } from "react-icons/fi";
import "./columns.module.scss";

enum Status {
  Pending = "pending",
  Active = "active",
  Inactive = "inactive",
  Blacklisted = "blacklisted",
}

export const columns: ColumnDef<UserData>[] = [
  {
    accessorKey: "organization",
    header: "Organization",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "dateJoined",
    header: "Date Joined",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const data = row.original;

      return (
        <span
          className={`${styles.status} ${
            data.status.toLowerCase() === Status.Active
              ? styles["status__active"]
              : data.status.toLowerCase() === Status.Blacklisted
              ? styles["status__blacklisted"]
              : data.status.toLowerCase() === Status.Inactive
              ? styles["status__inactive"]
              : styles["status__pending"]
          }`}
        >
          {data.status}
        </span>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const data = row.original;

      return <FiMoreVertical className={styles["more-icon"]} />;
    },
  },
];
