"use client";

import { UserData } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import Dashboard from "../../page";
import styles from "./page.module.scss";
import UserCard from "./user-card";
import DetailsCard from "./details-card";
import { ClockLoader } from "react-spinners";
import Layout from "@/components/Layout";

interface Props {
  params: { id: string };
}

const UserDetails = ({ params }: Props) => {
  const [userData, setUserData] = useState<UserData | undefined>(undefined);
  const [usersData, setUsersData] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  // const user = data.find((userObject) => userObject.id === userId);
  useEffect(() => {
    setIsLoading(true);
    const storedData = localStorage.getItem("usersData");
    if (storedData) {
      setUsersData(JSON.parse(storedData));
      setIsLoading(false);

      // Parse JSON string back to object
    }
  }, []);

  console.log(userData);

  useEffect(() => {
    const d = usersData.find((object) => object.id.toString() === params.id);

    setUserData(d);
  }, [usersData, params.id]);

  return (
    <Layout>
      <section className={styles["user-details"]}>
        <Link href={"/dashboard/users"}>
          <HiArrowLongLeft />
          Back to Users
        </Link>
        <div className={styles["user-title"]}>
          <h1>User Details</h1>
          <div className={styles["user-actions"]}>
            <button className={styles["user-action-blacklist"]}>
              BLACKLIST USER
            </button>
            <button className={styles["user-action-activate"]}>
              ACTIVATE USER
            </button>
          </div>
        </div>
        {isLoading ? (
          <div className={styles.loading}>
            <ClockLoader color={"#39cdcc"} />
          </div>
        ) : (
          <>
            {/* User info */}
            <UserCard userData={userData} />
            {/* Details card */}
            <DetailsCard userData={userData} />
          </>
        )}
      </section>
    </Layout>
  );
};

export default UserDetails;
