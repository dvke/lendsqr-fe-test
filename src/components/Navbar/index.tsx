import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import SearchIcon from "../../../public/icons/search-icon";
import NotificationsIcon from "../../../public/icons/notifications-icon";
import DropdownMenuIcon from "../../../public/icons/dropdown-menu-icon";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Link href={"/"}>
          <Image
            className={styles.logo}
            src={"/logo.svg"}
            alt="logo"
            width={144.8}
            height={30}
          />
        </Link>
        <div className={styles["search-box"]}>
          <input type="search" placeholder="Search for anything" />
          <span>
            <SearchIcon />
          </span>
        </div>
      </div>

      <div className={styles["right"]}>
        <p>Docs</p>
        <div className={styles["nav-user"]}>
          <div>
            <NotificationsIcon />
          </div>
          <div className={styles["nav-user__info"]}>
            <Image src={"/avatar.svg"} alt="avatar" width={48} height={48} />
            <p>Adedeji</p>
            <DropdownMenuIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
