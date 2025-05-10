import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  const imgs = [
    "/images/Home_bg.png",
    "/images/Home_bg.png",
    "/images/Home_bg.png",
    "/images/Home_bg.png",
    "/images/Home_bg.png",
    "/images/Home_bg.png",
    "/images/Home_bg.png",
    "/images/Home_bg.png",
    "/images/Home_bg.png",
  ];
  const role = "teacher";
  return (
    <div>
      {role == "teacher" ? (
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
                    href="#"
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
                <div className="home-teacher__recommendation-view-img"></div>
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
                  <div className="home-teacher__recommendation-choise-imgs-img active"></div>
                  <div className="home-teacher__recommendation-choise-imgs-img"></div>
                  <div className="home-teacher__recommendation-choise-imgs-img"></div>
                  <div className="home-teacher__recommendation-choise-imgs-img"></div>
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
                {imgs.map((img) => (
                  <Image
                    className="home-teacher__catalog-view-item"
                    src={img}
                    alt="bg map"
                    width="446"
                    height="254"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="home-student">
          <div className="home-student__inner">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
