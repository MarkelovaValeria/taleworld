"use client";

import Image from "next/image";

import { useState } from "react";
import { createCourse } from "@/services/connect.js";
import { useRouter } from "next/navigation";

import style from "./ModalCreateCourse.module.css";

function ModalCreateCourse({ closeModal, userId }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEmptyInput, setIsEmptyInput] = useState(false);

  // const createC = async (e) => {
  //   e.preventDefault();
  //   if (!userId) {
  //     alert("Користувач не завантажений");
  //     return;
  //   }

  //   if (title != "" && description != "") {
  //     setIsEmptyInput(false);

  //     await createCourse({
  //       title,
  //       description,
  //       teacherId: userId,
  //     });

  //     router.push("/choose-template");
  //   } else {
  //     setIsEmptyInput(true);
  //     alert("Заповніть форму");
  //   }

  //   setTitle("");
  //   setDescription("");
  // };

  const createC = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert("Користувач не завантажений");
      return;
    }

    if (title !== "" && description !== "") {
      setIsEmptyInput(false);

      const query = new URLSearchParams({
        title,
        description,
        userId,
      }).toString();

      router.push(`/choose-template?${query}`);
    } else {
      setIsEmptyInput(true);
      alert("Заповніть форму");
    }

    setTitle("");
    setDescription("");
  };

  return (
    <div className={style.modal_create_course}>
      <div className={style.modal_create_course_inner}>
        <div className={style.modal_create_course_inner_top}>
          <h2>Твій курс - твої правила!</h2>
          <p>Початок нового буває важким, але в Тебе це вийде!</p>
        </div>
        <form
          className={style.modal_create_course_inner_form}
          onSubmit={(e) => createC(e)}
        >
          <input
            className={style.modal_create_course_inner_form_input}
            type="text"
            placeholder="Назва курсу"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className={style.modal_create_course_inner_form_input}
            type="text"
            placeholder="Опис"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className={style.modal_create_course_inner_form_submit}
            type="submit"
          >
            Створення курс
          </button>
        </form>

        <Image
          alt="photo"
          className={style.modal_create_course_inner_img}
          src={"/images/Cat.png"}
          width={"320"}
          height={"530"}
        />

        <button
          className={style.modal_create_course_inner_close}
          onClick={closeModal}
        >
          <Image alt="photo" src={"/images/close.svg"} fill />
        </button>
      </div>
    </div>
  );
}

export default ModalCreateCourse;
