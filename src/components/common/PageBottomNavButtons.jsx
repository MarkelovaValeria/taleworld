import Link from "next/link";

const PageBottomNavButtons = ({ buttons }) => {
  return (
    <div className="bottom-page-buttons-container">
      {buttons.map((button, index) => (
        <Link
          key={index}
          href={button.link}
          className="bottom-page-buttons-btn"
        >
          {button.text}
        </Link>
      ))}
    </div>
  );
};

export default PageBottomNavButtons;
