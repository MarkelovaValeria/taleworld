import { getUserFromToken } from "@/lib/auth";
import { redirect } from "next/navigation";
import HomeSectionPage from "@/components/home/HomeSectionPage";

const HomePage = async () => {
  const user = await getUserFromToken();

  // Якщо користувач не залогінений, перенаправляємо на сторінку входу
  if (!user) {
    redirect("/login");
  }

  return <HomeSectionPage role={user.role} />;
};

export default HomePage;
