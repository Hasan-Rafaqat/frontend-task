import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import AddTask from "../components/AddTask";

type Props = {};

function CreateTask({}: Props) {
  return (
    <>
      <HeaderComponent />
      <AddTask />
    </>
  );
}

export default CreateTask;
