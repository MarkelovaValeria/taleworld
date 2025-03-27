import Link from "next/link";

const RegistrationPage = () => {
  return (
    <div className="registration-page">
      <div className="main-container">
        <div className="registration-page__inner">
          <img src="\SVG\TaleWorld-logo.svg" className="reg-log-page-logo" />
          <div className="registration-page__choise">
            <Link href="/registration/student">Студент</Link>
            <p>ХТО ТИ</p>
            <Link href="/registration/teacher">Викладач</Link>
          </div>
          <p className="reg-log-page__choise">
            Вже маєте профіль? -{" "}
            <Link href="/login" className="reg-log-page-link">
              Увійти
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
