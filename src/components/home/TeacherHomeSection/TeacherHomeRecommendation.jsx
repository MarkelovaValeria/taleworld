"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { getAllMaps } from "@/services/connect.js";

import style from "./TeacherHomeSection.module.css";

const TeacherHomeRecommendation = () => {
  const [maps, setMaps] = useState([]);
  const [activeMap, setActiveMap] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getAllMaps();
      setMaps(data);
      setActiveMap(data[0]);
    };
    getData();
  }, []);

  return (
    <section className={style.home_teacher_rec}>
      <div className={style.home_teacher_rec_view}>
        <h2>Шаблони, що надихають</h2>
        <Image
          width="1020"
          height="600"
          src={
            activeMap?.backgroundTitle
              ? activeMap.backgroundTitle
              : "/images/Home_bg.png"
          }
          alt="photo"
          className={style.home_teacher_rec_view_img}
        />
        <p>
          Карта оформлена в сучасному, мінімалістичному стилі з акцентом на
          зручність користування. Локації позначені чіткими іконками, кольорова
          палітра стримана та узгоджена з загальним дизайном платформи.
        </p>
      </div>

      <div className={style.home_teacher_rec_templates}>
        <h3>Обери той, який тобі до душі. Твори, навчай та розповідай!</h3>
        <div className={style.home_teacher_rec_templates_list}>
          {maps.slice(0, 4).map((map) => (
            <Image
              onClick={() => {
                setActiveMap(map);
              }}
              key={map.id}
              className={style.home_teacher_rec_templates_list_item}
              src={
                map.backgroundTitle
                  ? map.backgroundTitle
                  : "/images/Home_bg.png"
              }
              alt="bg map"
              width="1020"
              height="600"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherHomeRecommendation;
