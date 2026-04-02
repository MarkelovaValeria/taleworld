import style from "./ChangeViewButton.module.css";

const ChangeViewButton = ({ view, setView }) => {
  const toggleView = () => {
    setView(view === "col" ? "row" : "col");
  };

  return (
    <button
      onClick={toggleView}
      className={`${style.view_btn} ${view === "row" ? style.row : ""}`}
    >
      <div
        className={`${style.view_btn_col} ${view === "col" ? style.active : ""}`}
      ></div>

      <div
        className={`${style.view_btn_row} ${view === "row" ? style.active : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};

export default ChangeViewButton;
