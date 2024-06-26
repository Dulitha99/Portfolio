"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const Links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "education", path: "/education" },
  { name: "resume", path: "/resume" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {Links.map((link) => (
          <Link key={link.path} href={link.path}>
            <a className={pathname === link.path ? "active-link" : ""}>
              {link.name}
            </a>
          </Link>
        ))}
      </SheetContent>
      <div>Logo</div>
    </Sheet>
  );
};

export default MobileNav;
