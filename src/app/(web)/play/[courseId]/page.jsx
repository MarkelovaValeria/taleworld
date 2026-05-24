import { getUserFromToken } from "@/lib/auth";
import { redirect } from "next/navigation";
import StudentCourseMap from "@/components/course/StudentCourseMap/StudentCourseMap";

const PlayCoursePage = async ({ params }) => {
  const { courseId } = await params;
  const user = await getUserFromToken();

  if (!user) redirect("/login");

  return <StudentCourseMap courseId={courseId} studentId={user.userId} />;
};

export default PlayCoursePage;