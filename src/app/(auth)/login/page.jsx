import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="main-container">
        <div className="login-page__inner">
          <img src="\SVG\TaleWorld-logo.svg" className="reg-log-page-logo" />
          <form className="login-page__form">
            <div className="login-page__form-inputs">
              <input
                type="email"
                placeholder="Введіть пошту"
                className="login-page__form-input"
              />
              <input
                type="password"
                placeholder="Введіть пароль"
                className="login-page__form-input"
              />
            </div>
            <button type="submit">Увійти</button>
          </form>
          <div className="reg-log-page__choise">
            <p>
              Забули пароль? -{" "}
              <Link href="#" className="reg-log-page-link">
                Змінити пароль
              </Link>
            </p>
            <p>
              Ще не маєте профілю? -{" "}
              <Link href="/registration" className="reg-log-page-link">
                Зареєструватися
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
