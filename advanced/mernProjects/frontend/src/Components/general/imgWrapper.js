import React from "react";

function ImgWrapper(props) {
  const { children, imgSize } = props;
  return <div className={imgSize}>{children}</div>;
}

export default ImgWrapper;
