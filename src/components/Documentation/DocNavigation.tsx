"use client";
import Link from "next/link";
import { useState } from "react";

export const DocNavigation = () => {
  const [navItem, setNavItem] = useState("");

  const getNavItem = (item: string) => {
    setNavItem(item);
  };

  // Currently no navigation items
  const DocsNav: { id: number; navItem: string; hash: string }[] = [];

  return (
    <div className="flex flex-col gap-0.5 mt-4 items-start fixed pe-4">
      {DocsNav.map((item) => (
        <Link
          key={item.id}
          href={`#${item.hash}`}
          onClick={() => getNavItem(item.hash)}
          className={`py-2.5 hover:bg-primary/20 hover:text-primary dark:hover:text-primary xl:min-w-60 lg:min-w-52 min-w-full px-4 rounded-md text-midnight_text text-base font-medium ${
            item.hash === navItem
              ? "bg-primary text-white hover:bg-primary! hover:text-white! dark:hover:text-white"
              : "dark:text-white"
          }`}
        >
          {item.navItem}
        </Link>
      ))}
    </div>
  );
};
