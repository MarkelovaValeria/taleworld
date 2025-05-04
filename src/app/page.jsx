import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="home">
      <Image
        className="home-logo1"
        alt="logo"
        width="440"
        height="40"
        src="\SVG\TaleWorld-logo.svg"
      />
      <div className="home-description">
        <h1>ВЧИ ТА НАВЧАЙ</h1>
        <p>
          Цей простір об'єднує тих, хто прагне ділитися знаннями, і тих, хто
          готовий їх отримати.
        </p>
      </div>
      <div className="home-btns">
        <Link href={"/login"} className="home-btns-next">
          Вперед
        </Link>
        <Link href={"#"} className="home-btns-about">
          Про нас
        </Link>
      </div>
    </div>
  );
};

export default Home;
