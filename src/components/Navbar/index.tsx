"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosClose, IoIosSearch } from "react-icons/io";
import DropdownMenuIcon from "../../../public/icons/dropdown-menu-icon";
import HamburgerIcon from "../../../public/icons/hamburger-icon";
import NotificationsIcon from "../../../public/icons/notifications-icon";
import SearchIcon from "../../../public/icons/search-icon";
import styles from "./index.module.scss";
import { useSidebar } from "@/context/SidebarContext";

const Navbar = () => {
  // Sidebar context
  const { toggleSidebar, isSidebarOpen } = useSidebar();

  return (
    <nav className={styles.nav}>
      <button className={styles.hamburger} onClick={toggleSidebar}>
        {!isSidebarOpen ? <HamburgerIcon /> : <IoIosClose size={40} />}
      </button>
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
        <span>
          <IoIosSearch />
        </span>
        <p>Docs</p>
        <div className={styles["nav-user"]}>
          <div>
            <NotificationsIcon />
          </div>
          <div className={styles["nav-user__info"]}>
            <Image
              className={styles.avatar}
              src={"/avatar.svg"}
              alt="avatar"
              width={48}
              height={48}
            />
            <p>Adedeji</p>
            <DropdownMenuIcon />
            {/* <div className={styles["nav-user__info-dropdown"]}>
              <p>Adedeji</p>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
