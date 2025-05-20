import Image from "next/image";
import React from "react";

const CreateCourse = () => {
  return (
    <div className="create-course">
      <div className="create-course__inner">
        <div className="create-course__title">
          <h2>Початок нового</h2>
          <h3>буває важким, але в Тебе це вийде!</h3>
        </div>
        <form className="create-course__form">
          <div className="create-course__form-inner">
            <h2>Твій курс - твої правила!</h2>
            <div className="create-course__form-inputs">
              <input
                className="create-course__form-inputs-input"
                type="text"
                placeholder="Назва курсу"
              />
              <input
                className="create-course__form-inputs-input"
                type="text"
                placeholder="Описа"
              />
            </div>
          </div>
          <div className="create-course__form-submit">
            <p>Втіли свої ідеї в цьому світі</p>
            <button type="submit">Створення уроку</button>
          </div>
        </form>
        <Image
          src="/images/Photo.png"
          alt="photo"
          width="1020"
          height="600"
          className="create-course__photo"
        />
      </div>
    </div>
  );
};

export default CreateCourse;
