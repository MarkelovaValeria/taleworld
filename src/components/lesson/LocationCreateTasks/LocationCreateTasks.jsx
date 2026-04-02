"use client";

import { useEffect, useState } from "react";

import BaseContainer from "@/components/common/BaseContainer/BaseContainer";
import locImage from "/public/images/locations/location1.png";
import ModalAddTask from "@/components/modals/ModalAddTask/ModalAddTask";
import Image from "next/image";

import { useTasks } from "@/hooks/useTasksContext";

import style from "./LocationCreateTasks.module.css";

const taskLock1 = [
  {
    id: 1,
    x: 85,
    y: 10,
  },
  {
    id: 2,
    x: 75,
    y: 25,
  },
  {
    id: 3,
    x: 45,
    y: 65,
  },
];

const taskLock2 = [
  {
    id: 1,
    x: 35,
    y: 10,
  },
  {
    id: 2,
    x: 25,
    y: 25,
  },
  {
    id: 3,
    x: 35,
    y: 75,
  },
  {
    id: 4,
    x: 15,
    y: 65,
  },
];

const taskLock3 = [
  {
    id: 1,
    x: 15,
    y: 10,
  },
  {
    id: 2,
    x: 55,
    y: 65,
  },
  {
    id: 3,
    x: 65,
    y: 75,
  },
];

const taskLock4 = [
  {
    id: 1,
    x: 85,
    y: 50,
  },
  {
    id: 2,
    x: 75,
    y: 35,
  },
  {
    id: 3,
    x: 25,
    y: 25,
  },
  {
    id: 4,
    x: 35,
    y: 25,
  },
];

const LocationCreateTasks = ({ locId }) => {
  const { initPointsForLesson, getPoints, hasTask } = useTasks();
  const points = getPoints(locId);

  const [choosedLoc, setChoosedLoc] = useState();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClickOpenModalTask = (id) => {
    setChoosedLoc(id);
    setModalIsOpen(true);
  };

  const handleClickCloseModalTask = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!points[locId]) {
      console.log(locId);
      initPointsForLesson(
        locId,
        locId == 1
          ? taskLock1
          : locId == 2
            ? taskLock2
            : locId == 3
              ? taskLock3
              : taskLock4,
      );
    }
  }, [locId]);

  return (
    <section className={style.loc_tasks}>
      <BaseContainer>
        <div className={style.loc_tasks_inner}>
          <div className={style.loc_tasks_text}>
            <h2>ОБЕРІТЬ ТОЧКУ НА КАРТІ, ЩОБ ДОДАТИ ЗАВДАННЯ</h2>
            <p>завдання виконуються студентом у порядку зростання номерів</p>
          </div>

          <div className={style.loc_tasks_photolocation}>
            <Image src={locImage} alt="location" width={2200} height={1100} />
            {points.map((loc) => (
              <button
                key={loc.id}
                className={`${style.loc_tasks_photolocation_spot} ${hasTask(locId, loc.id) ? style.done : ""}`}
                style={{
                  left: `${loc.x}%`,
                  top: `${loc.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                type="button"
                onClick={() => handleClickOpenModalTask(loc.id)}
              ></button>
            ))}
          </div>

          <button type="button" className={style.loc_tasks_inner_create_btn}>
            Створити урок
          </button>
        </div>
      </BaseContainer>

      {modalIsOpen && (
        <ModalAddTask
          closeModal={handleClickCloseModalTask}
          locId={locId}
          pointId={choosedLoc}
        />
      )}
    </section>
  );
};

export default LocationCreateTasks;
