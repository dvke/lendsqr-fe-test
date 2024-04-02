"use client";

import Link from "next/link";
import BadgePercentIcon from "../../../public/icons/badge-percent-icon";
import BriefcaseIcon from "../../../public/icons/briefcase-icon";
import BriefcaseIcon2 from "../../../public/icons/briefcase-icon-2";
import ChartBarIcon from "../../../public/icons/chart-bar-icon";
import ClipboardListIcon from "../../../public/icons/clipboard-list-icon";
import CoinsSolidIcon from "../../../public/icons/coins-solid-icon";
import DropdownIcon from "../../../public/icons/dropdown-icon";
import GalaxyIcon from "../../../public/icons/galaxy-icon";
import HandshakeRegularIcon from "../../../public/icons/handshake-regular-icon";
import HomeIcon from "../../../public/icons/home-icon";
import LoanRequestIcon from "../../../public/icons/loan-request-icon";
import PiggyBankIcon from "../../../public/icons/piggy-bank-icon";
import SackIcon from "../../../public/icons/sack-icon";
import SavingsProductsIcon from "../../../public/icons/savings-products-icon";
import ScrollIcon from "../../../public/icons/scroll-icon";
import SlidersIcon from "../../../public/icons/sliders-icon";
import TransactionIcon from "../../../public/icons/transaction-icon";
import UserCheckIcon from "../../../public/icons/user-check-icon";
import UserCogIcon from "../../../public/icons/user-cog-icon";
import UserFriendsIcon from "../../../public/icons/user-friends-icon";
import UserTimesIcon from "../../../public/icons/user-times-icon";
import UsersIcon from "../../../public/icons/users-icon";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";
import TireIcon from "../../../public/icons/tire-icon";
import SignOutIcon from "../../../public/icons/sign-out-icon";
import { useSidebar } from "@/context/SidebarContext";

const Sidebar = () => {
  // const pathname = usePathname();
  const { isSidebarOpen } = useSidebar();

  return (
    <aside
      className={`${styles.container} ${isSidebarOpen ? styles.open : ""}`}
    >
      <button className={styles["org-switch"]}>
        <BriefcaseIcon />
        <span>Switch Organization</span>
        <DropdownIcon />
      </button>
      <div className={styles.home}>
        <HomeIcon />
        <p>Dashboard</p>
      </div>
      <div className={styles.section}>
        <p className={styles["section-name"]}>CUSTOMERS</p>
        <ul>
          <li
            className={`${styles["list-item"]} ${styles["list-item--active"]}`}
          >
            <Link href={"/dashboard/users"}>
              <UserFriendsIcon />
              Users
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link href={"/dashboard"}>
              <UsersIcon />
              Guarantors
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link href={"/dashboard"}>
              <SackIcon />
              Loans
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link href={"/dashboard"}>
              <HandshakeRegularIcon />
              Decision Models
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link href={"/dashboard"}>
              <PiggyBankIcon />
              Savings
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link href={"/dashboard"}>
              <LoanRequestIcon />
              Loan Requests
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link href={"/dashboard"}>
              <UserCheckIcon />
              Whitelist
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link href={"/dashboard"}>
              <UserTimesIcon />
              Karma
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <p className={styles["section-name"]}>BUSINESSES</p>
        <ul>
          <li className={styles["list-item"]}>
            <Link href={"/dashboard"}>
              <BriefcaseIcon2 />
              Organization
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link href={"/dashboard"}>
              <LoanRequestIcon />
              Loan Products
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link href={"/dashboard"}>
              <SavingsProductsIcon />
              Savings Products
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link href={"/dashboard"}>
              <CoinsSolidIcon />
              Fees and Charges
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link href={"/dashboard"}>
              <TransactionIcon />
              Transactions
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link href={"/dashboard"}>
              <GalaxyIcon />
              Services
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link href={"/dashboard"}>
              <UserCogIcon />
              Service Account
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link href={"/dashboard"}>
              <ScrollIcon />
              Settlements
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link href={"/dashboard"}>
              <ChartBarIcon />
              Reports
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <p className={styles["section-name"]}>SETTINGS</p>
        <ul>
          <li className={styles["list-item"]}>
            <Link href={"/dashboard"}>
              <SlidersIcon />
              <span>Preferences</span>
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link href={"/dashboard"}>
              <BadgePercentIcon />
              Fees and Pricing
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link href={"/dashboard"}>
              <ClipboardListIcon />
              Audit Logs
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link href={"/dashboard"}>
              <TireIcon />
              System Messages
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footer}>
        <button>
          <SignOutIcon />
          Logout
        </button>
        <p className={styles["version-number"]}>v1.2.0</p>
      </div>
    </aside>
  );
};

export default Sidebar;
