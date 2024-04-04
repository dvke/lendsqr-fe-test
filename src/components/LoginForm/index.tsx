"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";
import { PulseLoader } from "react-spinners";

interface ValidationError {
  email?: string;
  password?: string;
}

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleShow = () => {
    setShow(!show);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    if (email === "" || password.length < 8) {
      setError(true);
      return;
    }
    setLoading(true);
    router.push("/dashboard/users");
  };
  return (
    <div className={styles["form-container"]}>
      <h1>Welcome!</h1>
      <p className={styles.instruction}>Enter details to login.</p>

      <form onSubmit={handleSubmit}>
        <div className={styles["form-inputs"]}>
          <div className={styles["email-input"]}>
            <input
              type="email"
              value={email}
              onChange={(e) => handleEmail(e)}
              aria-describedby="email-error" // For accessibility (optional)
              placeholder="Email"
              required
            />
          </div>
          <div className={styles["password-input"]}>
            <input
              type="password"
              value={password}
              onChange={(e) => handlePassword(e)}
              aria-describedby="password-error" // For accessibility (optional)
              placeholder="Password"
              required
            />
            <div className={styles.show}>SHOW</div>
          </div>
          <p>FORGOT PASSWORD?</p>
        </div>
        {error && <p className={styles.error}>Wrong login credentials</p>}
        <button className={styles["login-btn"]} type="submit">
          {!loading ? "LOG IN" : <PulseLoader color="white" />}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
