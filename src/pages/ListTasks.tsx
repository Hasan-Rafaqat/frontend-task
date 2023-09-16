import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { useAppSelector } from "../hooks/hooks";
import { taskSelector } from "../redux/tasks/taskSlice";
import TaskCard from "../components/TaskCard";

type Props = {};

function ListTasks({}: Props) {
  const selectedTasks = useAppSelector(taskSelector);

  return (
    <>
      <HeaderComponent />
      {selectedTasks?.map((task) => (
        <TaskCard key={task.id} text={task.text} />
      ))}
    </>
  );
}

export default ListTasks;
