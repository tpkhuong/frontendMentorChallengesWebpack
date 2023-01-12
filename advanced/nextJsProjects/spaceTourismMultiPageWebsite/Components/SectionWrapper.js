import React from "react";
import SectionStyles from "../styles/SectionWrapper.module.css";

// function SectionWrapper(props) {
//   /**
//    * testing ideas/understanding/algorithm
//    * **/

//   const { children } = props;
//   //   const [first, second, third] = children;
//   //   console.log(first);
//   //   console.log(second);
//   //   console.log(third);
//   //   console.log(props);
//   return (
//     <React.Fragment>
//       <section>
//         {/* title wrapper */}
//         {children}
//         {/* content-img-wrapper! */}
//       </section>
//       {/* testing ideas/understanding/algorithm */}
//       {/* <h2>first</h2>
//       <div>{first}</div>
//       <h2>second</h2>
//       <div>
//         <div>{second}</div>
//       </div>
//       <h2>third</h2>
//       <div>{third}</div> */}
//     </React.Fragment>
//   );
// }

function SectionWrapper(props) {
  const { idAttr, children } = props;
  return (
    <React.Fragment>
      <div className={SectionStyles.app} id={idAttr}>
        {children}
      </div>
    </React.Fragment>
  );
}

export default SectionWrapper;
