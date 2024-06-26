"use client";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

import React from "react";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 pointer-events-none z-30 flex">
            <Stairs />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
