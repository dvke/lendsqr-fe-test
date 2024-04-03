import Link from "next/link";
import { HiArrowLongLeft } from "react-icons/hi2";
import Dashboard from "../../page";
import styles from "./page.module.scss";

const UserDetails = () => {
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
      </section>
    </Dashboard>
  );
};

export default UserDetails;
