import Link from "next/link";

const Links = () => {
  const links = [
    {
      title: "головна",
      path: "/home",
    },
    {
      title: "курси",
      path: "/createcourse",
    },
    {
      logo: "/next.svg",
    },
    {
      title: "про нас",
      path: "/about",
    },
    {
      title: "",
      path: "/account",
    },
  ];

  return (
    <div className="links">
      {links.map((link) =>
        link?.logo ? (
          <span>logo</span>
        ) : (
          <Link className="header__nav-links" href={link.path} key={link.title}>
            {link.title}
          </Link>
        )
      )}
    </div>
  );
};

export default Links;
