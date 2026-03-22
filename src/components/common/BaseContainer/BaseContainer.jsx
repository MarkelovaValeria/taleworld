import style from "./BaseContainer.module.css";

const BaseContainer = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default BaseContainer;
