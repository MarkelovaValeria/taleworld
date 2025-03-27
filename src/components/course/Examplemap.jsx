"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const ExampleMap = () => {
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
  );
};

export default ExampleMap;
