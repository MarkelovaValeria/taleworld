"use client";
import { use } from "react";
import { useRouter } from "next/navigation";
import LocationCreateTasks from "@/components/lesson/LocationCreateTasks/LocationCreateTasks";

const EditLocationTasksPage = ({ params }) => {
  const { id, locId } = use(params);
  const router = useRouter();

  return (
    <LocationCreateTasks
      locId={locId}
      courseId={id}
      saveLabel="Зберегти"
      onSave={() => router.push(`/mycourses/${id}/locations`)}
    />
  );
};

export default EditLocationTasksPage;