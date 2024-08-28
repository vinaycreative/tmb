import React from "react";
import Logo from "@/public/images/logo.svg";
import Image from "next/image";
import {
  LayoutGrid,
  LucideIcon,
  Menu,
  Popcorn,
  Search,
  Tv,
} from "lucide-react";
import Link from "next/link";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

interface NavLinks {
  name: string;
  url: string;
  icon: LucideIcon;
}

const Header = () => {
  const navLinks: NavLinks[] = [
    {
      name: "movies",
      url: "/movies",
      icon: Popcorn,
    },
    {
      name: "tv shows",
      url: "/tv",
      icon: Tv,
    },
    {
      name: "genres",
      url: "/categories",
      icon: LayoutGrid,
    },
  ];
  return (
    <header className="fixed left-0 top-0 z-50 h-16 w-full border-b border-slate-200 bg-white py-2">
      <div className="container mx-auto">
        <div className="flex w-full justify-between">
          <Link href={"/"} className="logo">
            <Image src={Logo} width={100} height={40} alt="brand-logo" />
          </Link>
          <button className="ml-auto mr-2 rounded-md px-2.5 text-slate-600 hover:bg-sky-500 hover:text-white">
            <Search size={20} />
          </button>
          <nav className="hidden items-center md:inline-flex">
            {navLinks.map((nav) => {
              return (
                <Link
                  key={nav.name}
                  href={nav.url}
                  className="group flex items-center gap-2 rounded-md bg-transparent px-3 py-2 capitalize text-slate-800 transition-all ease-in-out hover:bg-sky-500 hover:text-white"
                >
                  <nav.icon
                    size={16}
                    className="text-slate-500 transition-all group-hover:size-4 group-hover:text-white"
                  />{" "}
                  {nav.name}
                </Link>
              );
            })}
          </nav>

          <Drawer>
            <DrawerTrigger asChild>
              <button className="rounded-md bg-slate-100 px-2.5 text-slate-600 hover:bg-sky-500 hover:text-white md:hidden">
                <Menu size={24} />
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto flex h-40 w-full max-w-sm items-center justify-center">
                <div className="flex items-center gap-3">
                  {navLinks.map((nav) => {
                    return (
                      <Link
                        key={nav.name}
                        href={nav.url}
                        className="group flex items-center gap-2 rounded-md border border-slate-200 bg-transparent px-3 py-2 capitalize text-slate-800 transition-all ease-in-out hover:bg-sky-500 hover:text-white"
                      >
                        <nav.icon
                          size={16}
                          className="text-slate-500 transition-all group-hover:size-4 group-hover:text-white"
                        />{" "}
                        {nav.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;
