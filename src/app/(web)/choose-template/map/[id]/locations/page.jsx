"use client";

import { use } from "react";

import ChooseMapLocation from "@/components/course/ChooseMapLocation/ChooseMapLocation";

const ChooseMapLocationPage = ({ params }) => {
  const { id } = use(params);

  return (
    <>
      <ChooseMapLocation mapId={id} />
    </>
  );
};

export default ChooseMapLocationPage;
