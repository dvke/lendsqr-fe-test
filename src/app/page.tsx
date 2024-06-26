import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import styles from "./page.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Lendsqr-fe-test",
};

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
        <LoginForm />
      </div>
    </section>
  );
}
