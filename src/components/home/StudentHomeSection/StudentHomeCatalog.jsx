"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import Searchbar from "@/components/searchbar/Searchbar";

import { getAllCourses } from "@/services/connect.js";

import style from "./StudentHomeSection.module.css";

const StudentHomeCatalog = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllCourses();
      setCourses(data);
    };
    getData();
  }, []);

  return (
    <section className={style.home_student_catalog}>
      <div className={style.home_student_catalog_top}>
        <h2>Можливо вам сподобається</h2>
        <Searchbar />
      </div>
      <div className={style.home_student_catalog_top_list}>
        {courses.map((course) => (
          <Link href={`/course/${course.id}`} key={course.id}>
            <Image
              className={style.home_student_catalog_top_list_item}
              src={
                course.coursePhoto ? course.coursePhoto : "/images/Home_bg.png"
              }
              alt="bg map"
              width="446"
              height="254"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default StudentHomeCatalog;
