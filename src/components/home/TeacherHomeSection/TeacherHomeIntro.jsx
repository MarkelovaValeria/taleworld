import Image from "next/image";
import Link from "next/link";

import style from "./TeacherHomeSection.module.css";
import BaseContainer from "@/components/common/BaseContainer/BaseContainer";

const TeacherHomeIntro = ({ setModalIsOpen }) => {
  return (
    <section className={style.home_teacher_intro}>
      <div className={style.home_teacher_intro_start}>
        <div className={style.home_teacher_intro_start_text}>
          <h1>Створи свій перший курс</h1>
          <p>
            налаштуй його за власним баченням, обери стиль оформлення й розпочни
            створювати справжні освітні пригоди.
          </p>
        </div>
        <div className={style.home_teacher_intro_start_btns}>
          <button
            onClick={() => {
              setModalIsOpen(true);
            }}
            className={style.home_teacher_intro_start_btn_create}
          >
            Створити курс
          </button>
          <Link href="#" className={style.home_teacher_intro_start_btn_courses}>
            Переглянути курси
          </Link>
        </div>
      </div>

      <div className={style.home_teacher_intro_template}>
        <Image
          className={style.home_teacher_intro_template_img}
          width="504"
          height="246"
          alt="image"
          src={"/images/Map1.jpg"}
        />
        <div className={style.home_teacher_intro_template_descrition}>
          <h2>Шаблони</h2>
          <p>
            які розкривають потенціал викладача: обирай стиль, додавай матеріали
            та перетворюй навчання на захопливу пригоду.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeacherHomeIntro;
