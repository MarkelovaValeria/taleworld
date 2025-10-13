import Image from "next/image";

const Searchbar = () => {
  return (
    <div className="search">
      <button className="search-btn-filter">filter</button>
      <input placeholder="пошук ідей..." />
      <button className="search-btn-search">
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
