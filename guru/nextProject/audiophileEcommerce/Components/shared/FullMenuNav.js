import React from "react";
import FullNavStyles from "../../styles/Components/shared/FullMenuNav.module.css";
import { arrayOfLinkText } from "../../src/storage";
import { cachedCheckoutInputs } from "../../utils/navlistHelper";
import { ErrorMessageContext } from "../../pages/checkout/index";
import Link from "next/link";

function FullMenuNav({ children, ...props }) {
  // const [refObj, setRefObj] = React.useState(null);
  const refObj = React.useContext(ErrorMessageContext);
  // React.useEffect(() => {
  //   setRefObj(refObj);
  // }, []);
  // console.log("hello");
  return (
    <nav role="navigation" aria-label={props.navLabel}>
      <ul
        role="menubar"
        data-isfooternav={props.footerNav}
        data-isheadernav={props.headerNav}
        className={FullNavStyles[`navlist`]}
        onClick={cachedCheckoutInputs.bind({ refObj })}
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
