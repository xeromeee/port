"use client";

import { useState, useEffect, useRef } from "react";
import { MdExpandMore } from "react-icons/md";
import Dropdown from "@/components/navbar/Dropdown";

const MenuItems = (props) => {
  const { items, depthLevel, mobileNav, handleCloseMobileMenu } = props;

  const [dropdown, setDropdown] = useState(false);
  const [current, setCurrent] = useState("about");

  let ref = useRef();

  const handleScroll = (id) => {
    if (!id) return;
    const element = document.getElementById(id);
    if (!element) return;
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition;

    window.scroll({
      top: offsetPosition,
      behavior: "smooth",
    });
    setCurrent(id);
  };

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 900 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 900 && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            className={current === items.section ? `selected` : ""}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <p>{items.title}</p>
            <MdExpandMore />
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
            mobileNav={mobileNav}
            handleCloseMobileMenu={handleCloseMobileMenu}
          />
        </>
      ) : (
        <button
          type="button"
          className={current === items.section ? `selected` : ""}
          onClick={() => {
            handleCloseMobileMenu();
            handleScroll(items.section);
          }}
        >
          <p>{items.title}</p>
        </button>
      )}{" "}
    </li>
  );
};

export default MenuItems;