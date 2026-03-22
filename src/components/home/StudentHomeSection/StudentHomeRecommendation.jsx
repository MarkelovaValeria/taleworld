import style from "./StudentHomeSection.module.css";

const StudentHomeRecommendation = () => {
  return (
    <section className={style.home_student_rec}>
      <h2>
        <span>Найкращі</span> з найкращих
      </h2>
      <div className={style.home_student_rec_content}>
        <div className={style.home_student_rec_content_left}>
          <div className={style.home_student_rec_content_left_img}></div>
          <p>
            Щоб пробудити в собі силу знань, варто лише зробити крок — розпочати
            пошук викладача та курсу, або відновити проходження своєї чарівної
            навчальної пригоди. І нехай твоя історія буде сповнена перемог!
          </p>
        </div>

        <div className={style.home_student_rec_content_right}>
          <div className={style.home_student_rec_content_right_item}></div>
          <div className={style.home_student_rec_content_right_item}></div>
          <div className={style.home_student_rec_content_right_item}></div>
          <div className={style.home_student_rec_content_right_item}></div>
          <div className={style.home_student_rec_content_right_item}></div>
        </div>
      </div>
    </section>
  );
};

export default StudentHomeRecommendation;
