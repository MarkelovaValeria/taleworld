import BaseContainer from "@/components/common/BaseContainer/BaseContainer";
import RegistrationChoiceCard from "./RegistrationChoiceCard";
import Image from "next/image";
import Link from "next/link";

import logo from "/public/svg/tw-green-logo.svg";
import arrow from "/public/images/auth/arrow.svg";
import robotWho from "/public/images/auth/robot-who.png";

import style from "./RegistrationSection.module.css";

const RegistrationSection = () => {
  return (
    // <section className="registration-choise">
    //   <div className="main-container">
    //     <div className="registration-choise__inner">
    //       <img src="\svg\TaleWorld-logo.svg" className="reg-log-page-logo" />
    //       <div className="registration-choise__role">
    //         <Link
    //           href={{
    //             pathname: "/registration/role",
    //             query: {
    //               role: "student",
    //             },
    //           }}
    //         >
    //           Студент
    //         </Link>
    //         <p>ХТО ТИ</p>
    //         <Link
    //           href={{
    //             pathname: "/registration/role",
    //             query: {
    //               role: "teacher",
    //             },
    //           }}
    //         >
    //           Викладач
    //         </Link>
    //       </div>
    //       <p className="reg-log-page__choise">
    //         Вже маєте профіль? -{" "}
    //         <Link href="/login" className="reg-log-page-link">
    //           Увійти
    //         </Link>
    //       </p>
    //     </div>
    //   </div>
    // </section>

    <section className={style.reg_choice}>
      <BaseContainer>
        <div className={style.reg_choice_inner}>
          <Image src={logo} height={110} width={352} alt="logo" />
          <div className={style.reg_choice_start}>
            <RegistrationChoiceCard text="Студент" role="student" />

            <div className={style.reg_choice_start_content}>
              <Image
                className={style.reg_choice_start_content_arrow_left}
                src={arrow}
                alt="arrow left"
                width={155}
                height={4}
              />
              <Image
                className={style.reg_choice_start_content_arrow_right}
                src={arrow}
                alt="arrow right"
                width={155}
                height={4}
              />

              <Image
                src={robotWho}
                alt="robot who choice"
                width={299}
                height={220}
              />
              <p className={style.reg_choice_start_content_text}>
                Вже маєте профіль? - <Link href="/login">Увійти</Link>
              </p>
            </div>

            <RegistrationChoiceCard text="Викладач" role="teacher" />
          </div>
        </div>
      </BaseContainer>
    </section>
  );
};

export default RegistrationSection;
