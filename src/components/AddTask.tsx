import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "../hooks/hooks";
import { addTask } from "../redux/tasks/taskSlice";
import ButtonComponent from "./ButtonComponent";

type Props = {};

const CreateTaskContainer = styled.div`
  margin: 8px;
`;

const TaskInput = styled.input`
  padding: 8px;
  font-size: 16px;
  margin-right: 8px;
`;

function AddTask({}: Props) {
  const [taskName, setTaskName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleCreateTask = () => {
    if (!taskName) {
      setErrorMessage("Please add a task");
    } else {
      setErrorMessage("");
      dispatch(
        addTask({
          id: uuidv4(),
          text: taskName,
        })
      );
      navigate("/list-tasks");
    }
  };
  return (
    <CreateTaskContainer>
      <h2>Create Task</h2>
      <div>
        <TaskInput
          type="text"
          placeholder="Task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <ButtonComponent
          handleClick={handleCreateTask}
          children="Create Task"
        />
      </div>
      <p>{errorMessage}</p>
    </CreateTaskContainer>
  );
}

export default AddTask;
