"use client";

import { use } from "react";

import LocationCreateTasks from "@/components/lesson/LocationCreateTasks/LocationCreateTasks";

const LocationTaskPage = ({ params }) => {
  const { locId } = use(params);

  return (
    <>
      <LocationCreateTasks locId={locId} />
    </>
  );
};

export default LocationTaskPage;
