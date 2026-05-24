import { use } from "react";
import { getUserFromToken } from "@/lib/auth";
import StudentEnrollmentCourseSection from "@/components/course/StudentEnrollmentCourseSection/StudentEnrollmentCourseSection";

const CoursePage = async ({ params }) => {
  const { id } = await params;
  const user = await getUserFromToken();

  return (
    <StudentEnrollmentCourseSection id={id} studentId={user?.userId} />
  );
};

export default CoursePage;