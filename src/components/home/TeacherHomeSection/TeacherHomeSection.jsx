import TeacherHomeCatalog from "./TeacherHomeCatalog";
import TeacherHomeIntro from "./TeacherHomeIntro";
import TeacherHomeRecommendation from "./TeacherHomeRecommendation";

import style from "./TeacherHomeSection.module.css";

const TeacherHomeSection = ({ setModalIsOpen }) => {
  return (
    <div className={style.home_teacher}>
      <TeacherHomeIntro setModalIsOpen={setModalIsOpen} />

      <TeacherHomeRecommendation />

      <TeacherHomeCatalog />
    </div>
  );
};

export default TeacherHomeSection;
