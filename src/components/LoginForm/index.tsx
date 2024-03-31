import React from "react";
import styles from "./index.module.scss";

const LoginForm = () => {
  return (
    <div className={styles["form-container"]}>
      <h1>Welcome!</h1>
      <p className={styles.instruction}>Enter details to login.</p>

      <form action="">
        <div className={styles["form-inputs"]}>
          <div className={styles["email-input"]}>
            <input type="email" />
            <label>Email</label>
          </div>
          <div className={styles["password-input"]}>
            <input type="password" />
            <label>Password</label>
            <div className={styles.show}>SHOW</div>
          </div>
          <p>FORGOT PASSWORD?</p>
        </div>
        <button className={styles["login-btn"]}>LOG IN</button>
      </form>
    </div>
  );
};

export default LoginForm;
