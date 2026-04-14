"use client";
import React from "react";
// import Footer from './footer/Footer';
// import ModalCustom from "../components/customs/ModalCustom";
import { DevTools } from "jotai-devtools";
import "jotai-devtools/styles.css";
import { usePathname } from "next/navigation";
import Header from "./header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Listen for 401 responses and disconnect wallet automatically

  return (
    <div>
      <DevTools />
      <Header />
      <main className="relative overflow-x-hidden hide-scrollbar">
        {pathname === "/" ? (
          <div
            className="absolute w-screen h-screen opacity-8 pointer-events-none left-[2%] "
            style={{
              backgroundImage: "url('/image/bg1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ) : (
          <></>
        )}
        <div className="px-1 pt-16 max-w-8xl mx-auto">{children}</div>
      </main>
      {/* {pathname === "/" ? <Footer /> : <></>} */}
      {/* <ModalCustom /> */}
    </div>
  );
}
