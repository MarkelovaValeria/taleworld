import Image from "next/image";
import Link from "next/link";

import BaseContainer from "@/components/common/BaseContainer/BaseContainer";

import logo from "/public/svg/tw-green-logo.svg";
import robot from "/public/images/auth/robot.png";

import style from "./AuthStart.module.css";

const AuthStart = () => {
  return (
    <section className={style.auth_start}>
      <BaseContainer>
        <div className={style.auth_start_content}>
          <Image
            alt="robot"
            src={robot}
            width={484}
            height={354}
            className={style.auth_start_img_robot}
          />

          <Image
            alt="logo"
            src={logo}
            width={635}
            height={174}
            className={style.auth_start_logo}
          />

          <div className={style.auth_start_text}>
            <h1 className={style.auth_start_text_title}>ВЧИ ТА НАВЧАЙ!</h1>
            <p className={style.auth_start_text_subtitle}>
              Цей простір об'єднує тих, хто прагне ділитися знаннями, і тих, хто
              готовий їх отримати.
            </p>
          </div>

          <Link className={style.auth_start_btn} href={"/login"}>
            ВПЕРЕД
          </Link>
        </div>
      </BaseContainer>
    </section>
  );
};

export default AuthStart;
