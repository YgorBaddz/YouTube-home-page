import { Bell, Menu, Upload, User } from "lucide-react";
import logo from "../assets/ytlogo.png";
import Button from "../components/Button";

const PageHeader = () => {
  return (
    <div className="flex gap-10 lp:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button size="icon" variant="ghost">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} alt="" className="h-8" />
        </a>
      </div>
      <div className=""></div>
      <div className="flex flex-shrink-0 md:gap-4">
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
