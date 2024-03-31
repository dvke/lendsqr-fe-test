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
        <div className={styles["image-container"]}>
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
              <input type="email" placeholder="Email" />
              <span className={styles["password-input"]}>
                <input type="passoword" placeholder="Password" />
                <button className={styles.show}>SHOW</button>
              </span>
              <p>FORGOT PASSWORD?</p>
            </div>
            <button className={styles["login-btn"]}>LOG IN</button>
          </form>
        </div>
      </div>
    </section>
  );
}
