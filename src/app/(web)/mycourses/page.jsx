import { getUserFromToken } from "@/lib/auth";
import { redirect } from "next/navigation";
import MyCoursesComponent from "@/components/mycourses/MyCoursesComponent.jsx";
import StudentCoursesComponent from "@/components/mycourses/StudentCoursesComponent.jsx";

const MyCoursesPage = async () => {
  const user = await getUserFromToken();

  if (!user) {
    redirect("/login");
  }

  return (
    <>
      {user.role === "Teacher" ? (
        <MyCoursesComponent userId={user.userId} />
      ) : (
        <StudentCoursesComponent userId={user.userId} />
      )}
    </>
  );
};

export default MyCoursesPage;