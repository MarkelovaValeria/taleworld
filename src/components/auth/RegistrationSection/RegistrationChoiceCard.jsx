import Link from "next/link";

import cardPhoto from "/public/images/auth/register-role-choice.png";

import style from "./RegistrationSection.module.css";
import Image from "next/image";

const RegistrationChoiceCard = ({ text, role }) => {
  return (
    <Link
      href={{
        pathname: "/registration/role",
        query: {
          role: role,
        },
      }}
      className={style.reg_choice_card}
    >
      <Image
        src={cardPhoto}
        width={242}
        height={268}
        alt="card photo"
        className={style.reg_choice_card_img}
      />
      <div className={style.reg_choice_card_text}>{text}</div>
    </Link>
  );
};

export default RegistrationChoiceCard;
