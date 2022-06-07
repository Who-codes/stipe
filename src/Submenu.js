import React from "react";
import { useGlobalContext } from "./context";

export default function Submenu() {
  const { isSubmenuOpen } = useGlobalContext();
  return (
    <aside className={`submenu ${isSubmenuOpen && "show"}`}>Submenu</aside>
  );
}
