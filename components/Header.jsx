import React from "react";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="py-8 xl:py-12 text-white">
        <div className="container mx-auto">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Dulitha<span className="text-accent">.</span>
            </h1>
          </Link>
          <div className="hidden xl:flex">
            <Nav />
            <Link href="/contact">
            <button>Hire Me</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
