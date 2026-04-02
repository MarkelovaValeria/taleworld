"use client";

import { useState } from "react";
import { useTasks } from "@/hooks/useTasksContext";
import { v4 as uuidv4 } from "uuid";

import BaseContainer from "@/components/common/BaseContainer/BaseContainer";
import Image from "next/image";

import plusImg from "/public/images/tasks/plus.svg";
import deleteImg from "/public/images/tasks/delete.svg";

import style from "./CreateTaskSection.module.css";
import { type } from "os";

const CreateTaskSection = () => {
  const { addTask } = useTasks();

  const [activeItem, setActiveItem] = useState("grammar");

  const [questionText, setQuestionText] = useState("");
  const [optionText, setOptionText] = useState("");
  const [options, setOptions] = useState([]);

  const handleAddOption = () => {
    setOptions((items) => [
      ...items,
      { id: uuidv4(), text: optionText, isCorrect: false },
    ]);

    setOptionText("");
  };

  const handleDeleteOption = (id) => {
    setOptions((items) => items.filter((item) => item.id !== id));
  };

  const handleChangeCorrectOption = (id) => {
    setOptions((items) =>
      items.map((item) => ({
        ...item,
        isCorrect: item.id === id,
      })),
    );
  };

  const handleAddTask = () => {
    if (questionText.length < 3) {
      alert("Напишіть текст до завдання");
    } else {
      const newTask = {
        id: uuidv4(),
        question: questionText,
        type: { id: 1, type: activeItem },
        subType: { id: 1, subType: "match" },
        options: options,
      };

      addTask(newTask);

      setQuestionText("");
      setOptions([]);
    }
  };

  return (
    <section className={style.create_task}>
      <BaseContainer>
        <div className={style.create_task_inner}>
          <h2 className={style.create_task_title}>Створення завдання</h2>

          <div className={style.create_task_types}>
            <button
              onClick={() => setActiveItem("grammar")}
              className={`${style.create_task_types_item} ${activeItem === "grammar" ? style.active : ""}`}
            >
              граматика
            </button>
            <button
              onClick={() => setActiveItem("reading")}
              className={`${style.create_task_types_item} ${activeItem === "reading" ? style.active : ""}`}
            >
              читання
            </button>
            <button
              onClick={() => setActiveItem("writing")}
              className={`${style.create_task_types_item} ${activeItem === "writing" ? style.active : ""}`}
            >
              письмо
            </button>
            <button
              onClick={() => setActiveItem("theory")}
              className={`${style.create_task_types_item} ${activeItem === "theory" ? style.active : ""}`}
            >
              теорія
            </button>
          </div>

          <p className={style.create_task_helptext}>
            Заповніть текст для завдання, який буде бачити студент, щоб виконати
            завдання
          </p>

          <div className={style.create_task_container}>
            <div className={style.create_task_question}>
              <input
                className={style.create_task_question_input}
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                type="text"
                placeholder="Напишіть текст завдання..."
              />
              <button className={style.create_task_question_btn}>match</button>
            </div>
            <div className={style.create_task_option_text}>
              <input
                className={style.create_task_option_text_input}
                type="text"
                value={optionText}
                onChange={(e) => setOptionText(e.target.value)}
                placeholder="Напишіть варіант відповіді"
              />
              <button
                onClick={handleAddOption}
                className={style.create_task_option_text_add}
              >
                <Image src={plusImg} alt="plus" width={32} height={32} />
              </button>
            </div>

            <div className={style.create_task_list}>
              {options.length === 0 ? (
                <p>Додайте варіант відповіді</p>
              ) : (
                <>
                  <p>Варіанти відповідей</p>
                  <ul className={style.create_task_list_options}>
                    {options.map((opt) => (
                      <li
                        key={opt.id}
                        className={style.create_task_list_options_item}
                      >
                        <button
                          onClick={() => handleChangeCorrectOption(opt.id)}
                          className={`${style.create_task_list_options_item_active} ${opt.isCorrect ? style.correct : ""}`}
                        ></button>
                        <p className={style.create_task_list_options_item_text}>
                          {opt.text}
                        </p>
                        <button
                          onClick={() => handleDeleteOption(opt.id)}
                          className={style.create_task_list_options_item_delete}
                        >
                          <Image
                            src={deleteImg}
                            alt="plus"
                            width={30}
                            height={30}
                          />
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {options.length >= 2 && (
              <button
                type="button"
                onClick={handleAddTask}
                className={style.create_task_finish_btn}
              >
                Створити
              </button>
            )}
          </div>
        </div>
      </BaseContainer>
    </section>
  );
};

export default CreateTaskSection;
