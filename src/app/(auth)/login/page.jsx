"use client";
import Link from "next/link";
import { loginUser } from "@/services/connect.js";
import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser({
      email: email,
      password: password,
    });
    console.log(res);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-page">
      <div className="main-container">
        <div className="login-page__inner">
          <img src="\SVG\TaleWorld-logo.svg" className="reg-log-page-logo" />
          <form className="login-page__form" onSubmit={(e) => onSubmit(e)}>
            <div className="login-page__form-inputs">
              <input
                type="email"
                placeholder="Введіть пошту"
                className="reg-log-page__form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Введіть пароль"
                className="reg-log-page__form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Увійти</button>
          </form>
          <div className="reg-log-page__choise">
            <p>
              Забули пароль? -{" "}
              <Link href="#" className="reg-log-page-link">
                Змінити пароль
              </Link>
            </p>
            <p>
              Ще не маєте профілю? -{" "}
              <Link href="/registration" className="reg-log-page-link">
                Зареєструватися
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
