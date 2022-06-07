import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./context";

export default function Submenu() {
  const { isSubmenuOpen, location } = useGlobalContext();

  const container = useRef(null);

  useEffect(() => {
    const subMenu = container.current;
    const { center, bottom } = location;

    subMenu.style.left = `${center}px`;
    subMenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside className={`submenu ${isSubmenuOpen && "show"}`} ref={container}>
      Submenu
    </aside>
  );
}
