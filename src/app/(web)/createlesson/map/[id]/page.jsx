"use client";
import { getMapById } from "@/services/connect";
import React, { use, useEffect, useState } from "react";

const CreateLessonMapPage = ({ params }) => {
  const { id } = use(params);
  const [map, setMap] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await getMapById(id);
      setMap(res);
    };
    getData();
  }, []);
  return <div>{map?.name}</div>;
};

export default CreateLessonMapPage;
