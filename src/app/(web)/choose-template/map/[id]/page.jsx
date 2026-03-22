import { use } from "react";

import MapTemplateSection from "@/components/course/MapTemplateSection/MapTemplateSection";

const CreateLessonMapPage = ({ params }) => {
  const { id } = use(params);

  return (
    <>
      <MapTemplateSection id={id} />
    </>
  );
};

export default CreateLessonMapPage;
