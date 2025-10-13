"use client";
import { getAllCoursesByUserId } from "@/services/connect";
import React, { useEffect, useState } from "react";

const MyCoursesComponent = ({ userId }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllCoursesByUserId(userId);
      setCourses(data);
    };

    getData();
  }, []);
  return (
    <div>
      UserId: {userId}
      <div className="flex gap-5 justify-center items-center">
        {courses.map((course) => (
          <div
            className="flex p-2 justify-center items-center text-center flex-col gap-2 w-40 bg-black text-white"
            key={course.id}
          >
            <span>{course.id}</span>
            <span>{course.title}</span>
            <span>{course.description}</span>
            <span>{course.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCoursesComponent;
