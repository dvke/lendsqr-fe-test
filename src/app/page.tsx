import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <section className={styles.login}>
      <Image
        className={styles.logo}
        src={"/logo.svg"}
        alt="logo"
        width={173.76}
        height={36}
      />
      <div className={styles.container}>
        <div>
          <Image
            src={"/pablo-sign-in.png"}
            alt="sign-in"
            width={600}
            height={337.57}
          />
        </div>
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
      </div>
    </section>
  );
}
