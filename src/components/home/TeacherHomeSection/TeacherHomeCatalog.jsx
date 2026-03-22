"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Searchbar from "@/components/searchbar/Searchbar";

import { getAllMaps } from "@/services/connect.js";

import style from "./TeacherHomeSection.module.css";

const TeacherHomeCatalog = () => {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllMaps();
      setMaps(data);
    };
    getData();
  }, []);

  return (
    <div className={style.home_teacher_catalog}>
      <div className={style.home_teacher_catalog_top}>
        <h2>Карти, які вам сподобаються</h2>
        <Searchbar />
      </div>
      <div className={style.home_teacher_catalog_list}>
        {maps.map((map) => (
          <Link key={map.id} href="#">
            <Image
              className={style.home_teacher_catalog_list_item}
              src={
                map.backgroundTitle
                  ? map.backgroundTitle
                  : "/images/Home_bg.png"
              }
              alt="bg map"
              width="446"
              height="254"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeacherHomeCatalog;
