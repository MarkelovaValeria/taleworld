import Link from "next/link";

const Home = () => {
  return (
    <div className="home">
      <div className="home-bg-left"></div>
      <div className="home__inner2">
        <div className="home__info">
          <img src="\SVG\TaleWorld-logo.svg" className="home-logo" />
          <p className="home-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            vehicula libero sit amet mi venenatis, in egestas eros convallis.
            Praesent{" "}
          </p>
        </div>
        <div className="home__btns">
          <Link className="home__btns-btn" href="/login">
            Увійти
          </Link>
          <Link href={"#"} className="home__btns-btn">
            Про нас
          </Link>
        </div>
      </div>
      <div className="home-bg-right"></div>
    </div>
  );
};

export default Home;
