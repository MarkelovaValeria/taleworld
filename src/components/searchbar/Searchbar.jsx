import Image from "next/image";

import style from "./Searchbar.module.css";

const Searchbar = ({ withoutFilters }) => {
  return (
    <div className={style.search}>
      <button
        className={`${style.search_btn_filter} ${withoutFilters ? style.hidden : ""}`}
      >
        filter
      </button>
      <input placeholder="пошук ідей..." />
      <button className={style.search_btn_search}>
        <Image
          src="/SVG/search2.svg"
          alt="icon search"
          width="24"
          height="24"
        />
      </button>
    </div>
  );
};

export default Searchbar;
