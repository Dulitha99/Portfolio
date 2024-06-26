import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="relative z-50">
      <div className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Dulitha<span className="text-accent">.</span>
            </h1>
          </Link>
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/contact" />
            <button>Hire Me</button>
          </div>
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
