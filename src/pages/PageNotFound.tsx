import React from "react";
import HeaderComponent from "../components/HeaderComponent";

type Props = {};

function PageNotFound({}: Props) {
  return (
    <>
      <HeaderComponent />
      <div>Page not found</div>
    </>
  );
}

export default PageNotFound;
