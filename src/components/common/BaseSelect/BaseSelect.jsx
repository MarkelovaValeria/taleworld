"use client";

import { useState } from "react";

import Image from "next/image";

import arrowBottom from "/public/images/auth/arrow-bottom.svg";

import style from "./BaseSelect.module.css";

const BaseSelect = ({ text, list, selectedItem, changeSelectedItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickOpen = () => {
    setIsOpen(true);
  };

  const handleChangeItem = (value) => {
    setIsOpen(false);
    changeSelectedItem(value);
  };

  return (
    <div className={style.select_container}>
      <button className={style.select} onClick={onClickOpen} type="button">
        <span>{selectedItem === "" ? text : selectedItem}</span>
        <div className={`${style.select_arrow} ${isOpen ? style.opened : ""}`}>
          <Image src={arrowBottom} alt="arrow bottom" width={20} height={16} />
        </div>
      </button>
      <ul className={`${style.select_list} ${isOpen ? style.opened : ""}`}>
        {list.map((item) => (
          <li
            key={item}
            onClick={() => handleChangeItem(item)}
            className={style.select_list_item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BaseSelect;
