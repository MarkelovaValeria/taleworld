"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { registerUser } from "@/services/connect.js";

const RegistrationRolePage = () => {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password == passConfirm) {
      const res = await registerUser({
        name: name,
        surname: surname,
        email: email,
        password: password,
        role: role == "student" ? 1 : 0,
        language: language,
      });
      console.log(res);
      setName("");
      setSurname("");
      setEmail("");
      setPassword("");
      setLanguage("");
      setPassConfirm("");
    } else {
      alert("пароль не співпадає!");
    }
  };

  return (
    <div className="registration-page">
      <div className="main-container">
        <div className="registration-page__inner">
          <div className="registration-page_form-description">
            <img src="\SVG\TaleWorld-logo.svg" className="reg-log-page-logo" />
            <form
              className="registration-page__form"
              onSubmit={(e) => onSubmit(e)}
            >
              <div className="reg-inputs__full-name">
                <input
                  type="text"
                  placeholder="Введіть ім'я"
                  className="reg-log-page__form-input name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Введіть прізвище"
                  className="reg-log-page__form-input surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
              <div className="reg-inputs__other">
                <input
                  type="email"
                  placeholder="Введіть пошту"
                  className="reg-log-page__form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {role === "teacher" ? (
                  <select
                    name="select"
                    id=""
                    className="reg-log-page__form-input"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option value="">Оберіть мову викладання</option>
                    <option value="english">англійська</option>
                    <option value="ukrainian">українська</option>
                  </select>
                ) : null}
                <input
                  type="password"
                  placeholder="Введіть пароль"
                  className="reg-log-page__form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Введіть повторно пароль"
                  className="reg-log-page__form-input"
                  value={passConfirm}
                  onChange={(e) => setPassConfirm(e.target.value)}
                />
              </div>

              <button type="submit" className="reg-form-btn">
                Зареєструватися
              </button>
            </form>
            <p className="reg-log-page__choise">
              Вже маєте профіль? -{" "}
              <Link href="/login" className="reg-log-page-link">
                Увійти
              </Link>
            </p>
          </div>
          <div className="registration-page_description">
            <p className="registration-page_description-text">
              <span>ПОГЛЯНЬ</span> що на тебе чекає
            </p>

            <div className="registration-page_description-image-content">
              <div className="registration-page_description-image"></div>
              <div className="registration-page_description-btns">
                <button className="registration-page_description-btns-btn"></button>
                <button className="registration-page_description-btns-btn"></button>
                <button className="registration-page_description-btns-btn"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationRolePage;
