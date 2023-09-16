import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import BulkDeleteCard from "../components/BulkDeleteCard";

type Props = {};

function BulkDelete({}: Props) {
  return (
    <>
      <HeaderComponent />
      <BulkDeleteCard />
    </>
  );
}

export default BulkDelete;
