import React from "react";
import Link from "next/link";
import { storageObj, arrayOfLinkText } from "../pages/api/storage";

function Navbar(props) {
  const { currentPage } = props;
  console.log(currentPage);
  return (
    <nav role="navigation">
      <ul className="navlist" role="menubar">
        {arrayOfLinkText.map(function makeLink(element, index) {
          return (
            <li key={index} role="none" className="navitem">
              <Link href={index != 0 ? `/${element.toLowerCase()}` : "/"}>
                {/* <a
                  data-current={element == currentPage ? "true" : "false"}
                  className="navlink"
                  role="menuitem"
                >{`0${index} ${element}`}</a> */}
                {element == currentPage ? (
                  <a role="menuitem" className="navlink" data-current="true">
                    <span className="link-digit">{`0${index}`}</span>
                    {`${element}`}
                  </a>
                ) : (
                  <a role="menuitem" className="navlink">
                    <span className="link-digit">{`0${index}`}</span>
                    {`${element}`}
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

export default Navbar;
