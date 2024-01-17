import {
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Clock,
  History,
  Home,
  Library,
  PlaySquare,
  Repeat,
} from "lucide-react";
import { Children, ElementType, ReactNode, useState } from "react";
import Button, { buttonStyles } from "../components/Button";
import { twMerge } from "tailwind-merge";

const SideBar = () => {
  return (
    <>
      {/* SMALL SCREEN */}
      <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
        <SmallSideBarItem Icon={Home} title="Home" url="/" />
        <SmallSideBarItem Icon={Repeat} title="Shorts" url="/shorts" />
        <SmallSideBarItem
          Icon={Clapperboard}
          title="Subscriptions"
          url="/subscriptions"
        />
        <SmallSideBarItem Icon={Library} title="Library" url="/library" />
      </aside>
      {/* LARGE SCREEN */}
      <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col gap-2 px-2 ">
        <LargeSideBarSection>
          <LargeSideBarItem isActive Icon={Home} title="Home" url="/" />
          <LargeSideBarItem Icon={Clapperboard} title="Home" url="/" />
        </LargeSideBarSection>
        <hr />
        <LargeSideBarSection>
          <LargeSideBarItem Icon={Library} title="Library" url="/library" />
          <LargeSideBarItem Icon={History} title="History" url="/history" />
          <LargeSideBarItem
            Icon={PlaySquare}
            title="Your Videos"
            url="/your-videos"
          />
          <LargeSideBarItem
            Icon={Clock}
            title="Watch Later"
            url="/playlist?list=WL"
          />
        </LargeSideBarSection>
      </aside>
    </>
  );
};

// for small screens

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

function SmallSideBarItem({ Icon, title, url }: SmallSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py-4 px-1 flex flex-col items-center rounded-lg gap-1"
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
}

// for large screens

type LargeSideBarSectionProps = {
  children: ReactNode;
  title?: string;
  visibleItemCount?: number;
};

function LargeSideBarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSideBarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children).flat();
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);
  const showExpandButton = childrenArray.length > visibleItemCount;
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div className="">
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded((e) => !e)}
          variant="ghost"
          className="w-full flex items-center rounded-lg gap-4 p-3"
        >
          <ButtonIcon className="w-6 h-6" />
          <div className="">{isExpanded ? "Show Less" : "Show More"}</div>
        </Button>
      )}
    </div>
  );
}

type LargeSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
  isActive?: boolean;
};

function LargeSideBarItem({
  Icon,
  title,
  url,
  isActive = false,
}: LargeSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-3 ${
          isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
        }`
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  );
}

export default SideBar;
