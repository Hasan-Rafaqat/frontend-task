// Header.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <NavMenu>
        <NavItem>
          <NavLink to="/list-tasks">List Tasks</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/create-task">Create Task</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/bulk-delete">Bulk Delete</NavLink>
        </NavItem>
      </NavMenu>
    </HeaderContainer>
  );
};

export default HeaderComponent;
