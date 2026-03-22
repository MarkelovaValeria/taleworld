import MyCoursesComponent from "@/components/mycourses/MyCoursesComponent.jsx";
import { getUserFromToken } from "@/lib/auth";

const MyCoursesPage = async () => {
  const user = await getUserFromToken();

  return (
    <>
      <MyCoursesComponent userId={user.userId} />
    </>
  );
};

export default MyCoursesPage;
