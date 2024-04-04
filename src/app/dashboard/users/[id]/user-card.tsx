import { CardProps } from "@/types/types";
import Image from "next/image";
import EmptyStarIcon from "../../../../../public/icons/empty-star-icon";
import FullStarIcon from "../../../../../public/icons/full-star-icon";
import styles from "./user-card.module.scss";

const UserCard = ({ userData }: CardProps) => {
  return (
    <div className={styles["user-card"]}>
      <div className={styles["user-card__info"]}>
        <Image src={"/avatar.svg"} alt="avatar" width={100} height={100} />
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
  );
};

export default UserCard;
