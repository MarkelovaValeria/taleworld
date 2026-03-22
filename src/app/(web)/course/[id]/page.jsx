import { use } from "react";

import StudentEnrollmentCourseSection from "@/components/course/StudentEnrollmentCourseSection/StudentEnrollmentCourseSection";

const CoursePage = ({ params }) => {
  const { id } = use(params);

  return (
    <>
      <StudentEnrollmentCourseSection id={id} />
    </>
  );
};

export default CoursePage;
