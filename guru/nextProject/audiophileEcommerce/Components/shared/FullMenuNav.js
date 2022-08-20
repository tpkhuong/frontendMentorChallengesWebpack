import React from "react";
import FullNavStyles from "../../styles/Components/shared/FullMenuNav.module.css";
import { arrayOfLinkText } from "../../src/storage";
import Link from "next/link";

function FullMenuNav({ children, ...props }) {
  return (
    <nav role="navigation" aria-label={props.navLabel}>
      <ul
        role="menubar"
        data-isfooternav={props.footerNav}
        data-isheadernav={props.headerNav}
        className={FullNavStyles[`navlist`]}
        onClick={(event) => {
          if (
            event.target.closest("a[role='menuitem']") &&
            document.URL.includes("checkout")
          ) {
            console.log(document.URL);
          }
        }}
      >
        {arrayOfLinkText.map(function listitems(element, index) {
          return (
            <li
              key={Math.random() * index}
              role="none"
              className={FullNavStyles[`navitem`]}
            >
              <Link href={index == 0 ? "/" : `/${element}`}>
                <a className={FullNavStyles[`navlink`]} role="menuitem">
                  {element}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default FullMenuNav;
