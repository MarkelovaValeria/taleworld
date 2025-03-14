import Link from "next/link";

const Home = () => {
  return (
    <div className="home">
      <div className="main-container">
        <div className="home__inner">
          <div className="home__info">
            <img src="\SVG\TaleWorld-logo.svg" className="home-logo" />
            <p className="home-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vehicula libero sit amet mi venenatis, in egestas eros convallis.
              Praesent{" "}
            </p>
          </div>
          <div className="home__btns">
            <Link className="home__btns-btn" href="/createcourse">
              Вперед
            </Link>
            <button className="home__btns-btn">Про нас</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
