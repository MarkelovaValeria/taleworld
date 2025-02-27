import Image from "next/image";

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
  ];

  return (
    <div className="course-card__content">
      {cards.map((imgs, index) => (
        <div key={index} className="course-card__item">
          <img className="course-card__item-img" src={imgs.path} alt="" />
          <p className="course-card__item-description">{imgs.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ExampleCard;
