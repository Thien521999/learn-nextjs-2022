import React from "react";
import { HeaderDesktop } from "./header-desktop";
import { HeaderMobile } from "./header-mobile";

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  console.log("Header");

  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
}
