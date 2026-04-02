"use client";
import { useState } from "react";

import BaseContainer from "@/components/common/BaseContainer/BaseContainer";
import ChangeViewButton from "@/components/common/ChangeViewButton/ChangeViewButton";
import Link from "next/link";
import Image from "next/image";

import topLinie from "/public/images/tasks/top_linie.png";

import { mockTasks } from "@/data/tasks";
import { useTasks } from "@/hooks/useTasksContext";

import style from "./TasksSection.module.css";

const TasksSection = () => {
  const [view, setView] = useState("col");

  const { tasks } = useTasks();

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
          <div
            className={`${style.task_content_list} ${view === "col" ? style.col : ""}`}
          >
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`${style.task_content_list_item} ${view === "col" ? style.col : ""}`}
              >
                {task.question}
              </div>
            ))}
          </div>
        </div>
      </BaseContainer>
    </section>
  );
};

export default TasksSection;
