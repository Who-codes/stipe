import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./context";

export default function Submenu() {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    const subMenu = container.current;
    const { center, bottom } = location;

    subMenu.style.left = `${center}px`;
    subMenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns(`col-3`);
    }

    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);

  return (
    <aside className={`submenu ${isSubmenuOpen && "show"}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { url, icon, label } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
}
