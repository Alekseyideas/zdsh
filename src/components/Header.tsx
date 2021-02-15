import React from 'react';
import styled from 'styled-components';
import srcLogo from '../assets/images/logo.png';
import { COLORS } from '../utils/consts';

interface Props {}

export const Header = (props: Props) => {
  console.log(11);
  return (
    <WrapperS>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <LogoS href="/">
            <img src={srcLogo} alt="Заступник директора школы" />
          </LogoS>

          <div id="panelcontainer">
            <div className="menu menu_type_user" id="authButton" />
          </div>
        </div>
      </div>
    </WrapperS>
  );
};

const WrapperS = styled.header`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 0;
  background: ${COLORS.main};
`;
const LogoS = styled.a`
  overflow: hidden;
  img {
    max-width: 200px;
    height: auto;
    transform: translateX(-15px);
  }
`;
