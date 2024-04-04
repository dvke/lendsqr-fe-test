"use client";

import data from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLongLeft } from "react-icons/hi2";
import EmptyStarIcon from "../../../../../public/icons/empty-star-icon";
import FullStarIcon from "../../../../../public/icons/full-star-icon";
import Dashboard from "../../page";
import styles from "./page.module.scss";

interface Props {
  params: { id: string };
}

const UserDetails = ({ params }: Props) => {
  const userId = parseInt(params.id);
  // const user = data.find((userObject) => userObject.id === userId);
  // console.log(user);
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
        <div className={styles["user-card"]}>
          <div className={styles["user-card__info"]}>
            <Image src={"/avatar.svg"} alt="avatar" width={100} height={100} />
            <div className={styles["user-card__info__details"]}>
              <div className={styles["user-card__info__details__id"]}>
                <p>Full Name</p>
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
                <p>Balance</p>
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
                <p>Uchenna Obiekwe</p>
              </div>
              <div>
                <p>Phone Number</p>
                <p>08023621199</p>
              </div>
              <div>
                <p>Email Address</p>
                <p>uobiekwe@lendsqr.com</p>
              </div>
              <div>
                <p>Bvn</p>
                <p>00000000000</p>
              </div>
              <div>
                <p>Gender</p>
                <p>Male</p>
              </div>
              <div>
                <p>Marital status</p>
                <p>Single</p>
              </div>
              <div>
                <p>Children</p>
                <p>None</p>
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
                <p>B.Sc</p>
              </div>
              <div>
                <p>employment status</p>
                <p>Employed</p>
              </div>
              <div>
                <p>sector of employment</p>
                <p>FinTech</p>
              </div>
              <div>
                <p>Duration of employment</p>
                <p>2 Years</p>
              </div>
              <div>
                <p>office email</p>
                <p>uobiekwe@lendsqe.com</p>
              </div>
              <div>
                <p>Monthly income</p>
                <p>N400,000</p>
              </div>
              <div>
                <p>loan repayment</p>
                <p>N40,000</p>
              </div>
            </div>
          </div>
          <div>
            <p>Socials</p>
            <div>
              <div>
                <p>Twitter</p>
                <p>@u_obiekwe</p>
              </div>
              <div>
                <p>Facebook</p>
                <p>Uche Obiekwe</p>
              </div>
              <div>
                <p>Instagram</p>
                <p>@u_obiekwe</p>
              </div>
            </div>
          </div>
          <div>
            <p>Guarantor</p>
            <div>
              <div>
                <p>full Name</p>
                <p>Desmond Obiekwe</p>
              </div>
              <div>
                <p>Phone Number</p>
                <p>08012345678</p>
              </div>
              <div>
                <p>Email Address</p>
                <p>dobiekwe@pr.com</p>
              </div>
              <div>
                <p>Relationship</p>
                <p>Brother</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <p>full Name</p>
                <p>Desmond Obiekwe</p>
              </div>
              <div>
                <p>Phone Number</p>
                <p>08012345678</p>
              </div>
              <div>
                <p>Email Address</p>
                <p>dobiekwe@pr.com</p>
              </div>
              <div>
                <p>Relationship</p>
                <p>Brother</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Dashboard>
  );
};

export default UserDetails;
