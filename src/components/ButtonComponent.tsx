import React from "react";
import styled from "styled-components";

const CreateButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

type Props = {
  handleClick: () => void;
  children: string;
};

function ButtonComponent({ handleClick, children }: Props) {
  return <CreateButton onClick={handleClick}>{children}</CreateButton>;
}

export default ButtonComponent;
