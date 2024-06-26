"use client";

// import { UserData } from "@/types/types";
import Link from "next/link";
import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbUserCheck, TbUserX } from "react-icons/tb";
import styles from "./action-menu.module.scss";
import { UserData } from "@/types/types";

type Props = {
  open: boolean;
  user: UserData;
};

// User data prop will be needed CRUD actions.
const ActionMenu = ({ open, user }: Props) => {
  //   const [currentUserId, setCurrentUserId] = useState<number | undefined>(undefined);

  //   const handleViewActions = (id: number) => {
  //     if (activeId === id) {
  //       setCurrentUserId(undefined);
  //     } else {
  //       setCurrentUserId(id);
  //     }
  //   };

  return (
    <div className={styles["action-menu"]}>
      {open && (
        // <ul key={user.id}>
        <ul>
          <li>
            <Link href={`/dashboard/users/${user.id}`}>
              <MdOutlineRemoveRedEye />
              View Details
            </Link>
          </li>
          <li>
            <TbUserX />
            Blacklist User
          </li>
          <li>
            <TbUserCheck />
            Activate User
          </li>
        </ul>
      )}
    </div>
  );
};

export default ActionMenu;
