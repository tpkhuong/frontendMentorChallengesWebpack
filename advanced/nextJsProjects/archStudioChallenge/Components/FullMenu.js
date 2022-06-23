import React from "react";
import Link from "next/link";
import FullMenuStyles from "../styles/FullMenu.module.css";
import { arrOfLinkText } from "../pages/api/storage";

function FullMenu({ children, ...props }) {
  return (
    <nav
      className={FullMenuStyles.navbar}
      role="navigation"
      aria-label="primary"
    >
      <ul role="menubar" className={FullMenuStyles[`navlist`]}>
        {arrOfLinkText.map(function renderLinks(element, index) {
          return (
            <li
              key={Math.random() * index}
              className={FullMenuStyles[`navitem`]}
            >
              <Link href={`/${element}`}>
                {props.TODO == element ? (
                  <a
                    data-activePage="true"
                    role="menuitem"
                    className={FullMenuStyles[`navlink`]}
                  >
                    {element}
                  </a>
                ) : (
                  <a role="menuitem" className={FullMenuStyles[`navlink`]}>
                    {element}
                  </a>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default FullMenu;
