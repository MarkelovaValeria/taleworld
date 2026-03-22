import Link from "next/link";

import style from "./ModalSuccessCreationCourse.module.css";

const ModalSuccessCreationCourse = ({ closeModal, mapId }) => {
  return (
    <div className={style.success_creation}>
      <div className={style.success_creation_inner}>
        <div className={style.success_creation_inner_top}>
          <h2>Вітаємо!</h2>
          <p>Ваш курс був успішно створений, перейдіть до</p>
        </div>
        <div className={style.success_creation_inner_btns}>
          <Link
            className={style.success_creation_inner_btn_create_course}
            href={`/choose-template/map/locations/${mapId}`}
          >
            Створення уроку
          </Link>
          <p>або</p>
          <button
            className={style.success_creation_inner_btn_exit}
            onClick={closeModal}
          >
            Завершення
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccessCreationCourse;
