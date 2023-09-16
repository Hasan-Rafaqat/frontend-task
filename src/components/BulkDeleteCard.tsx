import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { taskSelector } from "../redux/tasks/taskSlice";
import { bulkDelete } from "../redux/tasks/taskSlice";
import ButtonComponent from "./ButtonComponent";

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TaskName = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const CheckboxContainer = styled.div`
  margin-left: auto;
  input {
    cursor: pointer;
  }
`;

type Props = {};
interface CheckedTasksState {
  [taskId: string]: boolean;
}

function BulkDeleteCard({}: Props) {
  const selectedTasks = useAppSelector(taskSelector);
  const dispatch = useAppDispatch();
  const [checkedTasks, setCheckedTasks] = useState<CheckedTasksState>({});

  const handleChange = (id: string) => {
    if (checkedTasks[id]) {
      setCheckedTasks({ ...checkedTasks, [id]: false });
    } else {
      setCheckedTasks({ ...checkedTasks, [id]: true });
    }
  };

  const handleBulkDelete = () => {
    const idsToDelete = [];
    for (const key in checkedTasks) {
      if (checkedTasks[key]) {
        idsToDelete.push(key);
      }
    }
    if (idsToDelete.length > 0) {
      // delete
      dispatch(bulkDelete(idsToDelete));
    }
  };

  return (
    <>
      {selectedTasks.map((task) => (
        <CardContainer key={task.id}>
          <TaskName>{task.text}</TaskName>
          <CheckboxContainer>
            <input onChange={() => handleChange(task.id)} type="checkbox" />
          </CheckboxContainer>
        </CardContainer>
      ))}
      {selectedTasks.length > 0 && (
        <ButtonContainer>
          <ButtonComponent
            handleClick={handleBulkDelete}
            children="Bulk Delete"
          />
        </ButtonContainer>
      )}
    </>
  );
}

export default BulkDeleteCard;
