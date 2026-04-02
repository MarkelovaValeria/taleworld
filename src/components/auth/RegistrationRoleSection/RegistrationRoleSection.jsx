"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { registerUser } from "@/services/connect.js";

import BaseContainer from "@/components/common/BaseContainer/BaseContainer";
import Image from "next/image";
import LogRegButton from "@/components/common/LogRegButton/LogRegButton";
import BaseInput from "@/components/common/BaseInput/BaseInput";
import BaseSelect from "@/components/common/BaseSelect/BaseSelect";

import logo from "/public/svg/tw-green-logo.svg";

import style from "./RegistrationRoleSection.module.css";

const RegistrationRoleSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [language, setLanguage] = useState("");
  const [listOfLanguages, setListOfLanguages] = useState([
    "англійська",
    "українська",
  ]);

  const [passConfirm, setPassConfirm] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const listOfFullName = fullName.split(" ");

    if (listOfFullName.length < 1 || listOfFullName.length > 2) {
      alert("Має бути ім'я та прізвище!");
    } else {
      if (password == passConfirm) {
        const res = await registerUser({
          name: listOfFullName[0],
          surname: listOfFullName[0],
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
        router.replace("/login");
      } else {
        alert("пароль не співпадає!");
      }
    }
  };

  return (
    <section className={style.reg}>
      <BaseContainer>
        <form className={style.reg_form} onSubmit={(e) => onSubmit(e)}>
          <Image src={logo} height={166} width={704} alt="logo" />
          <div className={style.reg_form_inputs}>
            <BaseInput
              value={fullName}
              changeValue={setFullName}
              type="text"
              placeholder="Введіть ім’я та прізвище"
              isGreen
            />
            <BaseInput
              value={email}
              changeValue={setEmail}
              type="email"
              placeholder="Введіть пошту"
              isGreen
            />
            {role === "teacher" && (
              <BaseSelect
                text={"Оберіть мову викладання"}
                list={listOfLanguages}
                selectedItem={language}
                changeSelectedItem={setLanguage}
              />
            )}

            <BaseInput
              value={password}
              changeValue={setPassword}
              type="password"
              placeholder="Введіть пароль"
              isGreen
            />
            <BaseInput
              value={passConfirm}
              changeValue={setPassConfirm}
              type="password"
              placeholder="Введіть повторно пароль"
              isGreen
            />
          </div>
          <LogRegButton isLogin={false} />
        </form>
      </BaseContainer>
    </section>
  );
};

export default RegistrationRoleSection;
