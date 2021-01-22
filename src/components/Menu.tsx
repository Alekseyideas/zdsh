import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS, ROUTE_PATH } from '../utils/consts';

interface MenuProps {}

export const Menu: React.FC<MenuProps> = () => {
  return (
    <WrapperS>
      <div className="container">
        <NavS className="nav">
          <NavLink className="nav-link" to={ROUTE_PATH.home}>
            Головна
          </NavLink>
          <NavLink className="nav-link" to={ROUTE_PATH.techniques}>
            Навчальні прийоми
          </NavLink>
          <NavLink className="nav-link" to={ROUTE_PATH.myCards}>
            Моя картотека прийомів
          </NavLink>
          <NavLink className="nav-link" to={ROUTE_PATH.instructions}>
            Iнструкція
          </NavLink>
        </NavS>
      </div>
    </WrapperS>
  );
};

const WrapperS = styled.div`
  position: fixed;
  z-index: 9;
  top: 53px;
  left: 0;
  width: 100%;
  background: #f7f7f7;
`;

const NavS = styled.nav`
  a {
    &:first-child {
      padding-left: 0;
    }
    &.active {
      color: ${COLORS.main};
    }
  }
`;
