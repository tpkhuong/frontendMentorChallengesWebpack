import React from "react";
import Link from "next/link";
import MobileNavStyles from "../styles/MobileNav.module.css";
import { arrOfLinkText } from "../src/storage";

function MobileNav({ children, ...props }) {
  return (
    <div data-showmenu="false" className={MobileNavStyles[`mobilenav-wrapper`]}>
      <nav
        className={MobileNavStyles.navbar}
        role="navigation"
        aria-label="secondary"
      >
        <ul role="menubar" className={MobileNavStyles[`navlist`]}>
          {arrOfLinkText.map(function renderLinks(element, index) {
            return (
              <li
                key={Math.random() * index}
                className={MobileNavStyles[`navitem`]}
              >
                <Link href={index == 1 ? `/about` : `${element.toLowerCase()}`}>
                  {props.mobileCurrActive == element ? (
                    <a
                      data-activepage="true"
                      role="menuitem"
                      className={MobileNavStyles[`navlink`]}
                    >
                      {element}
                    </a>
                  ) : (
                    <a role="menuitem" className={MobileNavStyles[`navlink`]}>
                      {element}
                    </a>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default MobileNav;
