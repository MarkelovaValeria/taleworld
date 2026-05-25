"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import LocationCreateTasks from "@/components/lesson/LocationCreateTasks/LocationCreateTasks";
import { getCourseById } from "@/services/connect";

const EditLocationTasksPage = ({ params }) => {
  const { id, locId } = use(params);
  const router = useRouter();

  const [mapId, setMapId] = useState(null);

  useEffect(() => {
    getCourseById(id).then((course) => {
      // Fall back to map 1 if the course has no mapId
      setMapId(course?.mapId ?? 1);
    });
  }, [id]);

  // Wait until we know the mapId so the key is always correct
  if (!mapId) return null;

  return (
    <LocationCreateTasks
      locId={locId}
      mapId={mapId}
      saveLabel="Зберегти"
      onSave={() => router.push(`/mycourses/${id}/locations`)}
    />
  );
};

export default EditLocationTasksPage;
