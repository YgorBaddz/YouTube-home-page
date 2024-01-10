import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/ytlogo.png";
import Button from "../components/Button";
import { useEffect, useState } from "react";

const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div className="flex gap-10 lp:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={`${
          showFullWidthSearch ? "hidden" : "flex"
        } gap-4 items-center flex-shrink-0`}
      >
        <Button size="icon" variant="ghost">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} alt="" className="h-8" />
        </a>
      </div>

      <form
        className={`gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            variant="ghost"
            size="icon"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}

        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>

      <div
        onClick={() => setShowFullWidthSearch(true)}
        className={`${
          showFullWidthSearch ? "hidden" : "flex"
        } flex-shrink-0 md:gap-4 `}
      >
        <Button size="icon" variant="ghost" className="md:hidden flex">
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden flex">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
