import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Events",
    href: "/events",
    submenu: [
      { label: "Events list", href: "/events" },
      { label: "Events details", href: "/events/event-1" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    submenu: [
      { label: "Resources list", href: "/resources" },
      { label: "Resources details", href: "/resources/resource_1" },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Documentation", href: "/documentation#version" },
];
