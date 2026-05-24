"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

import { useTasks } from "@/hooks/useTasksContext";
import close from "/public/svg/close.svg";
import plusImg from "/public/images/tasks/plus.svg";
import deleteImg from "/public/images/tasks/delete.svg";

import style from "./ModalEditTask.module.css";

const TYPES = ["grammar", "reading", "writing", "theory"];

const ModalEditTask = ({ task, onClose }) => {
  const { updateTask } = useTasks();

  const [activeType, setActiveType] = useState(task.type?.type ?? "grammar");
  const [questionText, setQuestionText] = useState(task.question);
  const [options, setOptions] = useState(task.options ?? []);
  const [optionText, setOptionText] = useState("");

  const handleAddOption = () => {
    if (!optionText.trim()) return;
    setOptions((prev) => [
      ...prev,
      { id: uuidv4(), text: optionText.trim(), isCorrect: false },
    ]);
    setOptionText("");
  };

  const handleDeleteOption = (id) => {
    setOptions((prev) => prev.filter((o) => o.id !== id));
  };

  const handleToggleCorrect = (id) => {
    setOptions((prev) =>
      prev.map((o) => ({ ...o, isCorrect: o.id === id })),
    );
  };

  const handleSave = () => {
    if (questionText.trim().length < 3) {
      alert("Напишіть текст до завдання");
      return;
    }
    if (options.length < 2) {
      alert("Додайте мінімум 2 варіанти відповіді");
      return;
    }
    if (!options.some((o) => o.isCorrect)) {
      alert("Позначте правильну відповідь");
      return;
    }

    updateTask({
      ...task,
      question: questionText.trim(),
      type: { id: task.type?.id ?? 1, type: activeType },
      options,
    });
    onClose();
  };

  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        {/* Заголовок */}
        <div className={style.modal_header}>
          <h3 className={style.modal_title}>Редагування завдання</h3>
          <button className={style.modal_close} onClick={onClose}>
            <Image src={close} alt="close" width={22} height={22} />
          </button>
        </div>

        {/* Тип */}
        <div className={style.types}>
          {TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              className={`${style.type_btn} ${activeType === t ? style.type_active : ""}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Питання */}
        <input
          className={style.question_input}
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder="Текст завдання..."
        />

        {/* Додати варіант */}
        <div className={style.add_option}>
          <input
            className={style.option_input}
            value={optionText}
            onChange={(e) => setOptionText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddOption()}
            placeholder="Новий варіант відповіді..."
          />
          <button className={style.add_btn} onClick={handleAddOption}>
            <Image src={plusImg} alt="add" width={28} height={28} />
          </button>
        </div>

        {/* Список варіантів */}
        {options.length > 0 && (
          <ul className={style.options_list}>
            {options.map((opt) => (
              <li key={opt.id} className={style.option_item}>
                {/* Кружечок — позначити правильну */}
                <button
                  className={`${style.correct_dot} ${opt.isCorrect ? style.correct_dot_active : ""}`}
                  onClick={() => handleToggleCorrect(opt.id)}
                  title="Позначити правильною"
                />
                <span className={style.option_text}>{opt.text}</span>
                <button
                  className={style.delete_btn}
                  onClick={() => handleDeleteOption(opt.id)}
                  title="Видалити варіант"
                >
                  <Image src={deleteImg} alt="delete" width={24} height={24} />
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Зберегти */}
        <button className={style.save_btn} onClick={handleSave}>
          Зберегти зміни
        </button>
      </div>
    </div>
  );
};

export default ModalEditTask;
