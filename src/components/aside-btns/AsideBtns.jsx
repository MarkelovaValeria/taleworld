const AsideBtns = ({ toggleTab, indexbtn }) => {
  return (
    <div className="btns">
      <div className="line top"></div>
      <button
        className={
          indexbtn === 1 ? "circle active line-circle" : "circle line-circle"
        }
        onClick={() => toggleTab(1)}
      ></button>
      <button
        className={
          indexbtn === 2 ? "circle active line-circle" : "circle line-circle"
        }
        onClick={() => toggleTab(2)}
      ></button>
      <button
        className={indexbtn === 3 ? "circle active" : "circle"}
        onClick={() => toggleTab(3)}
      ></button>
      <div className="line bottom"></div>
    </div>
  );
};

export default AsideBtns;
