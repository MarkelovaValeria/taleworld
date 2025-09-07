import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { createCourse } from "@/services/connect.js";

function ModalCreateCourse({ closeModal, userId }) {
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createC = async (e) => {
    e.preventDefault();
    console.log(userId);
    if (!userId) {
      alert("Користувач не завантажений");
      return;
    }

    await createCourse({
      title,
      description,
      teacherId: userId,
    });

    setTitle("");
    setDescription("");
    setIndex(1); // показати інший екран
  };
  return (
    <div>
      {index === 0 ? (
        <div className="modal-create-course">
          <div className="modal-create-course__inner">
            <div className="modal-create-course__inner-top">
              <h1>Твій курс - твої правила!</h1>
              <p>Початок нового буває важким, але в Тебе це вийде!</p>
            </div>
            <form
              className="modal-create-course__inner-form"
              onSubmit={(e) => createC(e)}
            >
              <input
                className="modal-create-course__inner-form-input"
                type="text"
                placeholder="Назва курсу"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                className="modal-create-course__inner-form-input"
                type="text"
                placeholder="Опис"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button
                className="modal-create-course__inner-form-submit"
                type="submit"
              >
                Створити курс
              </button>
            </form>
            <Image
              alt="photo"
              className="modal-create-course__inner-img"
              src={"/images/Cat.png"}
              width={"320"}
              height={"530"}
            />
            <button
              className="modal-create-course__inner-close"
              onClick={closeModal}
            >
              <Image alt="photo" src={"/images/close.svg"} fill />
            </button>
          </div>
        </div>
      ) : (
        <div className="modal-create-lesson">
          <div className="modal-create-lesson__inner">
            <div className="modal-create-lesson__inner-top">
              <h1>Вітаємо!</h1>
              <p>Ваш курс був успішно створений, перейдіть до</p>
            </div>
            <div className="modal-create-lesson__inner-btns">
              <Link
                className="modal-create-lesson__inner-btns-create-lesson"
                href={"/createlesson"}
              >
                Створення уроку
              </Link>
              <p>або</p>
              <button
                className="modal-create-lesson__inner-btns-exit"
                onClick={closeModal}
              >
                Завершення
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalCreateCourse;
