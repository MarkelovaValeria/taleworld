"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { getAllCourses, getAllMaps } from "@/services/connect.js";

const HomeSectionPage = ({ role }) => {
  const [courses, setCourses] = useState([]);
  const [maps, setMaps] = useState([]);
  const [activeMap, setActiveMap] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getAllCourses();
      setCourses(data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllMaps();
      setMaps(data);
      setActiveMap(data[0]);
    };
    getData();
  }, []);

  return (
    <div>
      {role == "Teacher" ? (
        <div className="home-teacher">
          <div className="home-teacher__inner">
            <div className="home-teacher__intro">
              <div className="home-teacher__intro-description">
                <div className="home-teacher__intro-description-text">
                  <h2>Створи свій перший курс</h2>
                  <p>
                    налаштуй його за власним баченням, обери стиль оформлення й
                    розпочни створювати справжні освітні пригоди.
                  </p>
                </div>
                <div className="home-teacher__intro-description-btns">
                  <Link
                    href="/createcourse"
                    className="home-teacher__intro-description-btns-create-course"
                  >
                    Створити курс
                  </Link>
                  <Link
                    href="#"
                    className="home-teacher__intro-description-btns-view-course"
                  >
                    Переглянути курси
                  </Link>
                </div>
              </div>
              <div className="home-teacher__intro-example">
                <div className="home-teacher__intro-example-img"></div>
                <div className="home-teacher__intro-example-description">
                  <h2>Шаблони</h2>
                  <p>
                    які розкривають потенціал викладача: обирай стиль, додавай
                    матеріали та перетворюй навчання на захопливу пригоду.
                  </p>
                </div>
              </div>
            </div>
            <div className="home-teacher__recommendation">
              <div className="home-teacher__recommendation-view">
                <h2>Шаблони, що надихають</h2>
                <Image
                  width="1020"
                  height="600"
                  src={
                    activeMap?.backgroundTitle
                      ? activeMap.backgroundTitle
                      : "/images/Home_bg.png"
                  }
                  alt="photo"
                  className="home-teacher__recommendation-view-img"
                />
                <p>
                  Карта оформлена в сучасному, мінімалістичному стилі з акцентом
                  на зручність користування. Локації позначені чіткими іконками,
                  кольорова палітра стримана та узгоджена з загальним дизайном
                  платформи.
                </p>
              </div>
              <div className="home-teacher__recommendation-choise">
                <h3>
                  Обери той, який тобі до душі. Твори, навчай та розповідай!
                </h3>
                <div className="home-teacher__recommendation-choise-imgs">
                  {maps.slice(0, 4).map((map) => (
                    <Image
                      onClick={() => {
                        setActiveMap(map);
                      }}
                      key={map.id}
                      className="home-teacher__recommendation-choise-imgs-img"
                      src={
                        map.backgroundTitle
                          ? map.backgroundTitle
                          : "/images/Home_bg.png"
                      }
                      alt="bg map"
                      width="1020"
                      height="600"
                    />
                  ))}
                </div>
                <p>
                  Карта з локаціями виконана грамотно: інтерфейс зручний,
                  розміщення об'єктів логічне. Вона добре підтримує навчальний
                  процес і дозволяє швидко орієнтуватися в завданнях. Є
                  потенціал для розширення функціоналу.
                </p>
              </div>
            </div>
            <div className="home-teacher__catalog">
              <div className="home-teacher__catalog-top">
                <h2>Можливо вам сподобається</h2>
                <div className="home-teacher__catalog-top-search">
                  <button className="home-teacher__catalog-top-search-btn-filter">
                    filter
                  </button>
                  <p>пошук ідей...</p>
                  <button className="home-teacher__catalog-top-search-btn-search">
                    <Image
                      src="/SVG/search2.svg"
                      alt="icon search"
                      width="24"
                      height="24"
                    />
                  </button>
                </div>
              </div>
              <div className="home-teacher__catalog-view">
                {maps.map((map) => (
                  <Link key={map.id} href="#">
                    <Image
                      className="home-teacher__catalog-view-item"
                      src={
                        map.backgroundTitle
                          ? map.backgroundTitle
                          : "/images/Home_bg.png"
                      }
                      alt="bg map"
                      width="446"
                      height="254"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="home-student">
          <div className="home-student__inner">
            <div className="home-student__intro">
              <div className="home-student__intro-description">
                <h2>Знайди свій шлях &</h2>
                <h3>досягай вершин разом із нами</h3>

                <div className="home-student__intro-description-text">
                  <p>
                    Щоб пробудити в собі силу знань, варто лише зробити крок —
                    розпочати пошук викладача та курсу, або відновити
                    проходження своєї чарівної навчальної пригоди. І нехай твоя
                    історія буде сповнена перемог!
                  </p>
                  <div className="home-student__intro-description-text-btns">
                    <button className="home-student__intro-description-text-btns-search">
                      Розпочати пошук
                    </button>
                    <Link
                      className="home-student__intro-description-text-btns-view-course"
                      href="#"
                    >
                      Перейти до курсів
                    </Link>
                  </div>
                </div>
              </div>
              <div className="home-student__intro-img"></div>
            </div>
            <div className="home-student__recommendation">
              <h2>
                <span>Найкращі</span> з найкращих
              </h2>
            </div>
            <div className="home-teacher__catalog">
              <div className="home-teacher__catalog-top">
                <h2>Можливо вам сподобається</h2>
                <div className="home-teacher__catalog-top-search">
                  <button className="home-teacher__catalog-top-search-btn-filter">
                    filter
                  </button>
                  <p>пошук ідей...</p>
                  <button className="home-teacher__catalog-top-search-btn-search">
                    <Image
                      src="/SVG/search2.svg"
                      alt="icon search"
                      width="24"
                      height="24"
                    />
                  </button>
                </div>
              </div>
              <div className="home-teacher__catalog-view">
                {courses.map((course) => (
                  <Link href={`/course/${course.id}`} key={course.id}>
                    <Image
                      className="home-teacher__catalog-view-item"
                      src={
                        course.coursePhoto
                          ? course.coursePhoto
                          : "/images/Home_bg.png"
                      }
                      alt="bg map"
                      width="446"
                      height="254"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeSectionPage;
