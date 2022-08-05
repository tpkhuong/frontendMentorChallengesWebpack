import React from "react";
import GoBackButtonStyles from "../../styles/Components/shared/GoBackButton.module.css";
import Link from "next/link";
// import { goToPreviousPage } from "../../utils/helpers";
// import { previousURLs } from "../../src/storage";

function GoBackButton({ children, ...props }) {
  //   const [urlPath, setPathState] = React.useState("/earphones");
  const [urlData, urlState] = React.useState(false);
  // access the last item in the array previousUrls
  // in our goToPreviousPage function in helpers.js
  // update the previousUrls array in localStorage
  // we can access the last item in previouSurls array; array[array.length - 1]
  // it will be the last item in array because we will mutate the array in localStorage
  // using .pop() method
  React.useEffect(() => {
    const arrayOfLinks = JSON.parse(localStorage.getItem("previousLinks"));
    const lastUrl = arrayOfLinks[arrayOfLinks.length - 1];
    urlState(lastUrl);
  }, []);
  return (
    <React.Fragment>
      {!urlData ? (
        <Link href={props.baseCategoryUrl}>
          <a className={GoBackButtonStyles[`go-back-btn`]}>Go Back</a>
        </Link>
      ) : (
        <Link href={urlData}>
          <a className={GoBackButtonStyles[`go-back-btn`]}>Go Back</a>
        </Link>
      )}
    </React.Fragment>
    // <Link href={urlData}>
    //   <a className={GoBackButtonStyles[`go-back-btn`]}>Go Back</a>
    // </Link>
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
