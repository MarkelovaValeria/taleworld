import style from "./BaseInput.module.css";

const BaseInput = ({
  value = "",
  changeValue,
  type = "text",
  placeholder = "Напишіть текст",
  isGreen,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => changeValue(e.target.value)}
      placeholder={placeholder}
      className={`${style.base_input} ${isGreen ? style.green : ""}`}
    />
  );
};

export default BaseInput;
