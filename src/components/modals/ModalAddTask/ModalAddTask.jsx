"use client";

import { useEffect, useState } from "react";

import Searchbar from "@/components/searchbar/Searchbar";
import Link from "next/link";
import Image from "next/image";

import close from "/public/svg/close.svg";

import { mockTasks } from "@/data/tasks";
import { useTasks } from "@/hooks/useTasksContext";

import style from "./ModalAddTask.module.css";

const ModalAddTask = ({ closeModal, locId, pointId }) => {
  const [choosedTask, setChoosedTask] = useState(null);

  const { tasks, assignTaskToPoint, removeTaskFromPoint } = useTasks();

  const handleClickChooseTask = (task) => {
    if (choosedTask && task.id === choosedTask.id) {
      setChoosedTask(null);
      console.log(locId, pointId);
      // removeTaskFromPoint(locId, pointId);
    } else {
      setChoosedTask(task);
    }
  };

  const handleSubmitChoosedTask = () => {
    if (!choosedTask) return;

    assignTaskToPoint(locId, pointId, choosedTask.id);

    closeModal();
  };

  return (
    <div className={style.modal_add_task}>
      <div className={style.modal_add_task_inner}>
        <button
          className={style.modal_add_task_inner_close}
          onClick={closeModal}
        >
          <Image src={close} alt="close icon" width={22} height={22} />
        </button>

        <h3 className={style.modal_add_task_inner_title}>Список завдань</h3>
        <div className={style.modal_add_task_inner_filters}>
          <ul className={style.modal_add_task_inner_filters_list}>
            <li className={style.modal_add_task_inner_filters_list_item}>
              <button>граматика</button>
            </li>
            <li className={style.modal_add_task_inner_filters_list_item}>
              <button>читання</button>
            </li>
            <li className={style.modal_add_task_inner_filters_list_item}>
              <button>письмо</button>
            </li>
          </ul>

          <Searchbar withoutFilters />
        </div>

        <div className={style.modal_add_task_inner_tasks_list}>
          {[...tasks]
            .sort((a, b) => {
              if (a.id === choosedTask?.id) return -1;
              if (b.id === choosedTask?.id) return 1;
              return 0;
            })
            .map((task) => (
              <button
                key={task.id}
                type="button"
                onClick={() => handleClickChooseTask(task)}
                className={`${style.modal_add_task_inner_tasks_list_item} ${
                  choosedTask?.id === task.id ? style.active : ""
                }`}
              >
                <h4>{task.question}</h4>

                <ul
                  className={style.modal_add_task_inner_tasks_list_item_options}
                >
                  {task.options.map((opt) => (
                    <li
                      key={opt.id}
                      className={`${style.modal_add_task_inner_tasks_list_item_opt} ${opt.isCorrect ? style.correct : ""}`}
                    >
                      {opt.text}
                    </li>
                  ))}
                </ul>
              </button>
            ))}
        </div>

        <div className={style.modal_add_task_inner_btns}>
          <Link href="/tasks" className={style.modal_add_task_inner_btns_link}>
            Створити нове завдання
          </Link>
          <button
            type="button"
            onClick={handleSubmitChoosedTask}
            className={style.modal_add_task_inner_btns_submit}
          >
            Підтвердити
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddTask;
