import Link from "next/link";

import style from "./PageBottomNavButtons.module.css";

const PageBottomNavButtons = ({ isWhite, buttons }) => {
  console.log(buttons);
  return (
    <div
      className={`${style.bottom_page_buttons_container} ${isWhite ? style.white : ""}`}
    >
      {buttons.map((btn, index) =>
        btn.link ? (
          <Link
            key={index}
            href={btn.link}
            className={style.bottom_page_buttons_btn}
          >
            {btn.text}
          </Link>
        ) : (
          <button
            key={index}
            className={style.bottom_page_buttons_btn}
            onClick={btn.onHandleClick}
          >
            {btn.text}
          </button>
        ),
      )}
    </div>
  );
};

export default PageBottomNavButtons;
