"use client";
import { useEffect, useState } from "react";
import { getCourseById } from "@/services/connect";

import BaseContainer from "@/components/common/BaseContainer/BaseContainer";

const TeacherCourseSection = ({ id }) => {
  const [course, setCourse] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getCourseById(id);
      setCourse(data);
      console.log(data);
    };
    getData();
  }, [id]);

  return (
    <section>
      <BaseContainer>{id}</BaseContainer>
    </section>
  );
};

export default TeacherCourseSection;
