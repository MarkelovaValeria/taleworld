import { getUserFromToken } from "@/lib/auth";
import { redirect } from "next/navigation";
import StudentLocationPlay from "@/components/lesson/StudentLocationPlay/StudentLocationPlay";

const PlayLocationPage = async ({ params }) => {
  const { courseId, locId } = await params;
  const user = await getUserFromToken();

  if (!user) redirect("/login");

  return (
    <StudentLocationPlay
      courseId={courseId}
      locId={locId}
      studentId={user.userId}
    />
  );
};

export default PlayLocationPage;