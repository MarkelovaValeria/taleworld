import StudentHomeIntro from "./StudentHomeIntro";
import StudentHomeRecommendation from "./StudentHomeRecommendation";
import StudentHomeCatalog from "./StudentHomeCatalog";

import styles from "./StudentHomeSection.module.css";

const StudentHomeSection = () => {
  return (
    <section className={styles.home_student}>
      <StudentHomeIntro />

      <StudentHomeRecommendation />

      <StudentHomeCatalog />
    </section>
  );
};

export default StudentHomeSection;
