import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TaskName = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

type Props = {
  text: string;
};

function TaskCard({ text }: Props) {
  return (
    <CardContainer>
      <TaskName>{text}</TaskName>
    </CardContainer>
  );
}

export default TaskCard;
