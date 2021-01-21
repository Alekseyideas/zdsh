import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';

interface MainWrapperProps {
  children: React.ReactChild;
}

export const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {
  return (
    <WrapperS>
      <Header />
      <Menu />
      <main>{children}</main>
    </WrapperS>
  );
};

const WrapperS = styled.div`
  padding-top: 93px;
`;
