import Link from "next/link";

import style from "./BaseButton.module.css";

const BaseButton = ({ text, isLink, link, withSpecialHover }) => {
  return isLink ? (
    <Link href={link} className="">
      {text}
    </Link>
  ) : (
    <button>{text}</button>
  );
};

export default BaseButton;
