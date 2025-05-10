import Image from "next/image";
import Links from "./links/Links";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Image
        src="\SVG\TaleWorld-logo-header.svg"
        alt="logo"
        width="160"
        height="40"
      />
      <div className="header-nav">
        <div className="header-nav-links">
          <Link className="header-nav-links-link" href="/home">
            головна
          </Link>
          <Link className="header-nav-links-link" href="#">
            власні курси
          </Link>
        </div>
        <Link className="header-nav-account" href="#">
          <Image
            className="header-links-account-img"
            src="/images/accountImg.jpeg"
            alt="account img"
            width="40"
            height="40"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
