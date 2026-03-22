import Link from "next/link";

import style from "./StudentHomeSection.module.css";

const StudentHomeIntro = () => {
  return (
    <section className={style.home_student_intro}>
      <div className={style.home_student_intro_top_text}>
        <h1>
          Знайди свій шлях &<span>досягай вершин разом із нами</span>
        </h1>

        <div className={style.home_student_intro_bottom}>
          <p className={style.home_student_intro_bottom_text}>
            Щоб пробудити в собі силу знань, варто лише зробити крок — розпочати
            пошук викладача та курсу, або відновити проходження своєї чарівної
            навчальної пригоди. І нехай твоя історія буде сповнена перемог!
          </p>

          <div className={style.home_student_intro_bottom_btns}>
            <button className={style.home_student_intro_bottom_btn_search}>
              Розпочати пошук
            </button>
            <Link
              className={style.home_student_intro_bottom_btn_view_course}
              href="#"
            >
              Перейти до курсів
            </Link>
          </div>
        </div>
      </div>
      <div className="home-student__intro-img"></div>
    </section>
  );
};

export default StudentHomeIntro;
