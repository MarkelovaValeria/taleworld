"use client";

import { use } from "react";
import { useRouter } from "next/navigation";

import LocationCreateTasks from "@/components/lesson/LocationCreateTasks/LocationCreateTasks";

const LocationTaskPage = ({ params }) => {
  const { id, locId } = use(params);
  const router = useRouter();

  return (
    <LocationCreateTasks
      locId={locId}
      mapId={id}
      saveLabel="Зберегти і завершити"
      onSave={() => router.push(`/choose-template/map/${id}/locations`)}
    />
  );
};

export default LocationTaskPage;
