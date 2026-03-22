import { getUserFromToken } from "@/lib/auth";
import { redirect } from "next/navigation";
import HomeSectionPage from "@/components/home/HomeSectionPage";

const HomePage = async () => {
  const user = await getUserFromToken();
  console.log(user);

  if (!user) {
    redirect("/login");
  }

  return (
    <>
      <HomeSectionPage role={user.role} userId={user.userId} />
    </>
  );
};

export default HomePage;
