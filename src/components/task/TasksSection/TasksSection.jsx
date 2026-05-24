"use client";
import { useState } from "react";

import BaseContainer from "@/components/common/BaseContainer/BaseContainer";
import ChangeViewButton from "@/components/common/ChangeViewButton/ChangeViewButton";
import ModalEditTask from "@/components/modals/ModalEditTask/ModalEditTask";
import Link from "next/link";
import Image from "next/image";

import topLinie from "/public/images/tasks/top_linie.png";
import deleteImg from "/public/images/tasks/delete.svg";
import editImg from "/public/images/tasks/plus.svg"; // тимчасово, замінити на іконку редагування

import { useTasks } from "@/hooks/useTasksContext";

import style from "./TasksSection.module.css";

const TasksSection = () => {
  const [view, setView] = useState("col");
  const [editingTask, setEditingTask] = useState(null); // задача що редагується

  const { tasks, deleteTask } = useTasks();

  const handleDelete = (task) => {
    const confirmed = window.confirm(
      `Видалити завдання "${task.question.slice(0, 40)}..."?`,
    );
    if (confirmed) deleteTask(task.id);
  };

  return (
    <section className={style.task}>
      <div className={style.task_top}>
        <p>ще не маєте завдань?</p>
        <Image src={topLinie} alt="linie" width={1270} height={66} />
        <Link href={"/tasks/create"}>створити</Link>
      </div>

      <BaseContainer>
        <div className={style.task_content}>
          <h2>Ваші завдання</h2>

          <div className={style.task_content_filter}>
            <div className={style.task_content_filter_btns}>
              <button className={style.task_content_filter_btns_item}>
                граматика
              </button>
              <button className={style.task_content_filter_btns_item}>
                теорія
              </button>
            </div>
            <ChangeViewButton view={view} setView={setView} />
          </div>

          {tasks.length === 0 ? (
            <p className={style.empty}>
              У вас ще немає завдань.{" "}
              <Link href="/tasks/create" className={style.empty_link}>
                Створити перше
              </Link>
            </p>
          ) : (
            <div
              className={`${style.task_content_list} ${view === "col" ? style.col : ""}`}
            >
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className={`${style.task_content_list_item} ${view === "col" ? style.col : ""}`}
                >
                  {/* Тип + дії */}
                  <div className={style.item_header}>
                    <span className={style.item_type}>
                      {task.type?.type ?? "завдання"}
                    </span>
                    <div className={style.item_actions}>
                      <button
                        className={style.item_btn_edit}
                        onClick={() => setEditingTask(task)}
                        title="Редагувати"
                      >
                        ✏️
                      </button>
                      <button
                        className={style.item_btn_delete}
                        onClick={() => handleDelete(task)}
                        title="Видалити"
                      >
                        <Image
                          src={deleteImg}
                          alt="delete"
                          width={22}
                          height={22}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Питання */}
                  <p className={style.item_question}>{task.question}</p>

                  {/* Варіанти відповідей */}
                  <ul className={style.item_options}>
                    {task.options?.map((opt) => (
                      <li
                        key={opt.id}
                        className={`${style.item_option} ${opt.isCorrect ? style.item_option_correct : ""}`}
                      >
                        <span className={style.item_option_dot} />
                        {opt.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </BaseContainer>

      {/* Модалка редагування */}
      {editingTask && (
        <ModalEditTask
          task={editingTask}
          onClose={() => setEditingTask(null)}
        />
      )}
    </section>
  );
};

export default TasksSection;
