"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const ExampleCard = () => {
  const cards = [
    {
      path: "/images/Home.png",
      description:
        "Відкрийте шлях до світу таємничих знань: оберіть готовий урок або створіть свій, що сяятиме променем вашої уяви!",
    },
    {
      path: "/images/Home2.png",
      description:
        "Відкрийте шлях до світу таємничих знань: оберіть готовий урок або створіть свій, що сяятиме променем вашої уяви!",
    },
    {
      path: "/images/Home.png",
      description:
        "Відкрийте шлях до світу таємничих знань: оберіть готовий урок або створіть свій, що сяятиме променем вашої уяви!",
    },
    {
      path: "/images/Home2.png",
      description:
        "Відкрийте шлях до світу таємничих знань: оберіть готовий урок або створіть свій, що сяятиме променем вашої уяви!",
    },
    {
      path: "/images/Home2.png",
      description:
        "Відкрийте шлях до світу таємничих знань: оберіть готовий урок або створіть свій, що сяятиме променем вашої уяви!",
    },
    {
      path: "/images/Home.png",
      description:
        "Відкрийте шлях до світу таємничих знань: оберіть готовий урок або створіть свій, що сяятиме променем вашої уяви!",
    },
  ];

  const [coursebtn, setCorsebtn] = useState(1);
  const toggleTab2 = (index) => {
    setCorsebtn(index);
  };

  return (
    <div className="">
      <div
        className={
          coursebtn === 1
            ? "course-card__content2 course-active"
            : "course-card__content2"
        }
      >
        {cards.map((imgs, index) => (
          <div
            key={index}
            className="course-card__item"
            onClick={() => toggleTab2(2)}
          >
            <img className="course-card__item-img" src={imgs.path} alt="" />
            <p className="course-card__item-description">{imgs.description}</p>
          </div>
        ))}
      </div>

      <div
        className={
          coursebtn === 2 ? "course-page course-active" : "course-page"
        }
      >
        <div className="main-container">
          <div className="">
            <div className="course-page__content-and-review">
              <div className="course-page__content">
                <img
                  className="course-page__content-img"
                  src="/images/Home2.png"
                  alt=""
                />
                <div className="course-page__content-description">
                  <div className="course-page__content-description-h">
                    <h2 className="course-page__content-description-h2">
                      Назва курсу
                    </h2>
                    <h3 className="course-page__content-description-h3">
                      Маркелова Валерія
                    </h3>
                  </div>
                  <p className="course-page__content-description-text">
                    <span className="course-page__content-description-text-span">
                      TaleWorld
                    </span>{" "}
                    - ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                    vehicula libero sit amet mi venenatis, in egestas eros
                    convallis. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Vivamus vehicula libero sit amet mi
                    venenatis, in egestas eros convallis. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Vivamus vehicula libero
                    sit amet mi venenatis, in egestas eros convallis.{" "}
                  </p>
                  <div className="course-page__content-description-recommendation">
                    <h3 className="content-description-recommendation-h3">
                      схожі карти
                    </h3>
                    <div className="test"></div>
                  </div>
                </div>
              </div>
              <div className="course-page__review">
                <Link href="/" className="course-page__review-links">
                  <span className="review-links-span">Roman Kovinia</span>
                  <p className="review-links-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus vehicula libero sit amet mi venenatis, in egestas
                    eros convallis.
                  </p>
                </Link>
                <Link href="/" className="course-page__review-links">
                  <span className="review-links-span">Roman Kovinia</span>
                  <p className="review-links-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus vehicula libero sit amet mi venenatis, in egestas
                    eros convallis.
                  </p>
                </Link>
                <Link href="/" className="course-page__review-links">
                  <span className="review-links-span">Roman Kovinia</span>
                  <p className="review-links-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus vehicula libero sit amet mi venenatis, in egestas
                    eros convallis.
                  </p>
                </Link>
              </div>
            </div>

            <div className="course-page__btns">
              <button
                className="course-page__btns-btn"
                onClick={() => toggleTab2(1)}
              >
                ПЕРЕГЛЯНУТИ ІНШІ ВАРІАНТИ
              </button>
              <button className="course-page__btns-btn">
                ПЕРЕГЛЯНУТИ ВІДГУКИ
              </button>
              <button className="course-page__btns-btn">
                РОЗПОЧАТИ СТВОРЕННЯ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleCard;
