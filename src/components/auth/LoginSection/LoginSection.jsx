"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { loginUser } from "@/services/connect.js";

import BaseInput from "@/components/common/BaseInput/BaseInput";
import BaseContainer from "@/components/common/BaseContainer/BaseContainer";
import LogRegButton from "@/components/common/LogRegButton/LogRegButton";
import Image from "next/image";
import Link from "next/link";

import logo from "/public/svg/tw-green-logo.svg";
import robot from "/public/images/auth/robot.png";

import style from "./LoginSection.module.css";

const LoginSection = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Заповніть дані");
    } else {
      const res = await loginUser({
        email: email,
        password: password,
      });
      console.log(res);
      setEmail("");
      setPassword("");
      router.replace("/home");
    }
  };

  return (
    <section className={style.login}>
      <BaseContainer>
        <div className={style.login_inner}>
          <form onSubmit={(e) => onSubmit(e)} className={style.login_data}>
            <Image src={logo} height={166} width={704} alt="logo" />

            <div className={style.login_data_form}>
              <div className={style.login_data_form_inputs}>
                <BaseInput
                  type="mail"
                  value={email}
                  changeValue={setEmail}
                  placeholder="Введіть пошту"
                />
                <BaseInput
                  type="password"
                  value={password}
                  changeValue={setPassword}
                  placeholder="Введіть пароль"
                />
              </div>
              <p className={style.login_data_form_forgotpassword}>
                забули пароль? - <Link href="#">змінити пароль</Link>
              </p>
            </div>

            <LogRegButton isLogin={true} />
          </form>

          <Image
            className={style.login_robot_img}
            src={robot}
            alt="robot image"
          />
        </div>
      </BaseContainer>
    </section>
  );
};

export default LoginSection;
