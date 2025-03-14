import Link from "next/link";

const CreateCourse2 = () => {
  return (
    <div className="create-course2">
      <div className="main-container">
        <div className="create-course2__inner">
          <div className="create-course__top">
            <div className="create-course__top-action">
              <button>Задній фон</button>
              <button>Текст</button>
              <button>Дії</button>
            </div>
            <div className="create-course__top-lessons">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>+</button>
            </div>
          </div>
          <div className="create-course__middle">
            <div className="create-course__middle-triangle-left"></div>
            <div className="create-course__middle-canvas"></div>
            <div className="create-course__middle-triangle-right"></div>
          </div>
          <div className="create-course__bottom">
            <div className="create-course__bottom-page">
              <button className="create-course__bottom-page-slide"></button>
              <button className="create-course__bottom-page-slide"></button>
              <button className="create-course__bottom-page-slide"></button>
              <button className="create-course__bottom-page-slide"></button>
            </div>
            <div className="create-course__bottom-active-btns">
              <Link href={"/"}>ПОВЕРНУТИСЯ НАЗАД</Link>
              <Link
                href="/createcourse"
                className="create-course__bottom-active-btn-end"
              >
                ЗАВЕРШИТИ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse2;
