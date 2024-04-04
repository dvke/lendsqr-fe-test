"use client";

import data from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLongLeft } from "react-icons/hi2";
import EmptyStarIcon from "../../../../../public/icons/empty-star-icon";
import FullStarIcon from "../../../../../public/icons/full-star-icon";
import Dashboard from "../../page";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import { UserData } from "@/types/types";

interface Props {
  params: { id: string };
}

const UserDetails = ({ params }: Props) => {
  const [userData, setUserData] = useState<UserData | undefined>(undefined);
  const [usersData, setUsersData] = useState<UserData[]>([]);
  // const user = data.find((userObject) => userObject.id === userId);
  useEffect(() => {
    const storedData = localStorage.getItem("usersData");
    if (storedData) {
      setUsersData(JSON.parse(storedData));
      // Parse JSON string back to object
    }
  }, []);

  console.log(userData);

  useEffect(() => {
    const d = usersData.find((object) => object.id.toString() === params.id);

    setUserData(d);
  }, [usersData]);

  return (
    <Dashboard>
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
        {/* User info */}
        {
          <>
            <div className={styles["user-card"]}>
              <div className={styles["user-card__info"]}>
                <Image
                  src={"/avatar.svg"}
                  alt="avatar"
                  width={100}
                  height={100}
                />
                <div className={styles["user-card__info__details"]}>
                  <div className={styles["user-card__info__details__id"]}>
                    <p>{userData?.userName}</p>
                    <p>id</p>
                  </div>
                  <div className={styles["user-card__info__details__tier"]}>
                    <p>User’s Tier</p>
                    <div>
                      <FullStarIcon />
                      <EmptyStarIcon />
                      <EmptyStarIcon />
                    </div>
                  </div>
                  <div className={styles["user-card__info__details__account"]}>
                    <p>₦{userData?.bankDetails.balance.toLocaleString()}</p>
                    <p>Bank Account/Bank Name</p>
                  </div>
                </div>
              </div>
              {/* Tabw */}
              <div className={styles.tabs}>
                <button>General Details</button>
                <button>Documents</button>
                <button>Bank Details</button>
                <button>Loans</button>
                <button>Savings</button>
                <button>App and System</button>
              </div>
            </div>
            {/* Details card */}
            <div className={styles["details-card"]}>
              <div>
                <p>Personal Information</p>
                <div>
                  <div>
                    <p>full Name</p>
                    <p>{userData?.userName}</p>
                  </div>
                  <div>
                    <p>Phone Number</p>
                    <p>{userData?.phoneNumber}</p>
                  </div>
                  <div>
                    <p>Email Address</p>
                    <p>{userData?.email}</p>
                  </div>
                  <div>
                    <p>Bvn</p>
                    <p>{userData?.bvn}</p>
                  </div>
                  <div>
                    <p>Gender</p>
                    <p>{userData?.gender}</p>
                  </div>
                  <div>
                    <p>Marital status</p>
                    <p>{userData?.maritalStatus}</p>
                  </div>
                  <div>
                    <p>Children</p>
                    <p>{userData?.numberOfChildren}</p>
                  </div>
                  <div>
                    <p>Type of residence</p>
                    <p>Home</p>
                  </div>
                </div>
              </div>
              <div>
                <p>Education and Employment</p>
                <div>
                  <div>
                    <p>level of education</p>
                    <p>{userData?.levelOfEducation}</p>
                  </div>
                  <div>
                    <p>employment status</p>
                    <p>{userData?.employmentDetails.status}</p>
                  </div>
                  <div>
                    <p>sector of employment</p>
                    <p>{userData?.employmentDetails.sector}</p>
                  </div>
                  <div>
                    <p>Duration of employment</p>
                    <p>{userData?.employmentDetails.duration} years</p>
                  </div>
                  <div>
                    <p>office email</p>
                    <p>{userData?.employmentDetails.email}</p>
                  </div>
                  <div>
                    <p>Monthly income</p>
                    <p>₦{userData?.employmentDetails.income}</p>
                  </div>
                  <div>
                    <p>loan repayment</p>
                    <p>₦{userData?.employmentDetails.status}</p>
                  </div>
                </div>
              </div>
              <div>
                <p>Socials</p>
                <div>
                  <div>
                    <p>Twitter</p>
                    <p>{userData?.socials.twitter}</p>
                  </div>
                  <div>
                    <p>Facebook</p>
                    <p>{userData?.socials.facebook}</p>
                  </div>
                  <div>
                    <p>Instagram</p>
                    <p>{userData?.socials.instagram}</p>
                  </div>
                </div>
              </div>
              <div>
                <p>Guarantor</p>
                <div>
                  <div>
                    <p>full Name</p>
                    <p>{userData?.guarantor.fullName}</p>
                  </div>
                  <div>
                    <p>Phone Number</p>
                    <p>{userData?.guarantor.phone}</p>
                  </div>
                  <div>
                    <p>Email Address</p>
                    <p>{userData?.guarantor.email}</p>
                  </div>
                  <div>
                    <p>Relationship</p>
                    <p>{userData?.guarantor.relationship}</p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <p>full Name</p>
                    <p>{userData?.guarantor.fullName}</p>
                  </div>
                  <div>
                    <p>Phone Number</p>
                    <p>{userData?.guarantor.fullName}</p>
                  </div>
                  <div>
                    <p>Email Address</p>
                    <p>{userData?.guarantor.fullName}</p>
                  </div>
                  <div>
                    <p>Relationship</p>
                    <p>{userData?.guarantor.fullName}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      </section>
    </Dashboard>
  );
};

export default UserDetails;
