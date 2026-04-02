import { use } from "react";

import TeacherCourseSection from "@/components/course/TeacherCourseSection/TeacherCourseSection";

const MyCoursePage = ({ params }) => {
  const { id } = use(params);

  return (
    <>
      <TeacherCourseSection id={id} />
    </>
  );
};

export default MyCoursePage;
