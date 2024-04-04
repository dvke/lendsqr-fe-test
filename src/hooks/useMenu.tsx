import { UserData } from "@/types/types";
import { useState } from "react";

export const UseMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const toggleMenu = (clickedUserData: UserData) => {
    setMenuIsOpen(!menuIsOpen);
    setUserData(clickedUserData);
    localStorage.setItem("userData", JSON.stringify(clickedUserData));
  };

  return { menuIsOpen, toggleMenu, userData };
};
