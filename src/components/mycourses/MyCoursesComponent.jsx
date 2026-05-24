"use client";
import { getAllCoursesByUserId } from "@/services/connect";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import style from "./MyCoursesComponent.module.css";
import Image from "next/image";
import BaseContainer from "../common/BaseContainer/BaseContainer";

const MyCoursesComponent = ({ userId }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllCoursesByUserId(userId);

      setCourses(data);

      console.log(data);
    };

    getData();
  }, []);

  return (
    <div className={style.courses}>
      <BaseContainer>
        <div className={style.courses_list}>
          {courses.length > 0 ? (
            courses.map((course) => (
              <Link
                className={style.courses_list_item}
                key={course.id}
                href={`/mycourses/${course.id}`}
              >
                <Image
                  className={style.courses_list_item_img}
                  src={course.image ? course.image : "/images/Home_bg.png"}
                  alt="bg course"
                  width="846"
                  height="454"
                />
                <span className={style.course_list_item_title}>
                  {course.title}
                </span>
              </Link>
            ))
          ) : (
            <span>У вас немає курсів</span>
          )}
        </div>
      </BaseContainer>
    </div>
  );
};

export default MyCoursesComponent;
