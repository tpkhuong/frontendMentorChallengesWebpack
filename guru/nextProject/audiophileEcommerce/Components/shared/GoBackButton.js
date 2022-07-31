import React from "react";
import GoBackButtonStyles from "../../styles/Components/shared/GoBackButton.module.css";
import Link from "next/link";
import { previousURLs } from "../../src/storage";

function GoBackButton({ children, ...props }) {
  //   const [urlPath, setPathState] = React.useState("/earphones");
  const lastUrl = previousURLs.pop();
  return (
    <Link href={`${lastUrl}`}>
      <a className={GoBackButtonStyles[`go-back-btn`]}>Go Back</a>
    </Link>
  );
}

// function previousUrl(event) {
//   //   remove last url added to cachedObj.previousURLs array
//   console.log(cachedObj);
//   const prevUrl = cachedObj.previousURLs.pop();
//   console.log(prevUrl);
//   //   call setPathState to update href of Link component
//   this.setPathState(prevUrl);
// }

export default GoBackButton;
