"use client";

import styles from "./loginForm.module.css";

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
