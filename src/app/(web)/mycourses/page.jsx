import MyCoursesComponent from "@/components/mycourses/MyCoursesComponent.jsx";
import { getUserFromToken } from "@/lib/auth";
import { redirect } from "next/navigation";

const MyCoursesPage = async () => {
  const user = await getUserFromToken();

  if (!user) {
    redirect("/login");
  }

  return (
    <>
      <MyCoursesComponent userId={user.userId} />
    </>
  );
};

export default MyCoursesPage;
