"use client";
import { use } from "react";
import CourseEditLocations from "@/components/course/CourseEditLocations/CourseEditLocations";

const CourseLocationsPage = ({ params }) => {
  const { id } = use(params);
  return <CourseEditLocations courseId={id} />;
};

export default CourseLocationsPage;