import Link from "next/link";

import style from "./LogRegButton.module.css";

const LogRegButton = ({ isLogin }) => {
  return isLogin ? (
    <div className={style.logreg}>
      <Link className={style.logreg_link} href={"/registration"}>
        Створити аккаунт
      </Link>
      <button className={style.logreg_btn} type="submit">
        УВІЙТИ
      </button>
    </div>
  ) : (
    <div className={style.logreg}>
      <button className={style.logreg_btn} type="submit">
        ЗАРЕЄСТРУВАТИСЯ
      </button>
      <Link className={style.logreg_link} href={"/login"}>
        Увійти
      </Link>
    </div>
  );
};

export default LogRegButton;
