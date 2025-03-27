"use client";
import Navbar from "@/components/navbar/Navbar";
import Examplecard from "@/components/course/Examplecard";
import Examplecard2 from "@/components/course/Examplecard2";
import AsideBtn from "@/components/aside-btns/AsideBtns";
import { useState } from "react";

const CreateCoursePage = () => {
  const [indexbtn, setIndexbtn] = useState(1);
  const toggleTab = (index) => {
    setIndexbtn(index);
  };

  return (
    <div className="intro background-tint">
      <AsideBtn toggleTab={toggleTab} indexbtn={indexbtn}></AsideBtn>
      <div
        className={
          indexbtn === 1 ? "create-course course-active" : "create-course"
        }
      >
        <div className="main-container">
          <div className="course-content">
            <div className="course">
              <h1 className="course-h1">
                Казковий світ чекає на нові пригоди!
              </h1>
              <div className="course__description">
                <h3 className="course__description-h3">
                  Розпочни створення курсу
                </h3>
                <p className="course__description-p">
                  Втілюйте свої фантазії у шаблони ваших уроків, захоплюйте
                  інших вашими ідеями або оберіть вже готовий дизайн
                </p>
              </div>
              <div className="course__btns">
                <button className="course__btns-btn">Створити курс</button>
                <button className="course__btns-btn">Створити мапу</button>
              </div>
            </div>
            <Examplecard></Examplecard>
          </div>
        </div>
      </div>

      <div
        className={
          indexbtn === 2 ? "course-design course-active" : "course-design"
        }
      >
        <div className="main-container">
          <div className="course-card">
            <h1 className="course-h1">Оберіть дизайн для вашого курсу</h1>
            <Examplecard2></Examplecard2>
          </div>
        </div>
      </div>

      <div
        className={indexbtn === 3 ? "map-design course-active" : "map-design"}
      >
        <div className="main-container">
          <div className="course-map">
            <h1 className="course-h1">Оберіть локацію для вашої карти</h1>
            <Examplecard2></Examplecard2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCoursePage;
