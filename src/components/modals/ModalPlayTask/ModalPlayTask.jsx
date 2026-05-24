"use client";
import { useState } from "react";
import Image from "next/image";
import close from "/public/svg/close.svg";
import style from "./ModalPlayTask.module.css";

// Стани модалки:
// idle     → нічого не вибрано
// selected → вибрано варіант, чекає підтвердження
// answered → підтверджено
//   correct  → показуємо зелений + «Далі»
//   wrong    → показуємо тільки червоний + помаранчева «Показати відповідь»
// revealed → (тільки при помилці) розкрито правильну відповідь + «Далі»

const ModalPlayTask = ({ task, onClose, onAnswer, onHint }) => {
  const [selected, setSelected] = useState(null);
  const [stage, setStage] = useState("idle"); // idle | selected | answered | revealed

  // Чи є взагалі правильна відповідь у задачі
  const hasCorrectOption = task.options.some((o) => o.isCorrect);

  const handleSelect = (option) => {
    if (stage === "answered" || stage === "revealed") return;
    setSelected(option);
    setStage("selected");
  };

  const handleConfirm = () => {
    if (!selected || stage !== "selected") return;
    setStage("answered");
    onAnswer(selected.isCorrect);
  };

  const handleReveal = () => {
    setStage("revealed");
    onHint?.(); // повідомляємо батьківський компонент — підказку використано
  };

  const getOptionClass = (option) => {
    // До підтвердження — підсвічуємо лише вибраний нейтрально
    if (stage === "idle") return style.option;
    if (stage === "selected") {
      return option.id === selected?.id
        ? `${style.option} ${style.chosen}`
        : style.option;
    }

    // Після підтвердження — тільки вибраний (зелений або червоний)
    if (stage === "answered") {
      if (option.id === selected?.id) {
        return `${style.option} ${selected.isCorrect ? style.correct : style.wrong}`;
      }
      return style.option; // правильний НЕ підсвічуємо
    }

    // Після «Показати відповідь» — вибраний червоний + правильний зелений
    if (stage === "revealed") {
      if (hasCorrectOption && option.isCorrect)
        return `${style.option} ${style.correct}`;
      if (option.id === selected?.id) return `${style.option} ${style.wrong}`;
      return style.option;
    }

    return style.option;
  };

  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <button className={style.close} onClick={onClose}>
          <Image src={close} alt="close" width={22} height={22} />
        </button>

        <h3 className={style.question}>{task.question}</h3>

        <ul className={style.options}>
          {task.options.map((opt) => (
            <li key={opt.id}>
              <button
                className={getOptionClass(opt)}
                onClick={() => handleSelect(opt)}
                disabled={stage === "answered" || stage === "revealed"}
              >
                {opt.text}
              </button>
            </li>
          ))}
        </ul>

        <div className={style.footer}>
          {/* Крок 1: вибрано → кнопка підтвердження */}
          {stage === "selected" && (
            <button className={style.confirmBtn} onClick={handleConfirm}>
              Підтвердити
            </button>
          )}

          {/* Крок 2а: правильно → одразу «Далі» */}
          {stage === "answered" && selected?.isCorrect && (
            <>
              <p className={style.feedbackCorrect}>✓ Правильно!</p>
              <button className={style.doneBtn} onClick={onClose}>
                Далі
              </button>
            </>
          )}

          {/* Крок 2б: неправильно → помаранчева кнопка */}
          {stage === "answered" && !selected?.isCorrect && (
            <>
              <p className={style.feedbackWrong}>✗ Неправильно</p>
              <button className={style.revealBtn} onClick={handleReveal}>
                Показати відповідь
              </button>
            </>
          )}

          {/* Крок 3: після показу правильної → «Далі» */}
          {stage === "revealed" && (
            <>
              {hasCorrectOption ? (
                <p className={style.feedbackWrong}>✗ Неправильно</p>
              ) : (
                <p className={style.feedbackNoAnswer}>
                  ⚠ Правильну відповідь не призначено
                </p>
              )}
              <button className={style.doneBtn} onClick={onClose}>
                Далі
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalPlayTask;
