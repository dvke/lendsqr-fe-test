import { IoIosArrowDown } from "react-icons/io";
import DatePickerIcon from "../../../public/icons/date-picker-icon";
import styles from "./filter.module.scss";

const Filter = () => {
  return (
    <form className={styles.form}>
      <label htmlFor="">
        Organization
        <span className={styles["form__input-box"]}>
          <input type="text" placeholder="Select" />
          <span className={styles["form-icon"]}>
            <IoIosArrowDown />
          </span>
        </span>
      </label>
      <label htmlFor="">
        Username
        <span className={styles["form__input-box"]}>
          <input type="text" placeholder="User" />
          <span className={styles["form-icon"]}>
            <IoIosArrowDown />
          </span>
        </span>
      </label>
      <label htmlFor="">
        Email
        <span className={styles["form__input-box"]}>
          <input type="text" placeholder="Email" />
          <span className={styles["form-icon"]}>
            <IoIosArrowDown />
          </span>
        </span>
      </label>
      <label htmlFor="">
        Date
        <span className={styles["form__input-box"]}>
          <input type="text" placeholder="Date" />
          <span className={styles["form-icon"]}>
            <DatePickerIcon />
          </span>
        </span>
      </label>
      <label htmlFor="">
        Phone Number
        <span className={styles["form__input-box"]}>
          <input type="text" placeholder="Phone Number" />
          <span className={styles["form-icon"]}>
            <IoIosArrowDown />
          </span>
        </span>
      </label>
      <label htmlFor="">
        Status
        <span className={styles["form__input-box"]}>
          <input type="text" placeholder="Select" />
          <span className={styles["form-icon"]}>
            <IoIosArrowDown />
          </span>
        </span>
      </label>
      <div className={styles["btn-group"]}>
        <button className={styles["btn-group__reset"]}>Reset</button>
        <button className={styles["btn-group__filter"]}>Filter</button>
      </div>
    </form>
  );
};

export default Filter;
